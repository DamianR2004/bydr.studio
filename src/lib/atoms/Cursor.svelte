<script>
  import { onMount } from "svelte";
  import { gsap } from "gsap";

  let cursor;
  let cursorText = "";

  onMount(() => {
    const moveCursor = (e) => {
      gsap.to(cursor, { x: e.clientX, y: e.clientY, xPercent: -50, yPercent: -50, duration: 0.3 });
    };
    window.addEventListener("mousemove", moveCursor);

    const interactiveSelector = "img, picture";
    const interactives = document.querySelectorAll(interactiveSelector);

    interactives.forEach((el) => {
      el.addEventListener("mouseenter", () => {
        cursorText = el.dataset.cursor || "";
        gsap.to(cursor, { scale: 3, duration: 0.3 });
      });

      el.addEventListener("mouseleave", () => {
        cursorText = "";
        gsap.to(cursor, { scale: 1, duration: 0.3 });
      });
    });

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  });
</script>

<div bind:this={cursor}>
  {#if cursorText}
    <span>{cursorText}</span>
  {/if}
</div>

<style>
  @media (pointer: fine) {
    :global(html, body, a, button) {
      cursor: none;
    }
  }

  div {
    background: var(--color-secondary);
    width: 2rem;
    height: 2rem;
    z-index: 99;
    position: fixed;
    top: 0;
    left: 0;
    pointer-events: none;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  span {
    font-size: .7rem;
    white-space: nowrap;
    text-align: center;
    color: white;
  }

  @media (max-width: 768px) {
    div {
      display: none;
    }
  }
</style>