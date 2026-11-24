import { type Metadata } from 'next';

export function generateMetadata(): Metadata {
  return {
    metadataBase: new URL('https://placeholder.espresso.foundation'),
    title: 'Validator · Espresso Staking Dashboard',
    description:
      'Stake, commission, reliability, and delegation history for an Espresso Network validator',
  };
}

/**
 * ValidatorPage shows a single validator, selected with the `address` query
 * parameter. Like the root page, the content is rendered by the (staking)
 * layout and all data loads client-side.
 */
export default function ValidatorPage() {
  return null;
}
