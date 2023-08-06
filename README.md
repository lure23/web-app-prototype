# `web-app-prototype`

This project is part of the [Light 'n Urban](https://www.youtube.com/channel/UCKOFd9nLGz3PPCo1GcgkEbQ) (Youtube channel) prototypes, for making a light and affordable monorail in a park.

## What you get

A Svelte web app with:

- 3D spheres `#tbd`
- deployed [to Vercel](https://web-app-prototype-git-main-lure23.vercel.app)
  - and a [custom domain](https://app.outstanding.earth)
  - CI/CD `#tbd`
  - user analytics `#tbd`

<!--
- ..with user monitoring in [Grafana Cloud](...) `#tbd`
-->

## Requirements

- `npm` (or `pnpm`, you know if you use it..)

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

## Domain setup

Using Vercel for hosting, but my domain is managed elsewhere.

- Added `CNAME` `app` `cname.vercel-dns.com.` to the domain manager's DNS entries. <sup>[1]</sup>

The app's `main` branch is now visible at [`app.outstanding.earth`](https://app.outstanding.earth).

> Note: Vercel takes care of creating the certificate for `https`. Nice!

<sub>`[1]`: Vercel Docs > Domains > [Working with Domains](https://vercel.com/docs/concepts/projects/domains/working-with-domains)</sub>

## CI/CD

`tbd.`
