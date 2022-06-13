// Codigo para rotar los iconos de las redes sociales al pasar el mouse encima de cada una

function pasar(e) {
    e.style.transform = "rotate(180deg)";
    e.style.transition = "all 2s";
}

function salir(e) {
    e.style.transform = "rotate(0deg)";
    e.style.transition = "all 2s";
}

function pasarperfil(e) {
    e.style.transform = "rotateY(180deg)";
    e.style.transition = "all 2s";
}

function salirperfil(e) {
    e.style.transform = "rotateY(0deg)";
    e.style.transition = "all 2s";
}