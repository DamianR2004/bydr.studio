<script>
  import { gsap } from "gsap";
  import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
  import { ScrollSmoother } from "gsap/dist/ScrollSmoother"; 
  import { SplitText } from "gsap/dist/SplitText"; 
  
  import syneMedium from '$lib/fonts/syne-medium.woff2';
  import syneExtraBold from '$lib/fonts/syne-extrabold.woff2';
  import athy from '$lib/fonts/athy.woff2';
  import favicon from '$lib/assets/favicon.svg';
  import '$lib/styles/global.css';
  
  import { Geluid, Cursor } from "$lib/index.js"; 

  let { children } = $props();

$effect(() => {
    const revealSections = document.querySelectorAll('.revealsection');
    
    revealSections.forEach((el) => {
        gsap.from(el, {
            scrollTrigger: {
                trigger: el,
                start: 'top 85%', 
                toggleActions: "play none none reverse" 
            },
            y: 50,    
            opacity: 0,         
            duration: 1,        
            ease: "power3.out"  
        });
    });

  $effect(() => {
    gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

    let smoother = ScrollSmoother.create({
      wrapper: '#smooth-wrapper',
      content: '#smooth-content',
      smooth: 1.5,
      effects: true
    });

    const handleAnchorClick = (e) => {
      const anchor = e.target.closest('a[href^="#"]');
      
      if (anchor) {
        e.preventDefault();
        e.stopPropagation(); 
        
        const target = anchor.getAttribute('href');
        
        if (target && target !== '#') {
          const element = document.querySelector(target);
          if (element) {
            smoother.scrollTo(element, true, "top top");
          }
        }
      }
    };

    document.addEventListener('click', handleAnchorClick, { capture: true });

    const geluid = new Audio(Geluid);

    const speelGeluidAf = (e) => {
      const link = e.target.closest('a');

      if (link) {
        if (e.relatedTarget && link.contains(e.relatedTarget)) {
          return; 
        }

        geluid.currentTime = 0;
        geluid.play().catch(() => {}); 
      }
    };

    document.addEventListener('mouseover', speelGeluidAf);

    return () => {
      document.removeEventListener('click', handleAnchorClick, { capture: true });
      document.removeEventListener('mouseover', speelGeluidAf);
      if (smoother) smoother.kill();
    };
  });
});
</script>

<svelte:head>
  <title>bydr.studio</title>
  <link rel="preload" href={syneMedium} as="font" type="font/woff2" crossorigin="anonymous">
  <link rel="preload" href={syneExtraBold} as="font" type="font/woff2" crossorigin="anonymous">
  <link rel="preload" href={athy} as="font" type="font/woff2" crossorigin="anonymous">
  <link rel="icon" href={favicon} />
</svelte:head>

<div id="smooth-wrapper">
  <div id="smooth-content">
    {@render children()}
  </div>
</div>

<Cursor />