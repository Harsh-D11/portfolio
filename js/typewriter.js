const typewriter = document.getElementById('typewriter');

if (typewriter) {
  const lines = [
    'DevOps Engineer \u00B7 Prompt Engineer',
    'Cloud \u00B7 CI/CD \u00B7 Automation',
    'FastAPI \u00B7 Docker \u00B7 AI Workflows'
  ];

  let lineIndex = 0;
  let charIndex = 0;
  let deleting = false;

  function typeLoop() {
    const current = lines[lineIndex];

    if (!deleting) {
      typewriter.textContent = current.slice(0, charIndex++);
      if (charIndex > current.length) {
        deleting = true;
        setTimeout(typeLoop, 1800);
        return;
      }
    } else {
      typewriter.textContent = current.slice(0, charIndex--);
      if (charIndex < 0) {
        deleting = false;
        lineIndex = (lineIndex + 1) % lines.length;
      }
    }

    setTimeout(typeLoop, deleting ? 35 : 65);
  }

  typeLoop();
}