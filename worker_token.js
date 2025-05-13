const VALID_TOKENS = ['your-token-123456']; // You can add more tokens

addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request));
});

async function handleRequest(request) {
  const { searchParams } = new URL(request.url);
  const targetUrl = searchParams.get('url');
  const token = searchParams.get('token');

  if (!VALID_TOKENS.includes(token)) {
    return new Response('Unauthorized: Invalid or missing token', { status: 401 });
  }

  if (!targetUrl || !/^https?:\/\//.test(targetUrl)) {
    return new Response('Missing or invalid ?url= parameter', { status: 400 });
  }

  try {
    const response = await fetch(targetUrl, {
      headers: {
        'Referer': targetUrl,
        'User-Agent': request.headers.get('user-agent') || ''
      },
    });

    const newHeaders = new Headers(response.headers);
    newHeaders.set('access-control-allow-origin', '*');

    return new Response(response.body, {
      status: response.status,
      headers: newHeaders
    });
  } catch (err) {
    return new Response('Proxy error: ' + err.message, { status: 500 });
  }
}
