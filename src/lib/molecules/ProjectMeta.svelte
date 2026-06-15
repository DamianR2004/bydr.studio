<script>
  import Badge from '$lib/atoms/Badge.svelte';
  let { projects } = $props(); 
</script>

<section>
  <h2>Recente Projecten</h2>
</section>

<ul>
  {#each projects as project}
    <li>
      <a href="/{project.slug}">
        <article>
          <figure class="image-holder">
            <img 
              src="{project.mainImage}?w=400&h=400&fit=crop&auto=format" 
              alt="Cover voor {project.title}" 
              loading="lazy" 
            />
          </figure>
          
          <div class="content">
            <h3>{project.title} ({project.year})</h3>
            {#if project.stack} 
              <div class="badges">
                {#each project.stack as tool}
                  <Badge text={tool} />
                {/each}
              </div>
            {/if}
          </div>
        </article>
      </a>
    </li>
  {/each}

  <li>
    <a href="/projecten">
      Alles zien
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
    </a>
  </li>
</ul>

<style>
  ul {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 5em;
    list-style: none;
    padding: 0 5%;
  }

  li {
    padding-block: 2em;
  }

  li a {
    text-decoration: none;
    color: var(--color-text);
  }

  h2{
    font-size: 6em;
  }

  article {
    display: flex;
    flex-direction: column;
    gap: 1em;
    transition: .25s;
  }

  .image-holder {
    margin: 0; 
    width: 100%;
    aspect-ratio: 4 / 4; 
    overflow: hidden;
    border-radius: 1em; 
    transition: .25s;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  article:hover .image-holder {
    scale: 0.99;

    & img {
      filter: blur(10px); 
      transition: .25s;
    }
  }

  .content {
    display: flex;
    flex-direction: column;
    gap: 0.5em;
  }

  h3 {
    font-size: 3em;
    margin: 0;
    line-height: 1;
  }

  li:last-of-type {
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    grid-column: span 2;
    margin-top: 0;
  }

  li:last-of-type a {
    display: flex;
    align-items: center;
    gap: 0.5em;
    background-color: white;
    color: black;
    padding: 0.5em 1em;
    border-radius: 2em;
    font-size: 2.5rem;
    transition: 0.25s;
  }

  li:last-of-type a:hover {
    background: var(--color-secondary);
    scale: 1.02;
  }
</style>