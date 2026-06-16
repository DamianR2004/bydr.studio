<script>
  import {Cursor, Faq, ProjectMeta, Home, Footer } from "$lib/index.js"; 
  let { data } = $props();
</script>

<main class="portfolio-grid">
  <Home/>
  <ProjectMeta projects={data.projects} />
  <Faq/>
</main>
<Footer/>