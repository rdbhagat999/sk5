<script lang="ts">
  const { title = "" }: { title: string} = $props()
</script>

<svelte:head>
	<title>{`Svelte 5 | ${title}`}</title>
    <meta name="description" content="https://github.com/rdbhagat999/sk5">
    <meta property="og:type" content="website">
    <meta property="og:description" content="https://github.com/rdbhagat999/sk5">
    <meta property="og:url" content="https://sk5.vercel.app/">
</svelte:head>