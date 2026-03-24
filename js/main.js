// Scroll-Animation (Sanftes Einblenden)
const revealElements = document.querySelectorAll('section');

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  },
  { threshold: 0.3 },
);
revealElements.forEach((el) => {
  observer.observe(el);
});
