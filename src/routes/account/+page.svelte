<script lang="ts">
  import type { PageData } from './$types';

  const { data }: { data: PageData } = $props()
  
</script>


<h1>Account Page</h1>

{#if data.user}
    <h2>{data?.user?.id} {data?.user?.username}</h2>
{:else}
    <p>{data?.message}</p>
{/if}