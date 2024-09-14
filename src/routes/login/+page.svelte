<script lang="ts">
  import { authStore } from "$lib/stores/authStore.svelte";
  import type { PageData } from "../$types";

    let inputElement: HTMLInputElement;

    let form: PageData

    $effect(() => {
        inputElement.focus();
    });

    $effect(() => {
        console.log(authStore().authUser)
        console.log(form)
    });
    
</script>

<form class="max-w-sm mx-auto" method="POST" action="?/login">
  <div class="mb-5">
    <label for="username" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your username</label>
    <input bind:this={inputElement} type="text" value="emilys" id="username" name="username" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" required />
  </div>
  <div class="mb-5">
    <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
    <input type="password" value="emilyspass" id="password" name="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
  </div>
  
  <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
  <!-- <button formaction="?/register">Register</button> -->
</form>
