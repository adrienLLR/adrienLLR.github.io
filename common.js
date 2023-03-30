const themeToggle = document.getElementById('theme-toggle');

function setNightModeState() {
  const nightMode = localStorage.getItem('nightMode');

  if (nightMode === 'enabled') {
    document.body.classList.add('night-mode');
    if (themeToggle) themeToggle.textContent = 'Light Mode';
  } else {
    document.body.classList.remove('night-mode');
    if (themeToggle) themeToggle.textContent = 'Night Mode';
  }
}

document.addEventListener('DOMContentLoaded', () => {
  setNightModeState();

  if (themeToggle) {
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
  }
});
