<script>
  import { Faq, ProjectMeta, Home, Introduction, Footer } from "$lib/index.js"; 
  let { data } = $props();
</script>

<main class="portfolio-grid">
  <Home/>
  <Introduction/>
  <ProjectMeta projects={data.projects} />
  <Faq/>
  <Footer/>
</main>