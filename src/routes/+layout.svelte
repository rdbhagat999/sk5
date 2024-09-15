<script lang="ts">
  import PageTitle from "$lib/components/PageTitle.svelte";
import "../app.css";
import type { LayoutData } from "./$types";

const { data, children }: { data: LayoutData, children: any } = $props()

</script>

<PageTitle title="Home"/>

<header class="fixed top-0 z-20 mt-0 w-full bg-gray-800 font-sans tracking-wider shadow-lg transition-all print:hidden md:fixed md:opacity-100 md:bg-gray-800">
    <nav class="mx-auto w-full max-w-6xl px-2 md:px-12 xl:px-0">
        <form class="relative flex h-16 w-full items-center justify-between" action="/logout" method="POST">
            <ul class="mx-auto flex justify-center items-center gap-4">
                <li class="px-1 py-2 text-base 2xl:text-lg capitalize text-gray-300 rounded-md hover:bg-gray-700 hover:text-white"><a href="/">Home</a></li>
                <li class="px-1 py-2 text-base 2xl:text-lg capitalize text-gray-300 rounded-md hover:bg-gray-700 hover:text-white"><a href="/products">Product</a></li>
                <li class="px-1 py-2 text-base 2xl:text-lg capitalize text-gray-300 rounded-md hover:bg-gray-700 hover:text-white"><a href="/account">Account</a></li>
                <li class="px-1 py-2 text-base 2xl:text-lg capitalize text-gray-300 rounded-md hover:bg-gray-700 hover:text-white"><a href="/todos">Todos</a></li>
                {#if data?.user?.id}
                    <li class="px-1 py-2 text-base 2xl:text-lg capitalize text-gray-300 rounded-md hover:bg-gray-700 hover:text-white">
                        <button type="submit" >Logout</button>
                    </li>
                {:else}
                    <li class="px-1 py-2 text-base 2xl:text-lg capitalize text-gray-300 rounded-md hover:bg-gray-700 hover:text-white"><a href="/login" role="button">Login</a></li>
                {/if}
            </ul>
        </form>
    </nav>
</header>

<div class="max-w-xl mx-auto mt-24">
    {@render children()}
</div>
