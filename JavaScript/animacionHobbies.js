document.addEventListener('DOMContentLoaded', () => {
  const spans = document.querySelectorAll('.pressure-text span');

  anime({
    targets: spans,
    keyframes: [
      { translateY: '-2.75rem', rotate: '1turn', duration: 600, easing: 'easeOutExpo' },
      { translateY:    0       , rotate: '0turn', duration: 800, easing: 'easeOutBounce', delay: 100 }
    ],
    delay: anime.stagger(100),   // retrasa cada letra 100 ms
    loop: true,
    loopDelay: 1000
  });
});
