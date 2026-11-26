import 'espresso-block-explorer-components/espresso-block-explorer-components.css';
import 'espresso-block-explorer-components/delegation-ui.css';
import React from 'react';
import './globals.css';

if (
  typeof localStorage === 'undefined' ||
  typeof localStorage.getItem === 'undefined'
) {
  (globalThis as any).localStorage = {
    getItem: (_key: string) => null,

    setItem: (_key: string, _value: string) => {},

    removeItem: (_key: string) => {},
    clear: () => {},
  };
}

/**
 * setColorThemeScript sets data-theme on <html> before the first paint: the
 * theme the user picked with the theme toggle (saved under the same key as
 * `colorThemeStorageKey`), or else the OS setting, which it keeps following
 * until the user picks one.
 */
const setColorThemeScript = `(function () {
  var root = document.documentElement;
  var media = window.matchMedia('(prefers-color-scheme: dark)');
  function apply() {
    var saved = null;
    try { saved = localStorage.getItem('esp-theme'); } catch (e) {}
    if (saved !== 'light' && saved !== 'dark') saved = null;
    root.dataset.theme = saved || (media.matches ? 'dark' : 'light');
  }
  apply();
  media.addEventListener('change', apply);
})();`;

/**
 * RootLayout is the default layout of the NextJS Application.  All Pages,
 * by default, have this layout as their default layout.
 *
 * As such, we include a bunch of the provided Contexts at this level in
 * order to ensure that they are available consistently on every page.
 */
export default function RootLayout({ children }: React.PropsWithChildren) {
  return (
    <html lang="en" data-theme="light" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: setColorThemeScript }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
