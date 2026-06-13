<script>
  import Badge from '$lib/atoms/Badge.svelte';
  let { projects } = $props(); 
</script>

<ul>
  {#each projects as project}
    <li>
      <a href="/{project.slug}">
        <section>
          <img 
            src="{project.mainImage}?w=400&h=400&fit=crop&auto=format" 
            alt="Cover voor {project.title}" 
            loading="lazy" 
          />
          <span>{project.year}</span>
          <h2>{project.title}</h2>
        
          {#if project.stack}
            <div>
              {#each project.stack as tool}
                <Badge text={tool} />
              {/each}
            </div>
          {/if}
        </section>
      </a>
    </li>
  {/each}
</ul>

<style>

ul {
  display: flex;
  overflow-x: auto;
  gap: 3rem;              
  width: 100%;
  padding: 0 5%;
}

li {
  height: 85vh;
  width: 60vw;
  flex-shrink: 0;         
  background-color: white;
  list-style-type: none;
  border-radius: 1rem;
  transition: .25s;

 &:hover{
  scale: 0.98;
 }
}

h2 {
  font-size: 3em;
}
</style>