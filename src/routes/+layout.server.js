//
// Pass GitHub commit SHA to the front end.
//
// Note: Available env.vars:
//    https://vercel.com/docs/concepts/projects/environment-variables/system-environment-variables#system-environment-variables
//

// Note: 
//  Could use 'git status --porcelain' (or 'git status -s'). Or make so that only when run via CI/CD, the SHA would be shown
//  (then we know it's a read-only clone).

import { VERCEL_GIT_COMMIT_SHA } from '$env/static/private';
//const VERCEL_GIT_COMMIT_SHA = process.env['VERCEL_GIT_COMMIT_SHA'];    // undefined | <string>

/** @type {import('./$types').LayoutServerLoad} */
export async function load( /*{ params }*/ ) {
  return {
    commitSha: VERCEL_GIT_COMMIT_SHA
  };
}
