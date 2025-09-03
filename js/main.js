// Referencias
const figure = document.getElementById("figure");


// Funciones
function circulo() {
  figure.style.borderRadius = "50%";  
   figure.style.background = "red";    
}

// Eventos
btnCircle.onclick = circulo;
document.addEventListener('DOMContentLoaded', function(){
    document.getElementById("btnCircle").addEventListener('click', circulo)
    

})
