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

