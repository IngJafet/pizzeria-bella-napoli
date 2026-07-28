// Mapeo directo a los archivos HTML en la raíz del proyecto
const routes = {
  inicio: 'inicio.html',
  pizzas: 'pizzas.html',
  especiales: 'especiales.html',
  bebidas: 'bebidas.html'
};

async function loadPage() {
  const container = document.getElementById('app');
  const route = window.location.hash.slice(1) || 'inicio';
  const filePath = routes[route];

  if (!filePath) {
    container.innerHTML = '<h2>404 - Página no encontrada</h2>';
    return;
  }

  try {
    // Petición al archivo HTML que está al lado de index.html
    const response = await fetch(filePath);
    
    if (!response.ok) throw new Error('Error al cargar la vista');
    
    const html = await response.text();
    container.innerHTML = html;
  } catch (error) {
    container.innerHTML = '<h2>Error al cargar el contenido.</h2>';
    console.error(error);
  }

  // Activar enlace en el navegador
  document.querySelectorAll('nav a').forEach(link => {
    if (link.dataset.route === route) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}

window.addEventListener('hashchange', loadPage);
window.addEventListener('DOMContentLoaded', loadPage);

document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const route = e.target.dataset.route;
    window.location.hash = route;
  });
});