const fecha=new Date('2026-12-20T16:00:00').getTime();
setInterval(()=>{
const ahora=Date.now();
const d=fecha-ahora;
if(d<0){document.getElementById('contador').innerHTML='¡Hoy es el gran día!';return;}
const dias=Math.floor(d/86400000);
const horas=Math.floor((d%86400000)/3600000);
const min=Math.floor((d%3600000)/60000);
const seg=Math.floor((d%60000)/1000);
document.getElementById('contador').innerHTML=`${dias} días ${horas}h ${min}m ${seg}s`;
},1000);
