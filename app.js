// Mapeo de rutas hacia la ubicación de cada archivo HTML
const routes = {
  inicio: 'paginas/inicio.html',
  pizzas: 'paginas/pizzas.html',
  especiales: 'paginas/especiales.html',
  bebidas: 'paginas/bebidas.html'
};

// Función principal para cargar la página
async function loadPage() {
  const container = document.getElementById('app');
  // Obtiene la ruta del fragmento URL (#) o 'inicio' por defecto
  const route = window.location.hash.slice(1) || 'inicio';
  const filePath = routes[route];

  if (!filePath) {
    container.innerHTML = '<h2>404 - Página no encontrada</h2>';
    return;
  }

  try {
    // Hace una petición para traer el contenido del archivo HTML
    const response = await fetch(filePath);
    
    if (!response.ok) throw new Error('Error al cargar la vista');
    
    const html = await response.text();
    container.innerHTML = html; // Inserta el HTML cargado
  } catch (error) {
    container.innerHTML = '<h2>Error al cargar el contenido. Por favor intenta de nuevo.</h2>';
    console.error(error);
  }

  // Resalta el enlace activo en la navegación
  document.querySelectorAll('nav a').forEach(link => {
    if (link.dataset.route === route) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}

// Eventos para detectar cambios en la navegación
window.addEventListener('hashchange', loadPage);
window.addEventListener('DOMContentLoaded', loadPage);

// Manejo de clics en los botones de navegación
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const route = e.target.dataset.route;
    window.location.hash = route;
  });
});