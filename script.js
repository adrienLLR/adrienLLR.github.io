const themeToggle = document.getElementById('theme-toggle');

function setNightModeState() {
  const nightMode = localStorage.getItem('nightMode');
  
  if (nightMode === 'enabled') {
    document.body.classList.add('night-mode');
    themeToggle.textContent = 'Light Mode';
  } else {
    document.body.classList.remove('night-mode');
    themeToggle.textContent = 'Night Mode';
  }
}

document.addEventListener('DOMContentLoaded', () => {
  setNightModeState();
  
  const projects = document.querySelectorAll('.project');
  const observerOptions = {
    root: null,
    threshold: 0.1,
  };

  function slideIn(entries, observer) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.remove('slide-in');
        entry.target.classList.add('slide-in-visible');
        observer.unobserve(entry.target);
      }
    });
  }

  const observer = new IntersectionObserver(slideIn, observerOptions);

  projects.forEach((project) => {
    project.classList.add('slide-in');
    observer.observe(project);
  });

  themeToggle.addEventListener('click', () => {
    if (document.body.classList.contains('night-mode')) {
      document.body.classList.remove('night-mode');
      themeToggle.textContent = 'Night Mode';
      localStorage.setItem('nightMode', 'disabled');
    } else {
      document.body.classList.add('night-mode');
      themeToggle.textContent = 'Light Mode';
      localStorage.setItem('nightMode', 'enabled');
    }
  });
});
