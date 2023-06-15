const frase = prompt("Escribe aqui");

contadorA(frase);

function contadorA(frase) {
    let contador = 0;

for (let i = 0; i < frase.length; i++) {
  if (frase[i] === "a") {
    contador++;
  }
}
document.querySelector('.contenido').innerHTML = `Numero de veces en salir letra "a": ${contador}`;}

