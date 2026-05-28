const skillRows = document.querySelectorAll('.skill-row');

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const row = entry.target;
      const fill = row.querySelector('.fill');
      const level = row.getAttribute('data-level');
      if (fill) fill.style.width = level + '%';
      observer.unobserve(row);
    }
  });
}, { threshold: 0.3 });

skillRows.forEach((row) => observer.observe(row));
