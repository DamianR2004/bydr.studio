<script>
  import ProjectMeta from '$lib/molecules/ProjectMeta.svelte'; 
  
  let { data } = $props();
</script>

<main class="portfolio-grid">
  <h1>Selected Projects</h1>
  <ul class="grid">
    {#each data.projects as project}
      <ProjectMeta {project} />
    {/each}
  </ul>
</main>

<style>
  /* Plain CSS for that 50ms feel */
  .portfolio-grid {
    padding: 2rem;
    max-width: 1200px;
    margin: 0 auto;
  }
  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 2rem;
    list-style: none;
    padding: 0;
  }
</style>