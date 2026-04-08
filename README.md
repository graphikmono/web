# Monographik Website - Cloudflare Workers

Portfolio website for Monographik Design Studio deployed on Cloudflare Workers.

## Setup

1. Install dependencies:
```bash
npm install
```

2. Login to Cloudflare:
```bash
npx wrangler login
```

## Development

Run locally:
```bash
npm run dev
```

## Deployment

Deploy to Cloudflare Workers:
```bash
npm run deploy
```

Your site will be available at: `https://monographik.com`

## Domain Configuration

The worker is configured to serve on:
- https://monographik.com
- https://www.monographik.com

After deployment, verify your DNS settings in Cloudflare dashboard:
1. Go to DNS settings for monographik.com
2. Ensure you have an A/AAAA record or CNAME pointing to your domain
3. The Worker route will automatically intercept requests
