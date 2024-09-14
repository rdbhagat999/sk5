<script lang="ts">
  import PageTitle from '$lib/components/PageTitle.svelte';
  import ProductComponent from '$lib/components/ProductComponent.svelte';
  import type { PageServerData } from './$types';

  const { data }: { data: PageServerData } = $props()
</script>

<PageTitle title={data.product?.title ? data?.product?.title : "Product Details"}/>

<h1>Product Details</h1>

<div>
  {#if data.product}
    <ProductComponent product={data.product} />
  {:else if data.status == 404}
    <p>{data?.message}</p>
  {:else}
    <p>Product not found</p>
  {/if}
</div>
