<script>
  import { gsap } from "gsap";
  import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

  $effect(() => {
    const items = document.querySelectorAll("details");

    items.forEach((el) => {
      const summary = el.querySelector("summary");

      summary.onclick = (e) => {
        e.preventDefault(); // Stop the instant snap toggle
        
        const isOpen = el.hasAttribute("open");
        const summaryHeight = summary.offsetHeight;
        
        // If we are opening, we must set the attribute first so the 
        // browser calculates the inner text's height (scrollHeight)
        if (!isOpen) el.setAttribute("open", "");
        const fullHeight = el.scrollHeight;

        gsap.fromTo(el, 
          { height: isOpen ? fullHeight : summaryHeight }, 
          {
            height: isOpen ? summaryHeight : fullHeight,
            duration: 0.25,
            ease: "expo.out",
            overwrite: true, // Prevents glitches if clicked rapidly
            onUpdate: () => ScrollTrigger.refresh(),
            onComplete: () => {
              if (isOpen) el.removeAttribute("open");
              // Remove the fixed height so it stays responsive to window resizes
              gsap.set(el, { clearProps: "height" });
            }
          }
        );
      };
    });
  });
</script>

<section>
  <h2>Veelgestelde vragen</h2>
  <ul>
    <li>
      <details>
        <summary>Wat zijn de kosten van een project?</summary>
        <p>Dit hangt af van je vraag. Of het nu gaat om een complete branding en nieuwe website, een verfijnd UI/UX design, of een snelle reparatie van je huidige site: alles is maatwerk. Ik kijk graag met je mee naar de beste oplossing voor jouw budget en planning. Neem gerust <a>contact</a> op voor een heldere prijsindicatie.</p>
      </details>
    </li>
    <li>
      <details>
        <summary>Werkt mijn website ook goed op mobiel?</summary>
        <p>Absoluut. Ik hanteer een mobile-first strategie. Dit betekent dat jouw website niet alleen "werkt", maar uitblinkt in snelheid en gebruiksgemak op elk scherm, van smartphone tot desktop. Dat is niet alleen fijn voor je bezoekers, maar ook essentieel voor je score in Google.</p>
      </details>
    </li>
        <li>
      <details>
        <summary>Wat onderscheidt jou van anderen?</summary>
        <p>Ik combineer creatief design met strikte toegankelijkheid. Jouw website voldoet hiermee aan de nieuwste Europese toegankelijkheidswetgeving (WCAG). Het resultaat? Een inclusieve website waarmee je een groter publiek bereikt, je SEO verbetert en juridisch volledig gedekt bent. </p>
      </details>
    </li>
    <li>
      <details>
        <summary>Kan ik later eigen content aan de site toevoegen?</summary>
        <p>Zeker! Ik kan een gebruiksvriendelijk Content Management Systeem (CMS) voor je inrichten. Zo behoud je de volledige controle en kun je op elk gewenst moment eenvoudig zelf teksten, blogs of portfolio-items toevoegen zonder technische kennis.</p>
      </details>
    </li>
  </ul>
</section>

<style>
  li { 
    list-style: none; 
  }

  details {
    border-bottom: 5px solid var(--color-secondary);
    overflow: hidden; 
    font-size: 30px;
  }

  summary {
    list-style: none;
    padding: 1.5rem 0;
    cursor: pointer;
    position: relative;
    font-weight: 900;
    font-size: 60px;
  }

  summary::-webkit-details-marker { 
    display: none; 
  }

  p {
    margin: 0;
    padding-bottom: 1.5rem;
  }

  summary::after {
    content: '+';
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    transition: transform 0.25s cubic-bezier(0.19, 1, 0.22, 1);
  }

  details[open] summary::after {
    transform: translateY(-50%) rotate(45deg);
  }
</style>