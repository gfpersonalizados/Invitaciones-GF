//========================================
// GF Personalizados
// Invitaciones Premium
//========================================

document.addEventListener("DOMContentLoaded", () => {

    // Nombres
    document.getElementById("novios").textContent =
        CONFIG.novio + " & " + CONFIG.novia;

    // Fecha
    document.getElementById("fechaEvento").innerHTML =
        "<strong>Fecha:</strong> " + CONFIG.fechaTexto;

    // Ceremonia
    document.getElementById("ceremonia").innerHTML =
        "<strong>Ceremonia:</strong><br>" +
        CONFIG.ceremonia;

    // Recepción
    document.getElementById("recepcion").innerHTML =
        "<strong>Recepción:</strong><br>" +
        CONFIG.recepcion;

    // Botones
    document.getElementById("btnMapa").href = CONFIG.mapa;

    document.getElementById("btnWhatsApp").href =
        "https://wa.me/" +
        CONFIG.telefono +
        "?text=" +
        encodeURIComponent(CONFIG.mensajeWhatsapp);

    iniciarContador();

});


//========================================
// Abrir Invitación
//========================================

function abrirInvitacion(){

    const video=document.getElementById("video");

    video.style.display="block";

    video.scrollIntoView({
        behavior:"smooth"
    });

    document
        .getElementById("videoInvitacion")
        .play();

}



//========================================
// Cuenta regresiva
//========================================

function iniciarContador(){

    function actualizar(){

        const destino=new Date(CONFIG.fechaCuenta);

        const ahora=new Date();

        const diferencia=destino-ahora;

        if(diferencia<=0){

            document.getElementById("contador").innerHTML=
            "¡Llegó el gran día! ❤️";

            return;

        }

        const dias=Math.floor(diferencia/(1000*60*60*24));

        const horas=Math.floor((diferencia%(1000*60*60*24))/(1000*60*60));

        const minutos=Math.floor((diferencia%(1000*60*60))/(1000*60));

        const segundos=Math.floor((diferencia%(1000*60))/1000);

        document.getElementById("contador").innerHTML=

        dias+" días "

        +horas+" h "

        +minutos+" min "

        +segundos+" seg";

    }

    actualizar();

    setInterval(actualizar,1000);

}



//========================================
// Corazones flotando
//========================================

setInterval(()=>{

    let corazon=document.createElement("div");

    const corazones=["❤️","🤍"];

    corazon.innerHTML=
    corazones[Math.floor(Math.random()*corazones.length)];

    corazon.style.position="fixed";

    corazon.style.left=Math.random()*100+"vw";

    corazon.style.bottom="-30px";

    corazon.style.fontSize=(18+Math.random()*28)+"px";

    corazon.style.opacity=.85;

    corazon.style.pointerEvents="none";

    corazon.style.zIndex="999";

    corazon.style.transition="transform 6s ease-out, opacity 6s ease-out";

    corazon.style.filter="drop-shadow(0 0 8px rgba(255,0,80,.5))";

    document.body.appendChild(corazon);

    setTimeout(()=>{

    corazon.style.transform="translateY(-120vh)";

    corazon.style.opacity="0";

},50);

    setTimeout(()=>{

        corazon.remove();

    },5500);

},350);



//========================================
// Galería automática
//========================================

const fotos=[

"foto1.jpg",

"foto2.jpg",

"foto3.jpg"

];

let indice=0;

setInterval(()=>{

    indice++;

    if(indice>=fotos.length){

        indice=0;

    }

    document.getElementById("foto1").src=fotos[indice];

    document.getElementById("foto2").src=fotos[(indice+1)%3];

    document.getElementById("foto3").src=fotos[(indice+2)%3];

},4000);
