const themeToggle = document.getElementById('theme-toggle');
const aiProjectsBtn = document.getElementById('ai-projects-btn');
const softwareProjectsBtn = document.getElementById('software-projects-btn');
const aiProjects = document.getElementById('ai-projects');
const softwareProjects = document.getElementById('software-projects');


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

function toggleActiveClass(btn) {
  aiProjectsBtn.classList.remove('active');
  softwareProjectsBtn.classList.remove('active');
  btn.classList.add('active');
}

function filterProjects(projectType) {
  if (projectType === 'ai') {
    aiProjects.style.display = 'block';
    softwareProjects.style.display = 'none';
    toggleActiveClass(aiProjectsBtn);
  } else {
    aiProjects.style.display = 'none';
    softwareProjects.style.display = 'block';
    toggleActiveClass(softwareProjectsBtn);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  setNightModeState();
  filterProjects('ai'); // Uncomment this to toggle AI section at loading
  //filterProjects('software'); 

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

  aiProjectsBtn.addEventListener('click', () => {
    filterProjects('ai');
  });

  softwareProjectsBtn.addEventListener('click', () => {
    filterProjects('software');
  });

  // toggleActiveClass(aiProjectsBtn); // Uncomment this to toggle AI section at loading
  toggleActiveClass(softwareProjectsBtn);
});

