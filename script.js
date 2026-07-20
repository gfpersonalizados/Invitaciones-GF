// =========================
// INVITACIONES GF PREMIUM
// =========================

// Cargar datos desde config.js
document.getElementById("novios").textContent = CONFIG.novios;
document.getElementById("fechaEvento").textContent = "📅 " + CONFIG.fecha;
document.getElementById("ceremonia").textContent = "⛪ " + CONFIG.ceremonia;
document.getElementById("recepcion").textContent = "🎉 " + CONFIG.recepcion;

// Botón WhatsApp
document.getElementById("btnWhatsApp").href =
"https://wa.me/" + CONFIG.whatsapp +
"?text=Hola,%20confirmo%20mi%20asistencia.";

// Botón Google Maps
document.getElementById("btnMapa").href = CONFIG.maps;

// Fotos
document.getElementById("foto1").src = CONFIG.fotos[0];
document.getElementById("foto2").src = CONFIG.fotos[1];
document.getElementById("foto3").src = CONFIG.fotos[2];

// Video
document.querySelector("#videoInvitacion source").src = CONFIG.video;
document.getElementById("videoInvitacion").load();


//======================
// Cuenta regresiva
//======================

const fechaEvento = new Date(CONFIG.fecha).getTime();

setInterval(function(){

    const ahora = new Date().getTime();

    const diferencia = fechaEvento - ahora;

    if(diferencia <= 0){

        document.getElementById("contador").innerHTML =
        "💍 ¡Hoy es el gran día!";

        return;

    }

    const dias = Math.floor(diferencia/(1000*60*60*24));

    const horas = Math.floor(
    (diferencia%(1000*60*60*24))/(1000*60*60));

    const minutos = Math.floor(
    (diferencia%(1000*60*60))/(1000*60));

    const segundos = Math.floor(
    (diferencia%(1000*60))/1000);

    document.getElementById("contador").innerHTML =
    dias+" días "+
    horas+" h "+
    minutos+" min "+
    segundos+" s";

},1000);


//======================
// Abrir invitación
//======================

function abrirInvitacion(){

    document.querySelector(".hero").style.display="none";

    const seccion=document.getElementById("video");

    seccion.style.display="block";

    const video=document.getElementById("videoInvitacion");

    video.play();

    video.scrollIntoView({
        behavior:"smooth"
    });

}


//======================
// Cuando termina el video
//======================

document.getElementById("videoInvitacion")
.addEventListener("ended",function(){

    document.querySelector(".card")
    .scrollIntoView({
        behavior:"smooth"
    });

});
