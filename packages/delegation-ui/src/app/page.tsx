import DelegationUIClientComponent from '@/client_components/delegation_ui';
import { readFromEnv } from '@/helpers/read_from_env';
import { type Metadata } from 'next';
import { cacheLife, cacheTag } from 'next/cache';
import { connection } from 'next/server';
import { Suspense } from 'react';

/**
 * generateMetadata is a special function in NextJS that is responsible for
 * returning the metadata for the page.
 *
 * This waits for an actual user connection before generating the metadata
 * in order to ensure that we actually resolve the Environment variables as
 * they exist at program launch instead of at build time.
 */
export async function generateMetadata(): Promise<Metadata> {
  // connection waits for an actual user connection before continuing.
  // This is done in order to ensure that we are actually evaluating the
  // Environment variables at runtime instead  of at build time.
  await connection();

  return await getPageMetadata();
}

/**
 * getPageMetadata is responsible for generating the metadata for the home
 * page at runtime.
 *
 * It is considered to be entirely cachable as its contents depend on values
 * derived from Environment variables which should be essentially static for
 * the lifetime of the program.
 */
async function getPageMetadata() {
  'use cache';
  cacheLife('max');
  cacheTag('home-metadata');

  const env = await readFromEnv();

  const BASE_URL = env.base_url || 'https://claim.espresso.foundation';
  const BASE_PATH = env.base_path || '/';

  return {
    metadataBase: BASE_URL,
    title: 'Espresso Staking Dashboard',
    description:
      'Stake your ESP, delegate to validators, and monitor your contribution to securing the Espresso Network',
    alternates: {
      canonical: BASE_PATH,
    },
    openGraph: {
      url: BASE_PATH,
      images: [`${BASE_PATH}esp-staking-dashboard.png`],
      type: 'website',
    },
    twitter: {
      images: [`${BASE_PATH}esp-staking-dashboard.png`],
    },
  };
}

/**
 * Home represents the default home screen navigated to by the path '/'.
 *
 * It is currently a placeholder as we do not have the elements / components
 * for the "Block Explorer" home page fleshed out quite yet.
 */
export default async function Home() {
  'use server';
  // Waits for a user connection before rendering the home page
  // This is necessary to ensure that the environment variables are
  // read and provided
  return (
    <Suspense fallback={<div />}>
      <HomeWithRuntimeEnv />
    </Suspense>
  );
}

/**
 * HomeWithRuntimeEnv is a server component that provides a boundary between
 * the Server components and the Cache / Client Components.  This should
 * allow for clean separation between these bounds, and should provide good
 * caching resolution.
 */
async function HomeWithRuntimeEnv() {
  'use server';
  // connection waits for an actual user connection before continuing.
  // This is done in order to ensure that we are actually evaluating the
  // Environment variables at runtime instead  of at build time.
  await connection();

  const env = await readFromEnv();
  return <HomeWithProvidedEnv env={env} />;
}

/**
 * HomeWithProvidedEnv is a cached component that is responsible for rendering
 * the main page of the Delegation UI.
 */
async function HomeWithProvidedEnv({
  env,
}: {
  env: Awaited<ReturnType<typeof readFromEnv>>;
}) {
  'use cache';
  cacheLife('max');
  cacheTag('home');

  return <DelegationUIClientComponent env={env} />;
}
