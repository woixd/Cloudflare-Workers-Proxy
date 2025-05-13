addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  const { searchParams } = new URL(request.url)
  const targetUrl = searchParams.get('url')

  if (!targetUrl || !/^https?:\/\//.test(targetUrl)) {
    return new Response('Missing or invalid ?url= parameter', { status: 400 })
  }

  try {
    const response = await fetch(targetUrl, {
      headers: {
        'Referer': targetUrl,
        'User-Agent': request.headers.get('user-agent') || ''
      },
    })

    // clone headers to avoid read-only issue
    const newHeaders = new Headers(response.headers)
    newHeaders.set('access-control-allow-origin', '*')

    return new Response(response.body, {
      status: response.status,
      headers: newHeaders
    })
  } catch (err) {
    return new Response('Proxy error: ' + err.message, { status: 500 })
  }
}
