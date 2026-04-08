<script>
  import { urlFor } from '$lib/sanity';
  import { PortableText } from '@portabletext/svelte';
  import Badge from '$lib/atoms/Badge.svelte';
  
  let { data } = $props();
</script>

<article class="project-view">
  {#if data.project}
    <header>
      <h1>{data.project.title} ({data.project.year})</h1>
      
      {#if data.project.stack}
        <div class="badges">
          {#each data.project.stack as tech}
            <Badge text={tech} />
          {/each}
        </div>
      {/if}
    </header>

    {#if data.project.intro}
      <section class="text-block">
        <PortableText value={data.project.intro} />
      </section>
    {/if}

    {#if data.project.gallery}
      <section class="gallery">
        {#each data.project.gallery as img}
          <img src={urlFor(img).width(1200).url()} alt="" />
        {/each}
      </section>
    {/if}

    {#if data.project.outro}
      <section class="text-block">
        <PortableText value={data.project.outro} />
      </section>
    {/if}
  {:else}
    <p>Laden...</p>
  {/if}
</article>

<style>
  .project-view { max-width: 900px; margin: 4rem auto; padding: 0 1rem; }
  .badges { margin-top: 1rem; display: flex; flex-wrap: wrap; gap: 0.5rem; color: black; }
  .gallery { display: flex; flex-direction: column; gap: 2rem; margin: 2rem 0; }
  img { width: 100%; height: auto; display: block; }
  .text-block { margin: 2rem 0; line-height: 1.6; }
</style>