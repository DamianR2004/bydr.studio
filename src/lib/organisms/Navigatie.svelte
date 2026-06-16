<nav>
    <ul>
        <li><a href="/">bydr<span>.</span></a></li>
        <li><a href="#over">Over</a></li>
        <li><a href="#diensten">Diensten</a></li>
        <li><a href="/projecten">Projecten</a></li>
        <li><a href="#contact">Contact</a></li>
    </ul>
</nav>

<style>
nav {
    width: 100%;
    padding: 0 5%;
}

ul {
    height: 82px;
    display: grid;
    grid-template-columns: 1fr max-content max-content max-content 1fr;
    grid-gap: 30px; 
    align-items: center;
    list-style-type: none;
    padding: 0;
}

ul li:nth-child(1) {
    grid-column: 1;
    justify-self: start;
    font-family: var(--font-heading);
    font-weight: 1000;
}

ul li:nth-child(2) {
    grid-column: 2;
}

ul li:nth-child(3) {
    grid-column: 3;
}

ul li:nth-child(4) {
    grid-column: 4;
}

ul li:nth-child(5) {
    grid-column: 5;
    justify-self: end;
}

a {
    display: inline-block;
    font-size: 2em;
    text-decoration: none;
    color: var(--color-text);
    padding: 0.25em 0.75em;
    transition: .25s;    
}

a:hover {
    border-radius: 99px;
    background-color: var(--color-tertiary);
}

ul li:nth-child(1) a:hover {
    scale: 1.05;
    background-color: transparent;

 & span{
    color: var(--color-secondary);
    transition: .25s;
 }
}

ul li:nth-child(5) a:hover {
    background-color: var(--color-secondary);
    color: black;
}
</style>