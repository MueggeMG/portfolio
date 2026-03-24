// Navigationsoverlay beim Scrollen
window.addEventListener('scroll', () => {
  const nav = document.querySelector('nav');

  if (window.scrollY > 60) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
});

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

// Custom Cursor
const cursor = document.getElementById('cursor');
let mx = 0,
  my = 0,
  cx = 0,
  cy = 0;

document.addEventListener('mousemove', (e) => {
  mx = e.clientX;
  my = e.clientY;
});

function animateCursor() {
  cx += (mx - cx) * 0.12;
  cy += (my - cy) * 0.12;
  cursor.style.transform = `translate(${cx - 4}px, ${cy - 4}px)`;
  requestAnimationFrame(animateCursor);
}

animateCursor();

document
  .querySelectorAll('a, button, .project-item, .skill-card, .stat-box')
  .forEach((el) => {
    el.addEventListener('mouseenter', () => cursor.classList.add('grow'));
    el.addEventListener('mouseleave', () => cursor.classList.remove('grow'));
  });
