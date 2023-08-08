# Vercel CLI

You don't necessarily need to install the `vercel` CLI. If you don't, pushing to git will trigger Vercel CI/CD and you'll be able to see logs there.

However, this can be tedious since it puts commits into the edit-build loop.

## Installing Vercel CLI

```
$ npm install -g vercel

$ vercel --version
Vercel CLI 31.2.2
31.2.2
```

```
$ vercel dev
Vercel CLI 31.2.2
? Set up and develop “~/Lure/Git/web-app-prototype”? [Y/n] y
? Which scope should contain your project? lure23
? Found project “lure23/web-app-prototype”. Link to it? [Y/n] y
🔗  Linked to lure23/web-app-prototype (created .vercel and added it to .gitignore)
> Running Dev Command “vite dev --port $PORT”


  VITE v4.4.8  ready in 1643 ms

  ➜  Local:   http://localhost:3000/
  ➜  Network: use --host to expose
  ➜  press h to show help
> Ready! Available at http://localhost:3000
```

This ties the CLI to a cloud project. It's a one time thing.

## Building locally

>Note: *It is recommended to run the `vercel pull` command before invoking `vercel build` to ensure that you have the most recent Project Settings and Environment Variables stored locally.* <sub>[source](https://vercel.com/docs/cli/build)</sub>

```
$ vercel build
Vercel CLI 31.2.2
? No Project Settings found locally. Run `vercel pull` for retrieving them? [Y/n] y
> Downloading `preview` Environment Variables for Project web-app-prototype
✅  Created .vercel/.env.preview.local file  [218ms]

> Downloading project settings
✅  Downloaded project settings to ~/Lure/Git/web-app-prototype/.vercel/project.json [0ms]
Installing dependencies...
yarn install v1.22.19
warning ../../../package.json: No license field
info No lockfile found.
[1/4] 🔍  Resolving packages...
[2/4] 🚚  Fetching packages...
[3/4] 🔗  Linking dependencies...
[4/4] 🔨  Building fresh packages...
success Saved lockfile.
✨  Done in 37.78s.
Running "yarn run build"
yarn run v1.22.19
warning ../../../package.json: No license field
$ vite build
...
  ✔ done
✓ built in 2.76s
✨  Done in 4.31s.
✅  Build Completed in .vercel/output [44s]
```

That's it!

See: [Vercel build](https://vercel.com/docs/cli/build)

