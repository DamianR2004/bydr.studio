<script>
  import { Navigatie, Home, Over, Diensten, ProjectMeta, Faq, Footer } from "$lib/index.js"; 
    let { data } = $props();
</script>

<header>
<Navigatie/>
</header>
<main class="portfolio-grid">
<Home/>
<Over/>
<Diensten/>
<ProjectMeta projects={data.projects} />
<Faq/>
</main>
<footer>
<Footer/>
</footer>