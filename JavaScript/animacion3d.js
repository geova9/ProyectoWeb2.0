document.querySelectorAll('.efecto3d').forEach(img => {
  img.style.transition = "transform 0.2s";
  img.addEventListener('mousemove', (e) => {
    const rect = img.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    img.style.transform = `rotateY(${x / 5}deg) rotateX(${-y / 5}deg) scale(1.1)`;
  });
  img.addEventListener('mouseleave', () => {
    img.style.transform = "rotateY(0deg) rotateX(0deg) scale(1)";
  });
});
