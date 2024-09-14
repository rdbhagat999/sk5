<script lang="ts">
  let pageTitle = $state("");

  $effect(() => {
    pageTitle = document.title;
  });
  
</script>

<p>Page title: {pageTitle}</p>