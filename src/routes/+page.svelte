<script>
  import ProjectMeta from '$lib/molecules/ProjectMeta.svelte'; 
  import {Faq, Home} from "$lib/index.js"; 
  let { data } = $props();
</script>

<main class="portfolio-grid">
  <Home/>
  <Faq/>
</main>