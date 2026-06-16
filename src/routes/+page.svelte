<script>
  import {Cursor, Navigatie, Faq, ProjectMeta, Home, Footer } from "$lib/index.js"; 
  let { data } = $props();
</script>

<header>
<Navigatie/>
</header>
<main class="portfolio-grid">
  <Home/>
  <ProjectMeta projects={data.projects} />
  <Faq/>
</main>
<footer>
<Footer/>
</footer>