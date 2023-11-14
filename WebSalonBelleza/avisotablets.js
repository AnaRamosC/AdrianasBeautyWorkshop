window.onload = function() {
    var esTablet = (window.innerWidth > 768 && window.innerWidth < 1024); // Modifica estos valores según tus necesidades

    if (esTablet && (navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/tablet/i))) {
        alert("Si estás visitándonos desde un iPad o tablet, por favor pon tu dispositivo en posición horizontal para una mejor experiencia.");
    }
}


window.addEventListener('load', function() {
    function mostrarAlerta() {
        alert("Si estás visitándonos desde un iPad o tablet, por favor pon tu dispositivo en posición horizontal para una mejor experiencia.");
    }

    function verificarOrientacion() {
        var esTablet = (window.innerWidth > 768 && window.innerWidth < 1024);

        if (esTablet && (navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/tablet/i))) {
            mostrarAlerta();
        }


    }
    
})
