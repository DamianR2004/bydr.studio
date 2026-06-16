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
          <figure data-cursor="Klik!">
            <img 
              src="{project.mainImage}?w=400&h=400&fit=crop&auto=format" 
              alt="Cover voor {project.title}" 
              loading="lazy" 
            />
          </figure>
          
          <div>
            <h3>{project.title} ({project.year})</h3>
            {#if project.stack} 
              <div>
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
      <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
    </a>
  </li>
</ul>

<style>
  ul {
    display: grid;
    grid-template-columns: 1fr;
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

  h2 {
    font-size: 3rem;
  }

  article {
    display: flex;
    flex-direction: column;
    gap: 1em;
    transition: .25s;
  }

  figure {
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
    transition: .25s;
  }

  article > div {
    display: flex;
    flex-direction: column;
    gap: 0.5em;
  }

  article > div > div {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5em;
  }

  h3 {
    font-size: 1.8rem;
    margin: 0;
    line-height: 1.1;
  }

  li:last-of-type {
    display: flex;
    align-items: center;
    justify-content: center;
    grid-column: span 1;
    margin-top: 2em;
  }

  li:last-of-type a {
    display: flex;
    align-items: center;
    gap: 0.5em;
    background-color: white;
    color: black;
    padding: 0.5em 1em;
    border-radius: 2em;
    font-size: 1.5rem;
    transition: 0.25s;
  }

  li:last-of-type a svg {
    transition: transform .25s ease-in-out;
    width: 30px;
    height: 30px;
  }

  @media (min-width: 768px) {
    ul {
      grid-template-columns: 1fr 1fr;
      gap: 4em;
    }

    h2 {
      font-size: 5rem;
    }

    h3 {
      font-size: 2.5rem;
    }

    li:last-of-type {
      grid-column: span 2;
      justify-content: end;
    }

    li:last-of-type a {
      font-size: 2rem;
    }

    li:last-of-type a svg {
      width: 40px;
      height: 40px;
    }
  }

  @media (min-width: 1024px) {
    ul {
      gap: 5em;
    }

    h2 {
      font-size: 6em;
    }

    h3 {
      font-size: 3em;
    }

    li:last-of-type a {
      font-size: 2.5rem;
    }

    li:last-of-type a svg {
      width: 50px;
      height: 50px;
    }

    article:hover figure {
      scale: 0.99;

      & img {
        filter: blur(10px); 
      }
    }

    li:last-of-type a:hover {
      background-color: var(--color-tertiary);
      color: white;

      & svg {
        transform: rotate(-45deg);
      }
    }
  }
</style>