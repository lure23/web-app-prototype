<script>
  // Use data exposed by server side
  /** @type {import('./$types').LayoutData} */
  export let data;

  // from https://vercel.com/docs/concepts/analytics/quickstart#
  import { dev } from '$app/environment';
  import { inject } from '@vercel/analytics';

  inject({ mode: dev ? 'development' : 'production' });
</script>

<slot />

{#if data.commitSha}
<footer>
  <p>
    SHA: { data.commitSha }
  </p>  
</footer>
{/if}