<script lang="ts">
  import PageTitle from '$lib/components/PageTitle.svelte';
  import type { PageData } from './$types';

  const { data }: { data: PageData } = $props()
  
</script>

<PageTitle title="Products"/>

<h1>Products Page</h1>

<ul>
    {#if data.products}
      {#each data.products as p (p)}
        <li>
          <a href={`/products/${p?.id}`}>{p?.title}</a>
        </li>
      {/each}
    {:else}
        <p>{data?.message}</p>
    {/if}
</ul>