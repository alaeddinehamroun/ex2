const color = document.getElementById('color');
const size = document.getElementById('size');
const font = document.getElementById('font');

const log = document.getElementById('text');  

color.addEventListener('input', (e)=>{log.style.color =e.target.value });
size.addEventListener('input', (e)=>{log.style.fontSize=e.target.value+"px";});
font.addEventListener('input', (e)=>{log.style.fontFamily= e.target.value;});