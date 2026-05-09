<section>
    <h2>Veelgestelde vragen</h2>
        <ul>
            <li>
                <details>
                    <summary>Wat zijn de kosten van een website?</summary>
                    <p></p>
                </details>
            </li>
            <li>
                <details>
                    <summary>Wat onderscheidt jou van anderen?</summary>
                    <p></p>
                </details>
            </li>   
            <li>
                <details>
                    <summary>Kan ik later eigen content aan de site toevoegen?</summary>
                    <p></p>
                </details>
            </li>
            <li>
                <details>
                    <summary>Werkt mijn website ook goed op mobiel?</summary>
                    <p></p>
                </details>
            </li>
        </ul>
</section>

<style>

li{
    list-style: none;
}

details {
  border-block-end: 1px solid var(--color-secondary);
  margin-block: .5rem;
  padding-block: .5rem;
}

summary {
  position: relative;
  anchor-name: --summary;
  
  &::marker {
    content: "";
  }
  
  &::before,
  &::after {
    content: "";
    border-block-start: 3px solid var(--color-secondary);
    height: 0;
    width: 1rem;
    
    inset-block-start: 50%;
    inset-inline-end: 0;
    
    position: absolute;
    position-anchor: --summary;
    position-area: top end;
  }
  
  &::after {
    transform: rotate(90deg);
    transform-origin: 50%;
  }
}

details[open] summary::after {
  transform: rotate(0deg);
}
</style>