import { NextRequest, NextResponse } from 'next/server';

// Force dynamic rendering to ensure environment variables are read at runtime
export const dynamic = 'force-dynamic';
// Will prevent the content from ever being cached by the nextjs service.
export const revalidate = 0;

interface ConfigFileResponse {
  hotshot_query_service_url: null | string;
  node_validator_service_url: null | string;
}

/**
 * validatorURL checks if the provided string is a valid URL.
 * If it is valid, it returns the URL as a string.
 * If it is not valid or undefined, it returns null.
 */
function validateURL(urlString: undefined | string): null | string {
  if (!urlString) {
    return null;
  }

  try {
    const url = new URL(urlString);
    return url.toString();
  } catch (err) {
    console.info('Invalid URL provided for config:', urlString);
    return null;
  }
}

/**
 * This path /app/config.json/route.ts is used to serve a seemingly static
 * resources whose contents are derived from the environment variables of
 * the service at runtime.
 *
 * This is useful for returning some content that will not be static, but
 * will be derived from the environment / configuration as configured by
 * the user.
 *
 * As a result, this endpoint is hit whenever the user makes a request to
 * the service with the path `/config.json`.
 */

/**
 * GET represents a GET request for the /config.json endpoint.
 * It returns a JSON response containing the configuration
 * derived from the environment variables.
 */
export function GET(
  request: NextRequest,
): Promise<NextResponse<ConfigFileResponse>>;
export async function GET(): Promise<NextResponse<ConfigFileResponse>> {
  return NextResponse.json(
    {
      hotshot_query_service_url: validateURL(process.env.QUERY_SERVICE_URI),
      node_validator_service_url: validateURL(process.env.NODE_VALIDATOR_URI),
    },
    {
      headers: {
        'Cache-Control': 'max-age=86400, s-maxage=86400, public',
      },
    },
  );
}
