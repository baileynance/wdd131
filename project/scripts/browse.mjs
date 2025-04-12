import { createHeader, welcomeMessage } from './header.js';
import { createFooter } from './footer.js';

createHeader();
createFooter();
welcomeMessage();

let animeData = [];
let filteredData = [];

async function getAnime() {
    const response = await fetch("./data/anime.json");
    const data = await response.json();
    animeData = data;
    displayAnime(animeData);
}

getAnime();

const animeList = document.getElementById("anime-list");
const displayAnime = (data) => {
    animeList.innerHTML = "";
    data.forEach(anime => {
        let li = document.createElement("li");
        li.innerHTML = `
        <h3>${anime.name}</h3>
        <a href="${anime.url}" target="_blank" loading="lazy"><img src="${anime.image}" alt="${anime.alt}"></a>
        <div>
            <p>${anime.rating} &starf;</p>
            <p>${anime.seasons} Season(s)</p>
            <p>${anime.episodes} Episodes</p>
        </div>
        `;
        animeList.appendChild(li);
    })
}

const sort = document.getElementById("sort");
sort.addEventListener("change", function(e) {
    const input = e.target.value;
    if (input == "alphabetical") {
        filteredData = animeData.sort((a, b) => a.name.localeCompare(b.name));
    } else if (input == "longest") {
        filteredData = animeData.sort((a, b) => b.episodes - a.episodes);
    } else if (input == "shortest") {
        filteredData = animeData.sort((a, b) => a.episodes - b.episodes);
    }
    displayAnime(filteredData);
})


