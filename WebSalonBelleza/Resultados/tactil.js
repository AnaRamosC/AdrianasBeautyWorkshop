document.querySelectorAll('.conjunto>div>div').forEach(function (element) {
    element.addEventListener('touchstart', function () {
      this.style.transform = 'scale(1.8)';
    });
  
    element.addEventListener('touchend', function () {
      this.style.transform = 'scale(1)';
    });
  });


  document.querySelectorAll('.conjunto>div>div h3').forEach(function (element) {
    element.addEventListener('touchstart', function () {
      this.style.transform = 'scale(1.8)';
    });
  
    element.addEventListener('touchend', function () {
      this.style.transform = 'scale(1)';
    });
  });