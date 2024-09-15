<script lang="ts">
  import PageTitle from '$lib/components/PageTitle.svelte';
  import ProductComponent from '$lib/components/ProductComponent.svelte';
  import type { PageServerData } from './$types';

  const { data }: { data: PageServerData } = $props()
</script>

<PageTitle title={data.product?.title ? data?.product?.title : "Product Details"}/>

<h1 class="text-2xl">Product Details</h1>

<div class="w-full mt-10">
  {#if data.product}
    <ProductComponent product={data.product} />
  {:else if data.status == 404}
    <p class="w-full p-2">{data?.message}</p>
  {:else}
    <p class="w-full p-2">Product not found</p>
  {/if}
</div>
