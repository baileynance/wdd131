const header = document.querySelector("header");

const createHeader = () => {
    header.innerHTML = `
    <div>
        <img id="logo" src="images/R.png" alt="Randimé Logo">
        <h1>Randimé</h1>
    </div>
    <nav id="header-nav">
        <ul id="nav-list">
            <li><a href="index.html">Home</a></li>
            <li><a href="browse.html">Browse</a></li>
            <li><a href="generate.html">Generate</a></li>
            <li><a href="join.html">Join</a></li>
        </ul>
    </nav>
    `;
}

export { createHeader };