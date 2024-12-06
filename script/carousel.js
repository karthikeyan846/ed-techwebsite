let currentIndex = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.carousel-item');
    if (index >= slides.length) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = slides.length - 1;
    } else {
        currentIndex = index;
    }
    const offset = -currentIndex * 100;
    document.querySelector('.carousel-inner').style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
    showSlide(currentIndex + 1);
}

function prevSlide() {
    showSlide(currentIndex - 1);
}

// Initialize the first slide
showSlide(currentIndex);

setInterval(nextSlide, 7000);

document.addEventListener("DOMContentLoaded", function() {
  const video = document.getElementById("vid1");

  video.addEventListener("click", function(event) {
      if (!video.paused) {
          event.preventDefault();
          video.play();
      }
  });
});
