<script>
  import ProjectMeta from '$lib/molecules/ProjectMeta.svelte'; 
  import {Faq, Home, Introduction} from "$lib/index.js"; 
  let { data } = $props();
</script>

<main class="portfolio-grid">
  <Home/>
  <Introduction/>
  <Faq/>
</main>