document.addEventListener("DOMContentLoaded", function() {
    let index = 0;
    const images = document.querySelectorAll(".carousel-image");

    function showNextImage() {
        images[index].style.display = "none";
        index = (index + 1) % images.length;
        images[index].style.display = "block";
    }

    images[index].style.display = "block";
    setInterval(showNextImage, 3000);
});
