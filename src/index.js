export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    
    // Try to get the asset from the ASSETS binding
    try {
      // For root path, explicitly request index.html
      if (url.pathname === '/') {
        return env.ASSETS.fetch(new URL('/index.html', url.origin));
      }
      
      return env.ASSETS.fetch(request);
    } catch (e) {
      return new Response('Not Found', { status: 404 });
    }
  },
};
