// Alternar tema claro/escuro e salvar preferência no localStorage
const toggleButton = document.getElementById('theme-toggle');
const currentTheme = localStorage.getItem('theme') || 'dark';

document.documentElement.setAttribute('data-theme', currentTheme);

toggleButton.addEventListener('click', () => {
  let theme = document.documentElement.getAttribute('data-theme');
  if (theme === 'dark') {
    document.documentElement.setAttribute('data-theme', 'light');
    localStorage.setItem('theme', 'light');
  } else {
    document.documentElement.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');
  }
});

// Projetos para carregar dinamicamente
const projects = [
  {
    title: "Site Institucional",
    description: "Desenvolvimento de um site institucional com listagem dinâmica de vagas usando Google Sheets.",
    image: "imgs/pagina_inicial_ong.jpeg", 
    link: "https://vh-00.github.io/site-ong/"
  },
  
 
];

const projectsList = document.querySelector('.projects-list');

if (projectsList) {
  projects.forEach(proj => {
    const projectCard = document.createElement('div');
    projectCard.classList.add('project-item'); // ou 'project-card' se preferir, só ajustar no CSS

    projectCard.innerHTML = `
      <a href="${proj.link}" target="_blank" rel="noopener noreferrer" title="${proj.title}">
        <img src="${proj.image}" alt="${proj.title}" />
      </a>
      <h3>${proj.title}</h3>
      <p>${proj.description}</p>
    `;

    projectsList.appendChild(projectCard);
  });
}

// Mostrar/ocultar menu mobile
const menuToggle = document.getElementById('menu-toggle');
const navMobile = document.getElementById('nav-mobile');

menuToggle.addEventListener('click', () => {
  navMobile.classList.toggle('active');
});

// Ajustar altura do hero no mobile
function adjustHeroHeight() {
  const hero = document.querySelector('.hero');
  if (window.innerWidth <= 768) {
    hero.style.minHeight = 'auto';
  } else {
    hero.style.minHeight = '100vh';
  }
}
// Executar no carregamento e no redimensionamento
window.addEventListener('load', adjustHeroHeight);
window.addEventListener('resize', adjustHeroHeight);