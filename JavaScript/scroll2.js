document.addEventListener('DOMContentLoaded', () => {
  window.addEventListener('scroll', () => {
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    const fraction = scrollTop / scrollHeight;
    document.body.style.setProperty('--scroll', fraction);
    console.log('--scroll:', fraction);
  }, false);
});
