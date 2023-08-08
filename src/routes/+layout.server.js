//
// Pass 'process.env.VERCEL_GIT_COMMIT_SHA' to the web app.
//
// Note: Available env.vars here [1].
//    [1]: https://vercel.com/docs/concepts/projects/environment-variables/system-environment-variables#system-environment-variables
//
//  - VERCEL_ENV

import { VERCEL_GIT_COMMIT_SHA } from '$env/static/private';

/** @type {import('./$types').PageServerLoad} */
export async function load( /*{ params }*/ ) {
  return {
    commitSha: COMMIT_SHA
  };
}
