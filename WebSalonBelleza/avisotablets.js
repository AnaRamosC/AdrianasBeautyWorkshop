window.onload = function() {
    var esTablet = (window.innerWidth > 768 && window.innerWidth < 2000); // Modifica estos valores según tus necesidades

    if (esTablet && (navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/tablet/i))) {
        alert("Si estás visitándonos desde un iPad o tablet, te aconsejamos que pongas tu dispositivo en posición horizontal para una mejor experiencia.");
    }
}
