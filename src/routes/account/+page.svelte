<script lang="ts">
  import PageTitle from '$lib/components/PageTitle.svelte';
  import type { PageData } from './$types';

  const { data }: { data: PageData } = $props()
  
</script>

<PageTitle title="Account"/>

<h1 class="text-2xl">Account Page</h1>

<div class=" mt-10">
  {#if data.user}
    <h2>{data?.user?.id} {data?.user?.username}</h2>
  {:else}
      <p>{data?.message}</p>
  {/if}
</div>
