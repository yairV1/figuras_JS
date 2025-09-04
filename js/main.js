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
// desde aca empieso con lo que son las partes del texto de la segunda casilla
const mainTitle = document.getElementById("mainTitle");

function titulo(){
    const mainTitle = document.getElementById("mainTitle");
    const nuevoTitulo = prompt("Escribe el nuevo título:");

  if (nuevoTitulo) { 
    mainTitle.textContent = nuevoTitulo; 
  }
}
function parrfo(){
    const parafo = document.getElementById("mainParagraph");
    const nuevoParafo = prompt("Escribe el nuevo parrafo:");

  if (nuevoParafo) { 
    parafo.textContent = nuevoParafo; 
  }
}
function agregar(){
    const parafoNue = document.getElementById("extraParagraphs");
    const parafo = prompt("Agrega el nuevo parrafo:");

  if (parafo) { 
    parafoNue.textContent = parafo; 
  }
}
function eliminar() {
  const elimina = document.getElementById("extraParagraphs");
  if (elimina.lastChild) {
    elimina.removeChild(elimina.lastChild);
  } else {
    alert("No hay párrafos para eliminar.");
  }
}
// desde aca empiezo con los atributos 
function color(){
    const colore = document.getElementById("figure");
    const color = prompt("Agrega el nuevo Color:");

  if (color) { 
    colore.textContent = color; 
    colore.style.backgroundColor= color;
  }
}
function elejir(){
    
    const opcion = prompt("Escribe una figura: circulo, estrella");

    switch (opcion) {
        case "circulo":
                figure.style.borderRadius = "50%";
                figure.style.clipPath ="none";
            break;
        
        case "estrella":

            figure.style.clipPath =
            "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)";
            break;

        case "cuadrado":
            figure.style.borderRadius = "0%"
            figure.style.clipPath ="none";
            break;

        default:
            break;

    }

}
// Lista de imágenes
let imagenes = [
  "img/imagen.jpg",
  "img/imagen2.jpg",
  "img/imagen3.jpg"
];

let imgPrimera = 0; // índice de la imagen actual

// Referencia a la imagen
const mainImage = document.getElementById("mainImage");

// Cambiar a la siguiente imagen
function sigiente() {
  imgPrimera++;
  if (imgPrimera >= imagenes.length) {
    imgPrimera = 0;
  }
  mainImage.src = imagenes[imgPrimera];
}

// Cambiar a la anterior imagen
function anterior() {
  imgPrimera--;
  if (imgPrimera < 0) {
    imgPrimera = imagenes.length - 1;
  }
  mainImage.src = imagenes[imgPrimera];
}



function mostrar() {
    const mainImage = document.getElementById("mainImage");

  if (mainImage.style.display === "none") {
    mainImage.style.display = "block";
  } else {
    mainImage.style.display = "none";
  }
}

function atributo() {
  const atributo = prompt("Escribe un nuevo texto para el ALT de la imagen:");
  if (atributo) {
    document.getElementById("mainImage").setAttribute("alt", atributo);
  }
}

function enlace() {
  const nuevo = prompt("Escribe la nueva URL para el enlace:");
  if (nuevo) {
    document.getElementById("mainLink").setAttribute("href", nuevo);
  }
}

function pestana() {
  const enlace = document.getElementById("mainLink");
  enlace.setAttribute("href", "https://github.com/yairV1");
  enlace.setAttribute("target", "_blank");
}


function desabilitar() {
  document.getElementById("mainLink").removeAttribute("href");
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
    // desde aca son los otros
    document.getElementById("btnChangeTitle").addEventListener('click', titulo)
    document.getElementById("btnChangeParagraph").addEventListener('click', parrfo)

    document.getElementById("btnAddParagraph").addEventListener('click', agregar)
    document.getElementById("btnRemoveParagraph").addEventListener('click', eliminar)

    document.getElementById("btnHexColor").addEventListener('click', color)
    document.getElementById("btnChooseFigure").addEventListener('click', elejir)
    document.getElementById("btnChangeImageNext").addEventListener('click', sigiente)
    document.getElementById("btnChangeImagePrev").addEventListener('click', anterior)

    document.getElementById("btnToggleImage").addEventListener('click', mostrar)
    document.getElementById("btnChangeAlt").addEventListener('click', atributo)
    document.getElementById("btnChangeLink").addEventListener('click', enlace)
    document.getElementById("btnOpenLink").addEventListener('click', pestana)
    document.getElementById("btnDisableLink").addEventListener('click', desabilitar)
})
