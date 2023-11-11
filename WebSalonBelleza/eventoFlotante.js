const scrollButton = document.getElementById('scrollButton');

// Agrega un evento de desplazamiento para mostrar u ocultar el botón
window.addEventListener('scroll', () => {
    if (window.scrollY > 150 ) { // Cambia este valor según tu preferencia
        scrollButton.style.display = 'block';
    } else {
        scrollButton.style.display = 'none';
    }
});