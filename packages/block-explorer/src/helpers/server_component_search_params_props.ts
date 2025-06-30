export interface ServerComponentSearchParamsProps {
  searchParams: Promise<{
    [key: string]: string | string[] | undefined;
  }>;
}

export interface ServerComponentParamsProps<K extends string> {
  params: Promise<{ [key in K]: string }>;
}

export function getNumberFromParams(
  params: { [key: string]: string | string[] | undefined },
  key: string,
): number | undefined {
  if (!(key in params)) {
    return undefined;
  }

  const value = params[key];
  if (!value) {
    return undefined;
  }

  if (Array.isArray(value)) {
    if (value.length <= 0) {
      return undefined;
    }

    return Number(value[0]);
  }

  return Number(value);
}
