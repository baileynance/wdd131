document.getElementById('lastModified').innerText = new Date(document.lastModified);
document.getElementById('currentyear').innerText = new Date().getFullYear();

const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    year: 2005,
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    year: 1888,
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    year: 2015,
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    year: 2020,
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    year: 1974,
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    year: 1986,
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    year: 1983,
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
    templeName: "Fukuoka Japan",
    location: "Fukuoka, Japan",
    dedicated: "1999, March, 20",
    year: 1999,
    area: 10700,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/fukuoka-japan/800x500/fukuoka-japan-temple-lds-306863-wallpaper.jpg"
  },
  {
    templeName: "Accra Ghana",
    location: "Accra, Ghana",
    dedicated: "2001, November, 16",
    year: 2001,
    area: 17500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/accra-ghana/800x500/accra-ghana-temple-758797-wallpaper.jpg"
  },
  {
    templeName: "Bern Switzerland",
    location: "Bern, Switzerland",
    dedicated: "1953, August, 5",
    year: 1953,
    area: 35546,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/bern-switzerland/800x500/bern-switzerland-temple-lds-784288-wallpaper.jpg"
  }
];

const navList = document.getElementById('nav-list');
const button = document.getElementById('hamburger');

const windowSize = () => {
    if (window.innerWidth < 740) {
        navList.style.display = "none";
    }
    else if (window.innerWidth > 740) {
        navList.style.display = "flex";
    }
}

windowSize();

window.addEventListener('resize', function() {
    windowSize();
});

button.addEventListener("click", function() {
    if (button.textContent === "☰") {
        button.textContent = "-";
    } else if (button.textContent === "-") {
        button.textContent = "☰";
    }

    if (navList.style.display === "none") {
        navList.style.display = "block"; 
    } else if (navList.style.display === "block") {
        navList.style.display = "none"; 
    }
});

const container = document.getElementById("container");
const displayTemples = (templeList) => {
    container.innerHTML = "";
    templeList.forEach(temple => {
        let li = document.createElement("li");
        let h3 = document.createElement("h3");
        h3.textContent = temple.templeName;
        let locationP = document.createElement("p")
        locationP.textContent = `Location: ${temple.location}`;
        let dedicatedP = document.createElement("p");
        dedicatedP.textContent = `Dedicated: ${temple.dedicated}`;
        let areaP = document.createElement("p");
        areaP.textContent = `Size: ${temple.area}`;
        let image = document.createElement("img");
        image.setAttribute("src", temple.imageUrl);
        image.setAttribute("alt", temple.templeName);
        image.setAttribute("loading", "lazy");

        li.appendChild(h3);
        li.appendChild(locationP);
        li.appendChild(dedicatedP);
        li.appendChild(areaP);
        li.appendChild(image);

        container.appendChild(li);
    });
}

displayTemples(temples);

const homeFilter = document.getElementById("home-filter");
homeFilter.addEventListener("click", function() {
    displayTemples(temples)
})
const oldFilter = document.getElementById("old-filter");
oldFilter.addEventListener("click", function() {
    const oldTemples = temples.filter((temple) => temple.year < 1900)
    displayTemples(oldTemples);
})
const newFilter = document.getElementById("new-filter");
newFilter.addEventListener("click", function() {
    const newTemples = temples.filter((temple) => temple.year > 2000)
    displayTemples(newTemples);
})
const smallFilter = document.getElementById("small-filter");
smallFilter.addEventListener("click", function() {
    const smallTemples = temples.filter((temple) => temple.area < 10000)
    displayTemples(smallTemples);
})
const largeFilter = document.getElementById("large-filter");
largeFilter.addEventListener("click", function() {
    const largeTemples = temples.filter((temple) => temple.area > 90000)
    displayTemples(largeTemples);
})
