let index = 0;
const slides = document.querySelector('.slides');

function nextSlide() {
    index++;
    if (index >= 6) index = 0;
    slides.style.transform = `translateX(${-index * 100}%)`;
}
setInterval(nextSlide, 1500);

// Countdown Timer
const targetDate = new Date("2026-03-18T00:00:00").getTime();
function updateCountdown() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance < 0) {
        document.getElementById("countdown").innerHTML = "We're together now! ❤️";
        return;
    }
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("countdown").innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
}
setInterval(updateCountdown, 1000);

// Love Letter Scroll Effect
document.getElementById("openLetter").addEventListener("click", function() {
    const letter = document.getElementById("loveLetter");
    letter.classList.toggle("show");
    if (letter.classList.contains("show")) {
        letter.style.background = "linear-gradient(135deg, #ff9a9e, #fad0c4)";
        letter.style.fontFamily = "'Dancing Script', cursive";
        letter.style.padding = "20px";
        letter.style.borderRadius = "10px";
        letter.style.color = "#fff";
        letter.style.boxShadow = "0 4px 10px rgba(0, 0, 0, 0.3)";
    }
});



const backgroundImages = [
    "images/N1.jpg",
    "images/N2.jpg",
    "images/N3.jpg",
    "images/N4.jpg",
    "images/N5.jpg",
    "images/N6.jpg",
    "images/N7.jpg",
    "images/N8.jpg",
    "images/N9.jpg",
    "images/N10.jpg",
    "images/N11.jpg",
    "images/N12.jpg",
];

let bgIndex = 0;

function changeBackground() {
    document.body.style.backgroundImage = `url('${backgroundImages[bgIndex]}')`;
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundPosition = "center";
    document.body.style.transition = "background 1s ease-in-out";

    bgIndex = (bgIndex + 1) % backgroundImages.length;
}

// Change background every 5 seconds
setInterval(changeBackground, 5000);

// Set initial background
changeBackground();