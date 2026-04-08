<script>
  import Badge from '$lib/atoms/Badge.svelte';
  let { project } = $props();
</script>

<li class="card">
  <a href="/{project.slug}">
    <div class="info">
      <span class="year">{project.year}</span>
      <h2>{project.title}</h2>
    </div>
    
    {#if project.stack}
      <div class="badges">
        {#each project.stack as tool}
          <Badge text={tool} />
        {/each}
      </div>
    {/if}
  </a>
</li>

<style>
  .card { border-bottom: 1px solid #eee; padding-bottom: 1rem; }
  .info { display: flex; justify-content: space-between; align-items: baseline; }
  h2 { margin: 0.5rem 0; font-size: 1.25rem; }
  .year { font-family: monospace; color: #888; }
  .badges { display: flex; gap: 0.5rem; }
</style>