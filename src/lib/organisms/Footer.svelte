<script>
  import { onMount } from 'svelte';

  let timeString = "";
  let isBeschikbaar = true;

  onMount(() => {
    function refreshTime() {
      timeString = new Date().toLocaleString("nl-NL", {
        timeZone: "Europe/Amsterdam",
        hour: "2-digit",
        minute: "2-digit"
      });
    } 

    refreshTime();
    const interval = setInterval(refreshTime, 1000);

    return () => clearInterval(interval);
  });
</script>

<section id="contact">
<ul>
  <li>
    <h3>
      {isBeschikbaar ? 'Beschikbaar voor nieuwe projecten!' : 'Momenteel niet beschikbaar'}
      <span data-beschikbaar={isBeschikbaar}></span>
    </h3>
  </li>
  <li><h3><a href="mailto:info@bydr.studio">info@bydr.studio</a></h3></li>
</ul>
</section>

<section>
  <ul>
    <li><h4>Sitemap</h4></li>
    <li><a href="/">Home</a></li>
    <li><a href="/projecten">Projecten</a></li>
    <li><a href="/over">Over mij</a></li>
    <li><a href="#contact">Contact</a></li>
  </ul>

  <ul>
    <li><h4>Socials</h4></li>
    <li><a href="https://www.linkedin.com/in/damianromeijn/">LinkedIN</a></li>
    <li><a href="https://www.instagram.com/bydr.studio/">Instagram</a></li>
  </ul>

  <ul>
    <li><h4>Algemeen</h4></li>
    <li><p>KVK: KVK26166222</p></li>
  </ul>

  <ul>
    <li><h4 id="time">{timeString}</h4></li>
    <li><p>Ede, Nederland</p></li>
  </ul>
</section>

<style>

  span{
    display: inline-block;
    height: 20px; 
    width: 20px;
    border-radius: 50%;
    margin-left: 15px;
    vertical-align: middle;
  }

  span[data-beschikbaar="true"] {
    background-color: #22c55e;
    animation: blob 5s infinite;
  }

  span[data-beschikbaar="false"] {
    background-color: #ef4444;
  }

  section:last-of-type{
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-content: center;
  }

  ul{
    list-style: none;
    padding: 0;
  }

  #contact h3{
    font-size: 3rem;
  }

  #contact{
      h3 a{
        font-size: .8em;
      }
  }

  h4{
    font-size: 2rem;
    margin: 0;
  }

  p, a{
    font-size: 1.5rem;
    margin: 0;
  }

  a, p{
    color: #A6A6A6;
  }

  @media (min-width: 1024px) {
  section:last-of-type{
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }

    #contact h3{
    font-size: 6rem;
    line-height: 1;
  }

  #contact{
      h3 a{
        font-size: 5rem;
        
      }
  }

  h4{
    font-size: 3rem;
    margin: 0;
  }

  p, a{
    font-size: 2rem;
    margin: 0;
    transition: .25s ease-in-out;
  }

  span{
    height: 30px; 
    width: 30px;
  }


  a:hover{
    color: var(--color-text);
  }
}

  @keyframes blob{
    0%{
      scale: 1;
    }

    50%{
      scale: 1.5;
    }

    100%{
      scale: 1;
    }
  }
</style>