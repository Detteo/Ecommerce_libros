// Menú móvil responsivo
document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menuToggle');
    const navbar = document.querySelector('.navbar');

    if (menuToggle && navbar) {
        menuToggle.addEventListener('click', () => {
            navbar.classList.toggle('active');
        });
    }
});

// Agregar libro al carrito simulado con localStorage
function agregarAlCarrito(idLibro) {
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    carrito.push(idLibro);
    localStorage.setItem('carrito', JSON.stringify(carrito));
    alert('¡Libro agregado al carrito correctamente!');
}

// Función generadora de tarjetas de libro (reemplazo de libro-card.php)
function crearCardLibro(libro, rutaImagenes = './assets/img/') {
    const precioFormateado = new Intl.NumberFormat('es-CO').format(libro.precio);
    const descripcionCorta = libro.descripcion.substring(0, 90) + '...';

    return `
        <div class="book-card">
            <div class="book-img-wrap">
                <img src="${rutaImagenes}${libro.imagen}" 
                     alt="${libro.titulo}" 
                     onerror="this.src='${rutaImagenes}placeholder.svg'">
                <span class="genre-tag">${libro.genero}</span>
            </div>
            <div class="book-info">
                <h3>${libro.titulo}</h3>
                <p class="author">
                    <i class="fa-solid fa-pen-nib"></i> ${libro.autor}
                </p>
                <p class="description">${descripcionCorta}</p>
                <div class="book-footer">
                    <span class="price">$${precioFormateado}</span>
                    <button type="button" class="btn-cart" onclick="agregarAlCarrito(${libro.id})">
                        <i class="fa-solid fa-cart-plus"></i> Agregar
                    </button>
                </div>
            </div>
        </div>
    `;
}