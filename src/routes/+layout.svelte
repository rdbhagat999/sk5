<script lang="ts">
import "../app.css";
import type { LayoutData } from "./$types";

const { data, children }: { data: LayoutData, children: any } = $props()

</script>

<nav>
	<ul>
		<li><strong><a href="/">My Svelte 5 App</a></strong></li>
	</ul>

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

<!-- <slot /> -->

{@render children()}
