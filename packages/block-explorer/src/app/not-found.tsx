import NotFoundClientComponent from '@/client_components/not_found';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Page not found',
};

/**
 * NotFound is shown for any address without a page. The static export turns
 * it into 404.html, which nginx serves for those addresses.
 */
export default function NotFound() {
  return <NotFoundClientComponent />;
}
