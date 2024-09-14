<script lang="ts">
  import PageTitle from "$lib/components/PageTitle.svelte";
import "../app.css";
import type { LayoutData } from "./$types";

const { data, children }: { data: LayoutData, children: any } = $props()

</script>

<PageTitle title="Home"/>

<nav>
	<form action="/logout" method="POST">
        <ul class="flex justify-center items-center gap-4">
            <li><a href="/">Home</a></li>
            <li><a href="/products">Product</a></li>
            <li><a href="/account">Account</a></li>
            {#if data?.user?.id}
                <li>
                    <button type="submit" >Logout</button>
                </li>
            {:else}
                <li><a href="/login" role="button">Login</a></li>
            {/if}
        </ul>
    </form>
</nav>

<div class="max-w-xl mx-auto py-10">
    {@render children()}
</div>

