<script>
  import gsap from "gsap";

  const repetitions = [1, 2, 3, 4];
  let container; // We gebruiken een directe referentie

  $effect(() => {
    let tl;

    // Functie om de animatie te initialiseren
    const initLoop = () => {
      const scrollingText = gsap.utils.toArray('p', container);
      
      // Kill oude animatie als die bestaat (bij resize)
      if (tl) tl.kill();
      
      tl = horizontalLoop(scrollingText, {
        repeat: -1,
        paddingRight: 30,
        speed: 2
      });
    };

    // Wacht op lettertypes EN zorg dat de DOM stabiel is
    Promise.all([document.fonts.ready]).then(() => {
        // Een kleine timeout zorgt dat de browser de flex-width goed heeft
        setTimeout(initLoop, 100);
    });

    // Luister naar resize om de berekeningen te resetten
    window.addEventListener('resize', initLoop);

    return () => {
      if (tl) tl.kill();
      window.removeEventListener('resize', initLoop);
    };
  });

  // --- GSAP HELPER (Geoptimaliseerde versie) ---
  function horizontalLoop(items, config) {
    items = gsap.utils.toArray(items);
    config = config || {};
    let tl = gsap.timeline({
        repeat: config.repeat, 
        paused: config.paused, 
        defaults: {ease: "none"}, 
        onReverseComplete: () => tl.totalTime(tl.rawTime() + tl.duration() * 100)
    }),
    length = items.length,
    startX = items[0].offsetLeft,
    times = [],
    widths = [],
    xPercents = [],
    curIndex = 0,
    pixelsPerSecond = (config.speed || 1) * 100,
    snap = config.snap === false ? v => v : gsap.utils.snap(config.snap || 1),
    totalWidth, curX, distanceToStart, distanceToLoop, item, i;

    gsap.set(items, { 
      xPercent: (i, el) => {
        let w = widths[i] = parseFloat(gsap.getProperty(el, "width", "px"));
        xPercents[i] = snap(parseFloat(gsap.getProperty(el, "x", "px")) / w * 100 + gsap.getProperty(el, "xPercent"));
        return xPercents[i];
      }
    });
    gsap.set(items, {x: 0});
    
    totalWidth = items[length-1].offsetLeft + xPercents[length-1] / 100 * widths[length-1] - startX + items[length-1].offsetWidth * gsap.getProperty(items[length-1], "scaleX") + (parseFloat(config.paddingRight) || 0);
    
    for (i = 0; i < length; i++) {
      item = items[i];
      curX = xPercents[i] / 100 * widths[i];
      distanceToStart = item.offsetLeft + curX - startX;
      distanceToLoop = distanceToStart + widths[i] * gsap.getProperty(item, "scaleX");
      
      tl.to(item, {xPercent: snap((curX - distanceToLoop) / widths[i] * 100), duration: distanceToLoop / pixelsPerSecond}, 0)
        .fromTo(item, {xPercent: snap((curX - distanceToLoop + totalWidth) / widths[i] * 100)}, {xPercent: xPercents[i], duration: (curX - distanceToLoop + totalWidth - curX) / pixelsPerSecond, immediateRender: false}, distanceToLoop / pixelsPerSecond)
        .add("label" + i, distanceToStart / pixelsPerSecond);
      times[i] = distanceToStart / pixelsPerSecond;
    }
    
    tl.progress(1, true).progress(0, true);
    if (config.reversed) {
      tl.vars.onReverseComplete();
      tl.reverse();
    }
    return tl;
  }
</script>

<div class="wrapper">
    <section bind:this={container}>
        {#each repetitions as _}
        <p>
            dé studio gefocust op het maken van toegankelijke én creatieve digitale oplossingen.
        </p>
        {/each}
    </section>
</div>

<style>
    .wrapper {
        overflow: hidden;
        width: 100%;
        height: 100vh;
        display: flex;
        align-items: center;
    }

    section {
        display: flex;
        flex-wrap: nowrap; 
        will-change: transform;
    }

    p {
        white-space: nowrap;
        font-size: 12vw;
        margin: 0 30px 0 0;
        flex-shrink: 0; 
        user-select: none;
    }
</style>