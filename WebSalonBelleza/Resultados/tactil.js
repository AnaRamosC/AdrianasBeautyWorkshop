// Para dispositivos táctiles (iOS y Android)
document.querySelectorAll('.conjunto>div>div').forEach(function (element) {
    let touchStart;
  
    // Evento de inicio del toque
    element.addEventListener('touchstart', function (event) {
      touchStart = event.touches[0].clientX;
      applyScaleEffect();
    });
  
    // Evento de fin del toque
    element.addEventListener('touchend', function () {
      resetScaleEffect();
    });
  
    // Evento de cancelación del toque (puede ocurrir en ciertos escenarios)
    element.addEventListener('touchcancel', function () {
      resetScaleEffect();
    });
  
    // Función para aplicar el efecto de escala
    function applyScaleEffect() {
      element.style.transform = 'scale(1.8)';
    }
  
    // Función para restaurar el tamaño original
    function resetScaleEffect() {
      element.style.transform = 'scale(1)';
    }
  });


  // Para dispositivos táctiles (iOS y Android)
document.querySelectorAll('.conjunto>div>div h3').forEach(function (element) {
    let touchStart;
  
    // Evento de inicio del toque
    element.addEventListener('touchstart', function (event) {
      touchStart = event.touches[0].clientX;
      applyScaleEffect();
    });
  
    // Evento de fin del toque
    element.addEventListener('touchend', function () {
      resetScaleEffect();
    });
  
    // Evento de cancelación del toque (puede ocurrir en ciertos escenarios)
    element.addEventListener('touchcancel', function () {
      resetScaleEffect();
    });
  
    // Función para aplicar el efecto de escala
    function applyScaleEffect() {
      element.style.transform = 'scale(1.8)';
    }
  
    // Función para restaurar el tamaño original
    function resetScaleEffect() {
      element.style.transform = 'scale(1)';
    }
  });