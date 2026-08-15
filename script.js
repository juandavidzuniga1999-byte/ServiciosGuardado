const burger = document.getElementById('burgerBtn');
const navLinks = document.getElementById('navLinks');

burger.addEventListener('click', () => {

    const isOpen = navLinks.classList.toggle('open');

    burger.setAttribute('aria-expanded', isOpen);
});

navLinks.querySelectorAll('a').forEach(link => {

    link.addEventListener('click', () => {

        navLinks.classList.remove('open');

        burger.setAttribute('aria-expanded', 'false');
    });

});

// funcion para enfocar foto en galeria
function abrirLightbox(img) {
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  lightboxImg.src = img.src;
  lightbox.classList.add('activo');
}

function cerrarLightbox() {
  document.getElementById('lightbox').classList.remove('activo');
}

// Opcional: cerrar si le dan clic fuera de la imagen (en el fondo oscuro)
document.getElementById('lightbox').addEventListener('click', (e) => {
  if (e.target.id === 'lightbox') {
    cerrarLightbox();
  }
});