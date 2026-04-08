<script>
  import { urlFor } from '$lib/sanity';

  let { data } = $props();
  const { project } = data;
</script>

<article class="project-view">
  <header>
    <h1>{project.title}</h1>
    <div class="meta">
      <p class="year">{project.year}</p>
      
      {#if project.stack}
        <div class="stack-list">
          {#each project.stack as tech}
            <span class="tech-badge">{tech}</span>
          {/each}
        </div>
      {/if}
    </div>
  </header>

  {#if project.gallery}
    <section class="gallery">
      {#each project.gallery as img}
        <img 
          src={urlFor(img).width(1200).auto('format').url()} 
          alt="Project showcase for {project.title}"
          loading="lazy"
        />
      {/each}
    </section>
  {/if}
</article>

<style>
  .project-view {
    max-width: 1000px; /* Widened slightly for better image display */
    margin: 4rem auto;
    padding: 1rem;
  }

  .meta {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 3rem;
  }

  .year { color: #666; font-size: 1.2rem; margin: 0; }

  .tech-badge { 
    background: #000; 
    color: #fff; 
    padding: 4px 12px; 
    margin-left: 8px; 
    font-size: 0.7rem;
    text-transform: uppercase;
    font-weight: bold;
    border-radius: 2px;
  }

  /* 3. Style the gallery to stack images beautifully */
  .gallery {
    display: flex;
    flex-direction: column;
    gap: 2.5rem;
  }

  img {
    width: 100%;
    height: auto;
    display: block;
    /* This adds a slight "premium" look to your portfolio photos */
    box-shadow: 0 4px 20px rgba(0,0,0,0.08);
  }
</style>