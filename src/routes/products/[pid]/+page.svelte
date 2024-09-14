<script lang="ts">
  import ProductComponent from '$lib/components/ProductComponent.svelte';
  import type { PageServerData } from './$types';

  const { data }: { data: PageServerData } = $props()
</script>

<div>
  {#if data.product}
    <ProductComponent product={data.product} />
  {:else if data.status == 404}
    <p>{data?.message}</p>
  {:else}
    <p>Product not found</p>
  {/if}
</div>