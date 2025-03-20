document.getElementById('last-modified').innerText = new Date(document.lastModified);
document.getElementById('current-year').innerText = new Date().getFullYear();


const temperatureElement = document.getElementById("temperature");
const windElement = document.getElementById("wind");
const windChillElement = document.getElementById("wind-chill");

const calculateWindChill = (temperature, windSpeed) => {
    const windChill = 35.74 + (0.6215 * temperature) - (35.75 * (windSpeed**0.16)) + (0.4275 * temperature * (windSpeed**0.16));
    windChillElement.textContent = windChill.toFixed(1);
}

calculateWindChill(temperatureElement.textContent, windElement.textContent);