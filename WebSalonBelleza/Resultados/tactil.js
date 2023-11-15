// Para dispositivos táctiles (iOS y Android)
document.querySelectorAll('.conjunto>div>div').forEach(function (element) {
    // Variable para rastrear el estado del toque
    let isTouchActive = false;
  
    // Función para aplicar el efecto de escala
    function applyScaleEffect() {
      element.style.transform = 'scale(1.8)';
    }
  
    // Función para restaurar el tamaño original
    function resetScaleEffect() {
      element.style.transform = 'scale(1)';
    }
  
    // Evento de inicio del toque
    element.addEventListener('touchstart', function () {
      isTouchActive = true;
      applyScaleEffect();
    });
  
    // Evento de fin del toque
    element.addEventListener('touchend', function () {
      if (isTouchActive) {
        isTouchActive = false;
        resetScaleEffect();
      }
    });
  
    // Evento de cancelación del toque (puede ocurrir en ciertos escenarios)
    element.addEventListener('touchcancel', function () {
      if (isTouchActive) {
        isTouchActive = false;
        resetScaleEffect();
      }
    });
  });


  // Para dispositivos táctiles (iOS y Android)
document.querySelectorAll('.conjunto>div>div h3').forEach(function (element) {
    // Variable para rastrear el estado del toque
    let isTouchActive = false;
  
    // Función para aplicar el efecto de escala
    function applyScaleEffect() {
      element.style.transform = 'scale(1.8)';
    }
  
    // Función para restaurar el tamaño original
    function resetScaleEffect() {
      element.style.transform = 'scale(1)';
    }
  
    // Evento de inicio del toque
    element.addEventListener('touchstart', function () {
      isTouchActive = true;
      applyScaleEffect();
    });
  
    // Evento de fin del toque
    element.addEventListener('touchend', function () {
      if (isTouchActive) {
        isTouchActive = false;
        resetScaleEffect();
      }
    });
  
    // Evento de cancelación del toque (puede ocurrir en ciertos escenarios)
    element.addEventListener('touchcancel', function () {
      if (isTouchActive) {
        isTouchActive = false;
        resetScaleEffect();
      }
    });
  });