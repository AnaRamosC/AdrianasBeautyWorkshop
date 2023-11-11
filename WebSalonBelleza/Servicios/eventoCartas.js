// var cartas = document.querySelectorAll('.servicio');
// var cartaActual = 0;
// var botonMostrarSiguiente = document.getElementById('mostrarSiguiente');

// function actualizarTextoBoton() {
//   const siguienteCarta = (cartaActual + 1) % cartas.length;
//   const nombreSiguienteCarta = cartas[siguienteCarta].classList[1];
//   botonMostrarSiguiente.textContent = `Mostrar ${nombreSiguienteCarta}`;
// }

// actualizarTextoBoton();

// // Muestra la primera carta al cargar la página
// cartas[cartaActual].style.display = 'block';

// botonMostrarSiguiente.addEventListener('click', function(evento) {
//   cartas[cartaActual].style.display = 'none'; // Oculta la carta actual
  
//   cartaActual = (cartaActual + 1) % cartas.length; // Avanza al siguiente o vuelve al principio
  
//   cartas[cartaActual].style.display = 'block'; // Muestra la siguiente carta

//   actualizarTextoBoton(); // Actualiza el texto del botón para la próxima carta
//   window.scrollTo(0, 0);
// });

const cartas = document.querySelectorAll('.servicio');
let cartaActual = 0;
const botonesCambio = document.querySelectorAll('.boton-cambio');

function actualizarTextoBotones() {
  const siguienteCarta = (cartaActual + 1) % cartas.length;
  const nombreSiguienteCarta = cartas[siguienteCarta].classList[1];
  botonesCambio.forEach((boton) => {
    boton.textContent = `Carta ${nombreSiguienteCarta}`;
  });
}

actualizarTextoBotones();

// Muestra la primera carta al cargar la página
cartas[cartaActual].style.display = 'block';

botonesCambio.forEach((boton) => {
  boton.addEventListener('click', () => {
    cartas[cartaActual].style.display = 'none'; // Oculta la carta actual
    
    cartaActual = (cartaActual + 1) % cartas.length; // Avanza al siguiente o vuelve al principio
    
    // Muestra la siguiente carta
    cartas[cartaActual].style.display = 'block';
    
    actualizarTextoBotones(); // Actualiza el texto en ambos botones
    window.scrollTo(0, 280);
    // document.documentElement.style.scrollBehavior = "smooth";
  });
});





