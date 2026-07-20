/*==============================
      GF PERSONALIZADOS
 Invitaciones Premium v1.0
==============================*/

@import url('https://fonts.googleapis.com/css2?family=Great+Vibes&family=Montserrat:wght@300;400;600&display=swap');

*{
margin:0;
padding:0;
box-sizing:border-box;
}

html{
scroll-behavior:smooth;
}

body{

font-family:'Montserrat',sans-serif;

background:
linear-gradient(180deg,#fffefb,#fdf8ee,#ffffff);

overflow-x:hidden;

color:#444;

}


/*==========================
PORTADA
==========================*/

.hero{

height:100vh;

display:flex;

justify-content:center;

align-items:center;

text-align:center;

position:relative;

overflow:hidden;

background:

linear-gradient(rgba(0,0,0,.45),
rgba(0,0,0,.45)),

url("portada.jpg");

background-size:cover;

background-position:center;

}


/* Fondo brillante */

.hero::before{

content:"";

position:absolute;

width:180%;

height:180%;

background:

radial-gradient(circle,
rgba(255,255,255,.15),
transparent 70%);

animation:girar 30s linear infinite;

}


/* Destellos */

.hero::after{

content:"";

position:absolute;

width:100%;

height:100%;

background-image:

radial-gradient(#ffffff 1px,transparent 1px);

background-size:35px 35px;

opacity:.25;

animation:brillo 6s infinite;

}


.overlay{

position:relative;

z-index:10;

animation:subir 2s;

}


.hero h1{

font-family:'Great Vibes',cursive;

font-size:80px;

color:white;

text-shadow:

0 0 10px black,

0 0 25px rgba(255,215,0,.7);

margin-bottom:15px;

}


.hero p{

font-size:28px;

letter-spacing:3px;

color:white;

margin-bottom:40px;

}


.btn{

display:inline-block;

padding:18px 45px;

border-radius:50px;

background:linear-gradient(90deg,#d4af37,#ffd700,#d4af37);

background-size:300%;

border:none;

cursor:pointer;

font-size:20px;

color:white;

font-weight:bold;

transition:.4s;

animation:boton 5s linear infinite;

box-shadow:

0 0 20px rgba(255,215,0,.5);

}


.btn:hover{

transform:scale(1.08);

}


/*==========================
VIDEO
==========================*/

#video{

padding:50px;

text-align:center;

background:white;

}


video{

width:95%;

max-width:430px;

border-radius:25px;

box-shadow:

0 15px 35px rgba(0,0,0,.35);

}


/*==========================
TARJETA
==========================*/

.card{

width:92%;

max-width:760px;

margin:50px auto;

background:white;

padding:40px;

border-radius:25px;

box-shadow:

0 10px 40px rgba(0,0,0,.12);

}


.card h2{

font-size:34px;

color:#c49a2c;

margin-bottom:25px;

}


#contador{

font-size:34px;

font-weight:bold;

color:#d4af37;

margin:30px 0;

}


.card p{

font-size:22px;

margin:18px;

}


/*==========================
BOTONES
==========================*/

#btnMapa,
#btnWhatsApp{

display:inline-block;

margin:12px;

}


/*==========================
GALERIA
==========================*/

.galeria{

display:flex;

justify-content:center;

gap:20px;

flex-wrap:wrap;

padding:60px 20px;

}


.galeria img{

width:250px;

height:250px;

border-radius:20px;

object-fit:cover;

transition:.5s;

box-shadow:

0 10px 25px rgba(0,0,0,.2);

}


.galeria img:hover{

transform:scale(1.06);

}


/*==========================
FOOTER
==========================*/

footer{

margin-top:60px;

padding:50px;

text-align:center;

background:#222;

color:white;

}


footer img{

width:110px;

margin-bottom:15px;

}


/*==========================
ANIMACIONES
==========================*/

@keyframes subir{

from{

opacity:0;

transform:translateY(80px);

}

to{

opacity:1;

transform:translateY(0);

}

}

@keyframes girar{

0%{

transform:rotate(0deg);

}

100%{

transform:rotate(360deg);

}

}

@keyframes brillo{

0%,100%{

opacity:.15;

}

50%{

opacity:.35;

}

}

@keyframes boton{

0%{

background-position:0%;

}

100%{

background-position:300%;

}

}


/*==========================
CELULAR
==========================*/

@media(max-width:768px){

.hero h1{

font-size:56px;

}

.hero p{

font-size:22px;

}

.btn{

font-size:18px;

padding:15px 30px;

}

.card h2{

font-size:28px;

}

.card p{

font-size:18px;

}

#contador{

font-size:28px;

}

.galeria img{

width:95%;

height:auto;

}

}
