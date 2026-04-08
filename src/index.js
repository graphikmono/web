export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    
    // For root path, serve index.html
    if (url.pathname === '/') {
      url.pathname = '/index.html';
    }
    
    // Try to fetch the asset
    const asset = await env.ASSETS.fetch(url);
    
    // If asset found, return it
    if (asset.status === 200) {
      return asset;
    }
    
    // If not found and no file extension, try index.html (SPA fallback)
    if (!url.pathname.includes('.') && url.pathname !== '/index.html') {
      return env.ASSETS.fetch(new URL('/index.html', url.origin));
    }
    
    return new Response('Not Found', { status: 404 });
  },
};
