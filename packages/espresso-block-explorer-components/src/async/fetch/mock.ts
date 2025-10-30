export function mockFetch200JSONResponse(bodyInit: BodyInit): Response {
  return new Response(bodyInit, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

export function validateRequestMethodAndURL(
  method: string,
  url: string,
  request: URL | RequestInfo,
) {
  let req: Request;
  if (request instanceof URL || typeof request === 'string') {
    req = new Request(request.toString(), {
      method: 'GET',
    });
  } else {
    req = request;
  }

  if (req.method !== method) {
    throw new Error(`Expected method ${method} but got ${req.method}`);
  }

  if (req.url !== url) {
    throw new Error(`Expected URL ${url} but got ${req.url}`);
  }
}
