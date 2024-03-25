// Obtener el elemento de audio
var audioPlayer = document.getElementById("audioPlayer");

// Función para cambiar la fuente del audio y reproducirlo
function cambiarAudio(src) {
  audioPlayer.src = src; // Cambiar la fuente del audio
  audioPlayer.play(); // Reproducir el audio
}

// Reproducir el audio después de un retraso de 1 segundo cuando la página se cargue completamente
window.onload = function() {
  setTimeout(function() {
    cambiarAudio("musica.mp3");
  }, 1000); // Esperar 1 segundo (1000 milisegundos) antes de reproducir el audio
};
