/**
 * Routes of the Delegation UI. It has two views, the validator list at its
 * base path and a validator's page at `validator` under it, and may be
 * served with or without a trailing slash on either.
 */

/**
 * isValidatorPath reports whether the path is the validator details route.
 */
export function isValidatorPath(pathName: string): boolean {
  return pathName.replace(/\/$/, '').endsWith('/validator');
}

/**
 * baseHref is the path of the validator list for the current path, ending
 * in a slash. Links between the views are built from it rather than
 * relative to the current page, because `./` from `/validator/` (with a
 * trailing slash) is the validator page itself, not the list.
 */
export function baseHref(pathName: string): string {
  const base = isValidatorPath(pathName)
    ? pathName.replace(/validator\/?$/, '')
    : pathName;
  return base.endsWith('/') ? base : `${base}/`;
}

/**
 * validatorAddressFromRoute is the validator the route asks for: undefined
 * on the validator list, and on the validator page the `address` query
 * parameter, or null when it is missing.
 */
export function validatorAddressFromRoute(
  pathName: string,
  params: { get(name: string): null | string },
): undefined | null | string {
  return isValidatorPath(pathName) ? params.get('address') : undefined;
}

/**
 * pathWithoutIntent is where to go once a staking action from the URL has
 * completed: the same view without the action's query parameters. On a
 * validator's page the address is kept, as it is what selects the page.
 */
export function pathWithoutIntent(
  pathName: string,
  validatorAddress: undefined | null | string,
): string {
  return validatorAddress
    ? `${pathName}?address=${encodeURIComponent(validatorAddress)}`
    : pathName;
}

/**
 * inAppPath resolves a link between Delegation UI views against the current
 * location, to the path and query to navigate to.
 */
export function inAppPath(href: string, currentHref: string): string {
  const url = new URL(href, currentHref);
  return `${url.pathname}${url.search}`;
}
