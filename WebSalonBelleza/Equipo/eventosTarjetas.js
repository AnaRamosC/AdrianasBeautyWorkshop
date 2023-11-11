function rotateCard(button) {
    const contenedorTarjeta1 = button.parentElement.parentElement;
    contenedorTarjeta1.style.transform = 'rotateY(-180deg)';
  }


  // function rotateCard2(button) {
  //   button = document.querySelector(".botonRegreso");
  //   const contenedorTarjeta1 = button.parentElement.parentElement;
  //   contenedorTarjeta1.style.transform = 'rotateY(0deg)';
  // }


var botonRegreso = document.querySelector(".botonRegreso")
var divContenedor = document.querySelector(".tarjetaAdriana .contenedorTarjeta1")


  botonRegreso.addEventListener("click",function(evento){
    evento.preventDefault();
    divContenedor.style.transform = 'rotateY(0deg)';

  })


  
var botonRegreso2 = document.querySelector(".botonRegreso2")
var divContenedor2 = document.querySelector(".tarjetaLuka .contenedorTarjeta1")


  botonRegreso2.addEventListener("click",function(evento){
    evento.preventDefault();
    divContenedor2.style.transform = 'rotateY(0deg)';

  })