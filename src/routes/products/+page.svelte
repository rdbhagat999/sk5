<script lang="ts">
  import type { PageData } from './$types';

  const { data }: { data: PageData } = $props()
  
</script>

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