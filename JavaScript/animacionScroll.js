// animacionScroll.js
document.addEventListener("DOMContentLoaded", () => {
  const animatedImages = document.querySelectorAll('.animated-image');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      } else {
        entry.target.classList.remove('visible');
      }
    });
  }, {
    threshold: 0.2
  });

  animatedImages.forEach(image => {
    observer.observe(image);
  });
});
