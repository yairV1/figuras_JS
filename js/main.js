// Referencias
const figure = document.getElementById("figure");


// Funciones
function circulo() {
  figure.style.borderRadius = "50%";  
   figure.style.background = "red";    
}
function estrella() {
    figure.style.borderRadius = "0";
    figure.style.background= "purple"
    figure.style.clipPath =
    "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)";
}
function gif(){
    figure.style.backgroundImage = "url('img/patito.gif')";
    figure.style.backgroundSize = "cover"; 
    figure.style.backgroundPosition = "center";
}
function animacion(){
    figure.classList.add("giro");
    figure.style.background= "#ce7979ff"
}
function ariba(){
    figure.classList.add("ariba")
    figure.style.background= "#992525ff"
}
function abajo(){
    figure.classList.add("abajo")
    figure.style.background= "#407ab1ff"
}
function izquierda(){
    figure.classList.add("izquierda")
    figure.style.background= "#35dadaff"
}
function derecha(){
    figure.classList.add("derecha")
    figure.style.background= "#1cca56ff"
}



// Eventos
btnCircle.onclick = circulo;
document.addEventListener('DOMContentLoaded', function(){
    document.getElementById("btnCircle").addEventListener('click', circulo)
    document.getElementById("btnStar").addEventListener('click', estrella)
    document.getElementById("btnGif").addEventListener('click', gif)
    document.getElementById("btnAnim").addEventListener('click', animacion)
    document.getElementById("btnMoveUp").addEventListener('click', ariba)
    document.getElementById("btnMoveDown").addEventListener('click', abajo)
    document.getElementById("btnMoveLeft").addEventListener('click', izquierda)
    document.getElementById("btnMoveRight").addEventListener('click', derecha)
})
