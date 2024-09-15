<script lang="ts">
  import PageTitle from '$lib/components/PageTitle.svelte';
  import type { PageData } from './$types';

  const { data }: { data: PageData } = $props()
  
</script>

<PageTitle title="Products"/>

<h1 class="text-2xl">Products Page</h1>

<ul class="w-full mt-10">
    {#if data.products}
      {#each data.products as p (p)}
        <li class="w-full">
          <a class="block p-2 hover:bg-gray-700" href={`/products/${p?.id}`}>{p?.title}</a>
        </li>
      {/each}
    {:else}
        <p class="w-full p-2">{data?.message}</p>
    {/if}
</ul>