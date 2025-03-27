document.addEventListener('DOMContentLoaded', function () {
  const hamburgerMenu = document.getElementById('hamburgerMenu');
  const navLink = document.getElementById('nav-link');

  hamburgerMenu.addEventListener('click', function () {
    navLink.style.display = navLink.style.display === 'block' ? 'none' : 'block';
  });

  const track = document.querySelector('.slider-track');
  const slides = Array.from(document.querySelectorAll('.slide'));
  const nextBtn = document.querySelector('.next-btn');
  const prevBtn = document.querySelector('.prev-btn');

  const slideWidth = slides[0].getBoundingClientRect().width;
  const visibleSlides = 3;
  let currentIndex = 0;

  // buat Inisialisasi posisi slider
  updateSliderPosition();

  // buat tombol next click
  nextBtn.addEventListener('click', function () {
    if (currentIndex < slides.length - visibleSlides) {
      currentIndex++;
      updateSliderPosition();
    }
  });

  // buat tombol prev click
  prevBtn.addEventListener('click', function () {
    if (currentIndex > 0) {
      currentIndex--;
      updateSliderPosition();
    }
  });

  function updateSliderPosition() {
    const newPosition = -currentIndex * (slideWidth + 20); // buat gap jarak 20px
    track.style.transform = `translateX(${newPosition}px)`;

    prevBtn.disabled = currentIndex === 0;
    nextBtn.disabled = currentIndex >= slides.length - visibleSlides;
  }

  // buat resize window
  window.addEventListener('resize', function () {
    updateSliderPosition();
  });
});