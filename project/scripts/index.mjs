import { createHeader, welcomeMessage } from './header.js';
import { createFooter } from './footer.js';

createHeader();
createFooter();
welcomeMessage();

async function getAnime() {
    const response = await fetch("./data/anime.json");
    const data = await response.json();
    displayTrending(data);
    displayPopular(data);
}

const displayTrending = (data) => {
    const trending = document.getElementById("trending");
    trending.innerHTML = "";
    const trendingAnime = data.filter(anime => anime.trending === true);
    trendingAnime.forEach(anime => {
        const li = document.createElement("li");
        li.innerHTML = `
            <h3>${anime.name}</h3>
            <a href="${anime.url}" target="_blank" loading="lazy"><img src="${anime.image}" alt="${anime.alt}"></a>
        `;
        trending.appendChild(li);
    });
}

const displayPopular = (data) => {
    const mostPopular = document.getElementById("most-popular");
    mostPopular.innerHTML = "";
    const popularAnime = data.filter(anime => anime.popular == 1 || anime.popular == 2 || anime.popular == 3);
    popularAnime.forEach(anime => {
        const li = document.createElement("li");
        li.innerHTML = `
            <h3>${anime.name}</h3>
            <a href="${anime.url}" target="_blank" loading="lazy"><img src="${anime.image}" alt="${anime.alt}"></a>
        `;
        mostPopular.appendChild(li);
    });
}

getAnime();