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