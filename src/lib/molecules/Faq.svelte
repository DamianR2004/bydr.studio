<script>
  import { gsap } from "gsap";
  import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

  // We use $effect to ensure the DOM is ready for GSAP
  $effect(() => {
    const details = document.querySelectorAll("details");

    details.forEach((detail) => {
      const summary = detail.querySelector("summary");
      const content = detail.querySelector(".content");

      // Create the animation
      const animation = gsap.from(content, {
        height: 0,
        autoAlpha: 0,
        paddingBottom: 0,
        duration: 0.4,
        ease: "power2.inOut",
        paused: true,
        // Crucial: Refresh ScrollTrigger/Smoother when animation updates
        onUpdate: () => ScrollTrigger.refresh()
      });

      summary.addEventListener("click", (e) => {
        e.preventDefault();

        if (!detail.open) {
          detail.open = true;
          animation.play();
        } else {
          // Play reverse and then close the native attribute
          animation.reverse().then(() => {
            detail.open = false;
          });
        }
      });
    });
  });
</script>

<section>
  <h2>Veelgestelde vragen</h2>
  <ul>
    <li>
      <details>
        <summary>Wat zijn de kosten van een website?</summary>
        <div class="content">
          <div class="wrapper">
            <p>De kosten variëren per project, afhankelijk van uw specifieke wensen.</p>
          </div>
        </div>
      </details>
    </li>
    <!-- Add more items here -->
  </ul>
</section>

<style>
  li { list-style: none; }

  details {
    border-bottom: 1px solid var(--color-secondary, #333);
    margin-block: 0.5rem;
  }

  summary {
    list-style: none;
    padding: 1rem 0;
    cursor: pointer;
    position: relative;
    font-family: 'Syne', sans-serif;
    font-weight: 600;
  }

  /* Remove default arrow */
  summary::-webkit-details-marker { display: none; }

  /* Content wrapper for smooth animation */
  .content {
    overflow: hidden;
    visibility: hidden; /* Prevent flash of content */
  }

  .wrapper {
    padding-bottom: 1.5rem;
  }

  /* Simple Plus/Minus toggle using CSS variables or transforms */
  summary::after {
    content: '+';
    position: absolute;
    right: 0;
    transition: transform 0.3s ease;
  }

  details[open] summary::after {
    transform: rotate(45deg);
  }
</style>