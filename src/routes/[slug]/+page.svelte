<script>
  import { urlFor } from '$lib/sanity';
  import { PortableText } from '@portabletext/svelte';
  import { Footer } from "$lib/index.js"
  
  let { data } = $props();
</script>

<nav aria-label="Breadcrumb" class="breadcrumb">
  <ol>
    <li><a href="/">Home</a></li>
    <li><a href="/projecten">Projecten</a></li>
    <li><span aria-current="page">{data.project.title}</span></li>
  </ol>
</nav>

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

<Footer/>

<style>
.breadcrumb {
  padding: 5%;
}

a, span{
  font-size: 1em;
}

.breadcrumb ol {
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  margin: 0;
  padding: 0;
  align-items: end;
}

.breadcrumb li:not(:last-child)::after {
  display: inline-block;
  margin: 0 .75rem;
  font-size: 1em;
  content: ">";
}
</style>
