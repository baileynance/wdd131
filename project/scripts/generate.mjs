import { createHeader } from './header.js';
import { createFooter } from './footer.js';

createHeader();
createFooter();

let animeData = [];

async function getAnime() {
    const response = await fetch("./data/anime.json");
    const data = await response.json();
    animeData = data;
}

getAnime();

const random = document.getElementById("random");
random.addEventListener("click", function() {
  const randomNumber = Math.floor(Math.random() * 100) + 1;
});