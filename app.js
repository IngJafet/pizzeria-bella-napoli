// 1. Datos y vistas para cada ruta (Menús de la Pizzería)
const routes = {
  inicio: `
    <section class="hero">
      <h1>¡Bienvenidos a Pizzería Bella Napoli!</h1>
      <p>Masa madre, ingredientes frescos y horno de leña.</p>
      <p>Selecciona una opción del menú para explorar nuestras especialidades.</p>
    </section>
  `,

  pizzas: `
    <h2>🍕 Pizzas Tradicionales</h2>
    <div class="grid">
      <div class="card">
        <div>
          <h3>Margherita</h3>
          <p>Salsa de tomate napolitano, mozzarella fresca y albahaca.</p>
        </div>
        <div class="price">$10.99</div>
      </div>
      <div class="card">
        <div>
          <h3>Pepperoni Classic</h3>
          <p>Salsa de tomate, queso mozzarella y pepperoni crujiente.</p>
        </div>
        <div class="price">$12.50</div>
      </div>
      <div class="card">
        <div>
          <h3>Cuatro Quesos</h3>
          <p>Mozzarella, gorgonzola, parmesano y queso provolone.</p>
        </div>
        <div class="price">$13.99</div>
      </div>
    </div>
  `,

  especiales: `
    <h2>⭐ Especiales de la Casa</h2>
    <div class="grid">
      <div class="card">
        <div>
          <h3>Prosciutto e Funghi</h3>
          <p>Salsa de tomate, mozzarella, jamón prosciutto y champiñones frescos.</p>
        </div>
        <div class="price">$15.50</div>
      </div>
      <div class="card">
        <div>
          <h3>BBQ Chicken Special</h3>
          <p>Pollo a la parrilla, salsa BBQ, cebolla morada y tocino.</p>
        </div>
        <div class="price">$14.99</div>
      </div>
      <div class="card">
        <div>
          <h3>Veggie Supreme</h3>
          <p>Pimientos, pimientos asados, aceitunas negras, cebolla y espinacas.</p>
        </div>
        <div class="price">$13.50</div>
      </div>
    </div>
  `,

  bebidas: `
    <h2>🥤 Bebidas y Postres</h2>
    <div class="grid">
      <div class="card">
        <div>
          <h3>Tiramisú Artesanal</h3>
          <p>Receta tradicional italiana con café espresso y mascarpone.</p>
        </div>
        <div class="price">$5.50</div>
      </div>
      <div class="card">
        <div>
          <h3>Cannoli Siciliano</h3>
          <p>Masa crujiente rellena de crema dulce de ricotta y chispas de chocolate.</p>
        </div>
        <div class="price">$4.50</div>
      </div>
      <div class="card">
        <div>
          <h3>Refrescos / Agua Italiana</h3>
          <p>Elección entre San Pellegrino, Coca-Cola o Agua Mineral.</p>
        </div>
        <div class="price">$2.50</div>
      </div>
    </div>
  `
};

// 2. Función del Ruteador
function router() {
  const container = document.getElementById('app');
  // Obtiene la ruta de la URL (después del #) o usa 'inicio' por defecto
  const path = window.location.hash.slice(1) || 'inicio';

  // Carga la vista correspondiente o una por defecto
  const view = routes[path] || '<h2>404 - Menú no encontrado</h2>';
  container.innerHTML = view;

  // Actualizar enlace activo en la navegación
  document.querySelectorAll('nav a').forEach(link => {
    if (link.dataset.route === path) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}

// 3. Event Listeners para gestionar el enrutamiento
// Detecta cuando la URL cambia (ej. al presionar un botón del menú)
window.addEventListener('hashchange', router);

// Carga la ruta inicial al cargar la página
window.addEventListener('load', router);

// Asigna eventos a los enlaces de navegación
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const route = e.target.dataset.route;
    window.location.hash = route; // Cambia el # en la URL
  });
});