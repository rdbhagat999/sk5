<script lang="ts">
  import type { ProductModel } from "$lib/model/product.model";

  const { product }: { product: ProductModel} = $props()
</script>

<div class="product">
  <h1>{product?.title}</h1>
</div>
