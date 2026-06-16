<script>
  import { gsap } from "gsap";
  import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
  import { SplitText } from "gsap/dist/SplitText";
  import Lenis from 'lenis';

  gsap.registerPlugin(ScrollTrigger, SplitText);

  $effect(() => {
    const splitTekst = document.querySelectorAll('.revealtekst');

    splitTekst.forEach((pElement) => {
        const tekst = new SplitText(pElement, { type: 'words, chars' });

        gsap.from(tekst.chars, {
            scrollTrigger: {
                trigger: pElement,
                start: 'top 60%',
                end: 'bottom 50%',
                scrub: true,
                markers: false 
            },
            opacity: 0.2,
            y:10,
            stagger: 0.1
        });
    });

    const lenis = new Lenis();

    lenis.on('scroll', ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.destroy();
      gsap.ticker.remove(lenis.raf);
    };
  });
</script>

<section id="over">
    <h2 class="visually-hidden">Over</h2>
    <p class="revealtekst">Met <span>bydr<span class="colorchange">.</span>studio</span> bouw ik aan toegankelijke en creatieve oplossingen voor het web. Ik help je om jouw plannen om te zetten in een website die écht werkt.</p>
</section>

<style>
    section {
        height: 100vh;        
        display: grid;
        place-content: center;
    }

    p {
        font-size: clamp(2rem, 5vw, 8rem);
    }

    span:nth-of-type(1) {
        font-family: "Syne";
        font-weight: 1000;
    }

    .colorchange {
        color: var(--color-secondary);
    }
</style>