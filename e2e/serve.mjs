// Serves a production static export the way docker/*-nginx.conf does, with a
// config.json that selects fake data, so smoke tests never reach a network.
//
// Usage: node e2e/serve.mjs <explorer|staking> <port>

import { readFile, stat } from 'node:fs/promises';
import { createServer } from 'node:http';
import { extname, join, normalize } from 'node:path';
import { fileURLToPath } from 'node:url';

const [app, port] = process.argv.slice(2);
const roots = {
  explorer: '../packages/block-explorer/out',
  staking: '../packages/delegation-ui/out',
};
if (!(app in roots) || !port) {
  console.error('usage: node e2e/serve.mjs <explorer|staking> <port>');
  process.exit(1);
}
const root = fileURLToPath(new URL(roots[app], import.meta.url));
const fakeConfig = JSON.stringify({ ENVIRONMENT_NAME: 'fakeData' });

const types = {
  '.html': 'text/html; charset=utf-8',
  '.txt': 'text/plain; charset=utf-8',
  '.js': 'text/javascript',
  '.css': 'text/css',
  '.json': 'application/json',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.woff2': 'font/woff2',
};

async function isFile(path) {
  try {
    return (await stat(path)).isFile();
  } catch {
    return false;
  }
}

// Returns the first candidate that exists under root.
async function firstFile(candidates) {
  for (const candidate of candidates) {
    const path = join(root, normalize(candidate));
    if (path.startsWith(root) && (await isFile(path))) {
      return path;
    }
  }
  return null;
}

// Mirrors docker/block-explorer-nginx.conf: one static shell per dynamic
// route, with the ID substituted into its placeholder.
async function resolveExplorer(path) {
  let match = path.match(/^\/block\/(\d+)(?:\/(.+\.txt))?$/);
  if (match) {
    const file = match[2] ? `/block/0/${match[2]}` : '/block/0.html';
    return {
      file: await firstFile([file]),
      replace: ['__BLOCK_ID__', match[1]],
    };
  }
  match = path.match(/^\/transaction\/(\d+-\d+)(?:\/(.+\.txt))?$/);
  if (match) {
    const file = match[2]
      ? `/transaction/0/${match[2]}`
      : '/transaction/0.html';
    return {
      file: await firstFile([file]),
      replace: ['__TX_SLUG__', match[1]],
    };
  }
  if (path === '/') {
    return { file: await firstFile(['/index.html']) };
  }
  return { file: await firstFile([path, `${path}.html`]) };
}

// Mirrors docker/delegation-ui-nginx.conf: unknown paths get index.html.
async function resolveStaking(path) {
  return {
    file: await firstFile([
      path,
      `${path}.html`,
      `${path}/index.html`,
      '/index.html',
    ]),
  };
}

createServer(async (req, res) => {
  const path = decodeURIComponent(
    new URL(req.url, 'http://localhost').pathname,
  );

  if (path === '/config.json') {
    res.writeHead(200, { 'content-type': types['.json'] });
    res.end(fakeConfig);
    return;
  }
  if (app === 'explorer' && path.length > 1 && path.endsWith('/')) {
    res.writeHead(308, { location: path.slice(0, -1) });
    res.end();
    return;
  }

  const { file, replace } =
    app === 'explorer'
      ? await resolveExplorer(path)
      : await resolveStaking(path);
  if (!file) {
    res.writeHead(404, { 'content-type': types['.html'] });
    res.end(await readFile(join(root, '404.html')));
    return;
  }

  let body = await readFile(file);
  if (replace) {
    body = body.toString('utf8').replaceAll(replace[0], replace[1]);
  }
  res.writeHead(200, {
    'content-type': types[extname(file)] ?? 'application/octet-stream',
  });
  res.end(body);
}).listen(Number(port), '127.0.0.1');
