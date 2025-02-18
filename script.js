const images = [
    "slides/slide1.jpg",
    "slides/slide2.jpg",
    "slides/slide3.jpg"
];

let index = 0;
const slide = document.getElementById("slide");

function changeSlide() {
    index = (index + 1) % images.length;
    slide.src = images[index];
}

setInterval(changeSlide, 3000); // Change slide every 3 seconds
