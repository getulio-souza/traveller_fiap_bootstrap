const encuentrame = () => {
    //todo o processo de localização

    const success = (position) => {
        const divCoordenadas = document.getElementById("coordenadas");
        const divMapa = document.getElementById("mapa");
        console.log(position);
        const { latitude , longitude } = position.coords;
        console.log(latitude, longitude);

        divCoordenadas.innerHTML = `lat: ${latitude}, lng: ${longitude}`;
    
        const mapa = new Image();
        mapa.src = `https://www.mapquestapi.com/staticmap/v5/map?key=xzaNvERnuyVMzk0l3PvjLp3M6x797aet&locations=${latitude},${longitude}&size=400,300`;
        divMapa.appendChild(mapa);
    };

    const errorPosicion = (error) => {
        const divCoordenadas = document.getElementById("coordenadas");
        divCoordenadas.innerHTML = `Erro ao obter localização:<br> Error ${error.code}: ${error.message}`;
    };

    navigator.geolocation.getCurrentPosition( success , errorPosicion );
};

const verificarGeo = () => {
    if(!navigator.geolocation){
    //não suporta localização
    const divCoordenadas = document.getElementById("coordenadas");
    divCoordenadas.innerHTML ="<p>localização não suportada pelo navegador</>";
    return;
    }
 //Se suportar, chamar a localização
  encuentrame();
};

verificarGeo();


$(document).ready(function() {
    $(".dropdown-toggle").dropdown();
}); 