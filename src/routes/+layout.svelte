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
    <tt>
      SHA: { data.commitSha .substring(0,8) }
    </tt>
  </p>  
</footer>
{/if}
