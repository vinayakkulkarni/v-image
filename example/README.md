# v-image demo

Live at <https://v-image.vinayakkulkarni.dev>. A Vite + Vue 3 app served as static assets by the `v-image-demo` Cloudflare Worker.

```bash
pnpm install            # from the repo root
pnpm run build:demo     # builds the library, then this demo into example/dist
pnpm --filter ./example run dev
pnpm run deploy         # builds and runs `wrangler deploy`
```

Analytics: Plausible, OpenPanel and GA4 snippets live in `index.html`. GA4 is skipped while `GA4_MEASUREMENT_ID` is empty.
