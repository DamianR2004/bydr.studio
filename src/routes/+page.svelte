<script>
  import ProjectMeta from '$lib/molecules/ProjectMeta.svelte'; 
  import {Faq, Home, Introduction, Footer} from "$lib/index.js"; 
  let { data } = $props();
</script>

<main class="portfolio-grid">
  <Home/>
  <Introduction/>
  <Faq/>
  <Footer/>
</main>