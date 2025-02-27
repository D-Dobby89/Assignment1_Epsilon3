let slideIndex = 0;
showSlides();

function showSlides() {
  const slides = document.getElementsByClassName("mySlides");

  // Hide all slides first
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  // Move to the next slide index
  slideIndex++;
  // If we go beyond the last slide, wrap around to the first
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }

  // Display the current slide
  slides[slideIndex - 1].style.display = "block";

  // Call showSlides() again after 5 seconds
  setTimeout(showSlides, 5000);
}