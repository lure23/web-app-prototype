# Bootstrapped 🥾

## Code

This is how the project got started:

```
$ npm create svelte@latest .
Need to install the following packages:
  create-svelte@5.0.4
Ok to proceed? (y) y

create-svelte version 5.0.4

┌  Welcome to SvelteKit!
│
◇  Where should we create your project?
│    (hit Enter to use current directory)
│
◇  Directory not empty. Continue?
│  Yes
│
◇  Which Svelte app template?
│  Skeleton project
│
◇  Add type checking with TypeScript?
│  Yes, using JavaScript with JSDoc comments
│
◇  Select additional options (use arrow keys/space bar)
│  Add ESLint for code linting, Add Prettier for code formatting, Add Playwright for browser testing, Add Vitest for unit testing
│
└  Your project is ready!

✔ Type-checked JavaScript
  https://www.typescriptlang.org/tsconfig#checkJs

✔ ESLint
  https://github.com/sveltejs/eslint-plugin-svelte

✔ Prettier
  https://prettier.io/docs/en/options.html
  https://github.com/sveltejs/prettier-plugin-svelte#options

✔ Playwright
  https://playwright.dev

✔ Vitest
  https://vitest.dev

Install community-maintained integrations:
  https://github.com/svelte-add/svelte-add

Next steps:
  1: npm install (or pnpm install, etc)
  2: git init && git add -A && git commit -m "Initial commit" (optional)
  3: npm run dev -- --open

```

Note how `create-svelte` nicely provides the URLs for learning about the tools one has enabled. The author is looking them through.


### ..some currying 🍜🍛

`/.editorconfig` was added. It steers at least IntelliJ IDE's on editor preferences.


## Vercel

### Connected the GitHub repo

*...did not make notes about this step, but it was pretty fast.*

### Custom domain

Added a DNS entry to my domain manager:

```
CNAME app cname.vercel-dns.com.
```

..as Vercel UI suggested. Only a few seconds, and [`app.outstanding.earth`](https://app.outstanding.earth) was running!


### Enabled Web Analytics

It's included in the Hobby (free) tier, but needs to be separately enabled:

- [Vercel Web Analytics Quickstart](https://vercel.com/docs/concepts/analytics/quickstart)

<!-- tbd. Need some adapting of sample code.
### Enabled Speed Insights

For SvelteKit (in Aug '23), we need to bring in the [Speed Insights API](https://vercel.com/docs/concepts/speed-insights/api).

- [Quickstart for Using Vercel Speed Insights](https://vercel.com/docs/concepts/speed-insights/quickstart)
-->

### CI/CD

`tbd.`
