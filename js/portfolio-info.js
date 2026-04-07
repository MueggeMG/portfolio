// Scroll-Animation
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  },
  { threshold: 0.15 },
);

document
  .querySelectorAll('section:not(#hero)')
  .forEach((s) => observer.observe(s));

// Cursor grow für seitenspezifische Elemente
document
  .querySelectorAll('.tech-card, .learning-item, .hero-stat, .design-item')
  .forEach((el) => {
    el.addEventListener('mouseenter', () => cursor.classList.add('grow'));
    el.addEventListener('mouseleave', () => cursor.classList.remove('grow'));
  });
