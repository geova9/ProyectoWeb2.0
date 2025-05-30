class Carousel {
  constructor(containerEl, interval = 5000, autoplay = true) {
    this.container = containerEl;
    this.slides    = Array.from(this.container.querySelectorAll('.carousel-slide'));
    this.prevBtn   = this.container.querySelector('.prev');
    this.nextBtn   = this.container.querySelector('.next');
    this.dotsContainer = this.container.querySelector('.dots-container');
    this.index     = 0;
    this.interval  = interval;
    this.autoplay  = autoplay;
    this.timer     = null;

    // Generar los dots automáticamente
    this.dots = [];
    this.dotsContainer.innerHTML = '';
    this.slides.forEach((_, i) => {
      const dot = document.createElement('span');
      dot.className = 'dot';
      dot.setAttribute('data-index', i);
      this.dotsContainer.appendChild(dot);
      this.dots.push(dot);
    });

    this.update();
    this.attachEvents();

    if (this.autoplay) {
      this.startAutoPlay();
      this.container.addEventListener('mouseenter', () => this.stopAutoPlay());
      this.container.addEventListener('mouseleave', () => this.startAutoPlay());
    }
  }

  attachEvents() {
    if (this.prevBtn) {
      this.prevBtn.addEventListener('click', () => {
        this.goTo(this.index - 1);
      });
    }
    if (this.nextBtn) {
      this.nextBtn.addEventListener('click', () => {
        this.goTo(this.index + 1);
      });
    }
    this.dots.forEach((dot, idx) => {
      dot.addEventListener('click', () => {
        this.goTo(idx);
      });
    });
  }

  goTo(newIndex) {
    const len = this.slides.length;
    this.index = (newIndex % len + len) % len;
    this.update();
  }

  update() {
    this.slides.forEach((slide, i) => {
      slide.style.transform = `translateX(${(i - this.index) * 100}%)`;
    });
    this.dots.forEach((dot, i) => {
      dot.classList.toggle('active', i === this.index);
    });
  }

  startAutoPlay() {
    if (this.timer) return;
    this.timer = setInterval(() => {
      this.goTo(this.index + 1);
    }, this.interval);
  }

  stopAutoPlay() {
    clearInterval(this.timer);
    this.timer = null;
  }
}

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.carousel-container').forEach(container => {
    new Carousel(container, 5000, false);
  });
});