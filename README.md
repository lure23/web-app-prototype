# `web-app-prototype`

This project is part of the [Light 'n Urban](https://www.youtube.com/channel/UCKOFd9nLGz3PPCo1GcgkEbQ) (Youtube channel) prototypes, for making a light and affordable monorail in a park.

## What you get

A Svelte web app with:

- 3D spheres `#tbd`
- [x] deployed [to Vercel](https://web-app-prototype-git-main-lure23.vercel.app)
  - [x] and a [custom domain](https://app.outstanding.earth)
  - CI/CD `#tbd`
  - user analytics `#tbd`

<!--
  - performance monitoring in [Grafana Cloud](...) `#tbd`
-->

## Requirements

- `npm` (or `pnpm`, you know if you use it..)
- Node 16 or 18

   ><small>The limitation of not supporting Node 20 comes from the Vercel adapter. You can tune your config to support it, use virtualization, or install a certain version of Node (e.g. `brew install node@18` on macOS & HomeBrew).</small>

## Steps

- `npm install`
- `npx playwright install`

  This installs some headless browsers and other pieces that `npm install` doesn't. Without it, you'll get an error at `npm test:integration`.

### Start a development server

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

### Create a production version

```bash
npm run build
```

You can preview the production build with `npm run preview`.

<!-- tbd.
> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.
-->

<!--
## References

-->

## Domain setup (optional)

You can simply deploy to a Vercel URL, but they are rather long. If you have a custom domain, follow [Working with Domains](https://vercel.com/docs/concepts/projects/domains/working-with-domains) and you'll have the app in your own namespace, in no time!

>The author bound the app to [`app.outstanding.earth`](https://app.outstanding.earth)

<span />

> Note: Vercel takes care of creating the certificate for `https`. Nice!

## CI/CD

`tbd.`


## References

- [SvelteKit on Vercel](https://vercel.com/docs/frameworks/sveltekit#speed-insights) (Vercel docs)

