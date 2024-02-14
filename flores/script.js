let player;

// Obtener el elemento de audio
var audioPlayer = document.getElementById("audioPlayer2");

// Función para cambiar la fuente del audio y reproducirlo
function cambiarAudio(src) {
  audioPlayer.src = src; // Cambiar la fuente del audio
  audioPlayer.play(); // Reproducir el audio
}
onload = () => {
  document.body.classList.remove("container");
  cambiarAudio("floresAmarillas.mp3");
};