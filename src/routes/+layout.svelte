<script>
  import { gsap } from "gsap";
  import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
  import { ScrollSmoother } from "gsap/dist/ScrollSmoother"; 
  
  import syneMedium from '$lib/fonts/syne-medium.woff2';
  import syneExtraBold from '$lib/fonts/syne-extrabold.woff2';
  import athy from '$lib/fonts/athy.woff2';
  import favicon from '$lib/assets/favicon.svg';
  import '$lib/styles/global.css';

  let { children } = $props();

  $effect(() => {
    gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

    let smoother = ScrollSmoother.create({
      wrapper: '#smooth-wrapper',
      content: '#smooth-content',
      smooth: 1.5,
      effects: true
  });
  })
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