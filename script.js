// ==============================
// CARGAR DATOS DEL CONFIG
// ==============================

document.getElementById("novios").innerHTML =
`${CONFIG.novio} & ${CONFIG.novia}`;

document.getElementById("fechaBoda").innerHTML =
CONFIG.fechaTexto;

document.getElementById("historia").innerHTML =
CONFIG.historia;

document.getElementById("iglesiaNombre").innerHTML =
CONFIG.ceremonia.nombre;

document.getElementById("iglesiaDireccion").innerHTML =
CONFIG.ceremonia.direccion;

document.getElementById("mapaIglesia").href =
CONFIG.ceremonia.mapa;

document.getElementById("salonNombre").innerHTML =
CONFIG.recepcion.nombre;

document.getElementById("salonDireccion").innerHTML =
CONFIG.recepcion.direccion;

document.getElementById("mapaSalon").href =
CONFIG.recepcion.mapa;

document.getElementById("whatsapp").href =
CONFIG.whatsapp;


// ==============================
// VIDEO
// ==============================

document.getElementById("videoContainer").innerHTML =
`
<iframe
width="100%"
height="450"
src="${CONFIG.video}"
frameborder="0"
allowfullscreen>
</iframe>
`;


// ==============================
// ABRIR INVITACIÓN
// ==============================

document
.getElementById("abrirInvitacion")
.onclick=function(){

document.querySelector(".hero").style.display="none";

document.getElementById("contenido").style.display="block";

window.scrollTo({
top:0,
behavior:"smooth"
});

}


// ==============================
// CONTADOR
// ==============================

function actualizarContador(){

const destino=new Date(CONFIG.fechaCuenta).getTime();

const ahora=new Date().getTime();

const diferencia=destino-ahora;

const dias=Math.floor(diferencia/(1000*60*60*24));

const horas=Math.floor(
(diferencia%(1000*60*60*24))
/
(1000*60*60)
);

const minutos=Math.floor(
(diferencia%(1000*60*60))
/
(1000*60)
);

const segundos=Math.floor(
(diferencia%(1000*60))
/
1000
);

document.getElementById("countdown").innerHTML=

`
<div class="cajaTiempo">

<div class="numero">${dias}</div>

<div class="texto">Días</div>

</div>

<div class="cajaTiempo">

<div class="numero">${horas}</div>

<div class="texto">Horas</div>

</div>

<div class="cajaTiempo">

<div class="numero">${minutos}</div>

<div class="texto">Minutos</div>

</div>

<div class="cajaTiempo">

<div class="numero">${segundos}</div>

<div class="texto">Segundos</div>

</div>

`;

}

setInterval(actualizarContador,1000);

actualizarContador();


// ==============================
// GALERÍA
// ==============================

let foto=0;

document.getElementById("fotoGaleria").src=
CONFIG.galeria[0];

setInterval(()=>{

foto++;

if(foto>=CONFIG.galeria.length){

foto=0;

}

document.getElementById("fotoGaleria").src=
CONFIG.galeria[foto];

},3500);


// ==============================
// CORAZONES
// ==============================

function crearCorazon(){

const heart=document.createElement("span");

const colores=["❤️","🤍"];

heart.className="heart";

heart.innerHTML=
colores[Math.floor(Math.random()*2)];

heart.style.left=
Math.random()*100+"vw";

heart.style.fontSize=
(18+Math.random()*28)+"px";

heart.style.animationDuration=
(5+Math.random()*5)+"s";

heart.style.setProperty(
"--x",
(Math.random()*220-110)+"px"
);

document
.getElementById("hearts")
.appendChild(heart);

setTimeout(()=>{

heart.remove();

},10000);

}

setInterval(crearCorazon,300);
