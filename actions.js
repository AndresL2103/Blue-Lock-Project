const temas = [
    "Chigiri 🐐",
    "La Pantera Roja de Blue Lock",
    "El velocista",
    "Velocidad"
];

let temaActual = 0;

function cambiarTema() {
    //const parrafos = document.querySelectorAll('p');
    const elParrafo = document.querySelector('.otro-parrafo');
    temaActual = (temaActual + 1) % temas.length;
    elParrafo.innerHTML = temas[temaActual];
}