<script>
  import ProjectMeta from '$lib/molecules/ProjectMeta.svelte'; 
  import {Faq, Home} from "$lib/index.js"; 
  let { data } = $props();
</script>

<main class="portfolio-grid">
  <Home/>
  <h1>Selected Projects</h1>
  <ul class="grid">
    {#each data.projects as project}
      <ProjectMeta {project} />
    {/each}
  </ul>
  <Faq/>
</main>