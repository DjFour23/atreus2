let noButtonClickCount = 0; // Contador para el botón "No"
let noButtonState = 0; // Estado actual del botón "No"
let player;

// Obtener el elemento de audio
var audioPlayer = document.getElementById("audioPlayer");

// Función para cambiar la fuente del audio y reproducirlo
function cambiarAudio(src) {
  audioPlayer.src = src; // Cambiar la fuente del audio
  audioPlayer.play(); // Reproducir el audio
}
// Mostrar el gif inicial
document.getElementById("gifContainer").style.display = "block";

document.getElementById("siBtn").addEventListener("click", function () {
  // Ocultar el gif triste y mostrar el gif feliz
  document.getElementById("sadGifContainer").style.display = "none";
  document.getElementById("sadGifContainer1").style.display = "none";
  document.getElementById("sadGifContainer2").style.display = "none";
  document.getElementById("gifContainer").style.display = "none";
  document.getElementById("happyGifContainer").style.display = "block";
  document.getElementById("gotoFlower").style.display = "inline-block";

  // Ocultar los botones "Pregunta Sí" y "No "
  document.getElementById("question").style.display = "none";
  document.getElementById("siBtn").style.display = "none";
  document.body.classList.add("bg-green");
  document.getElementById("noBtn").style.display = "none";

  // Mostrar el mensaje específico
  document.getElementById("messageContainer").style.display = "block";
  document.getElementById("messageContainer").innerHTML =
    "¡Celebralo curramba! Te amoooo";

  // Mostrar otro gif después de 3 segundos
  setTimeout(function () {
    document.getElementById("happyGifContainer").style.display = "none";
    document.getElementById("happyGifContainer2").style.display = "block";
  }, 1000);

  setTimeout(function () {
    document.getElementById("happyGifContainer2").style.display = "none";
    document.getElementById("happyGifContainer3").style.display = "block";
  }, 2000);
  setTimeout(function () {
    document.getElementById("happyGifContainer3").style.display = "none";
    document.getElementById("happyGifContainer4").style.display = "block";
  }, 3000);
});

document.getElementById("noBtn").addEventListener("click", function () {
  switch (noButtonState) {
    case 0:
      // Primera vez haciendo clic en "No"
      document.getElementById("happyGifContainer").style.display = "none";
      document.getElementById("gifContainer").style.display = "none";
      document.getElementById("sadGifContainer").style.display = "block";
      cambiarAudio("0.mp3");

      //   document.getElementById("backgroundAudio").play(); // Reproducir la canción

      // Modificar el botón "No"
      document.getElementById("noBtn").innerHTML = "¿Pq?";
      document.getElementById("noBtn").style.backgroundColor = "#F1330A";

      document.getElementById("siBtn").style.fontSize = "40px";
      document.getElementById("siBtn").style.padding = "20px 40px";

      noButtonClickCount++;
      noButtonState++;
      break;

    case 1:
      // Segunda vez haciendo clic en "No"

      document.getElementById("noBtn").innerHTML = "¡¿Pq mi chelo?!";
      document.getElementById("noBtn").style.backgroundColor = "#F1330A";
      document.getElementById("sadGifContainer").style.display = "none";
      document.getElementById("sadGifContainer2").style.display = "block";
      cambiarAudio("1.mp3");
      //   document.getElementById("backgroundAudio").play(); // Reprodu
      // Hacer que el botón "Sí" crezca
      document.getElementById("siBtn").style.fontSize = "50px";
      document.getElementById("siBtn").style.padding = "30px 50px";

      noButtonState++;
      break;

    case 2:
      document.getElementById("noBtn").innerHTML = "Me tas hablando serio unu?";
      document.getElementById("noBtn").style.backgroundColor = "#F1330A";
      document.getElementById("sadGifContainer").style.display = "none";
      document.getElementById("sadGifContainer2").style.display = "none";
      document.getElementById("sadGifContainer1").style.display = "block";
      cambiarAudio("2.mp3");

      //   document.getElementById("backgroundAudio").play(); // Reproducir la canción

      // Hacer que el botón "Sí" crezca
      document.getElementById("siBtn").style.fontSize = "60px";
      document.getElementById("siBtn").style.padding = "40px 60px";

      noButtonState++;
      break;

    case 3:
      document.getElementById("noBtn").innerHTML = "¿El karma es tu novio?";
      document.getElementById("noBtn").style.backgroundColor = "#F1330A";
      cambiarAudio("3.mp3");

      //   document.getElementById("backgroundAudio").play(); // Reproducir la canción

      // Hacer que el botón "Sí" crezca
      document.getElementById("siBtn").style.fontSize = "70px";
      document.getElementById("siBtn").style.padding = "50px 70px";

      noButtonState++;
      break;
    case 4:
      document.getElementById("noBtn").innerHTML =
        "Me hice el delineado tan filoso como matar a un hombre";
      document.getElementById("noBtn").style.backgroundColor = "#F1330A";
      cambiarAudio("4.mp3");


      //   document.getElementById("backgroundAudio").play(); // Reproducir la canción

      // Hacer que el botón "Sí" crezca
      document.getElementById("siBtn").style.fontSize = "80px";
      document.getElementById("siBtn").style.padding = "60px 80px";

      noButtonState++;
      break;
    case 5:
      document.getElementById("noBtn").innerHTML = "Piensalo mas mi cielo unu";
      document.getElementById("noBtn").style.backgroundColor = "#F1330A";
      cambiarAudio("5.mp3");


      //   document.getElementById("backgroundAudio").play(); // Reproducir la canción

      // Hacer que el botón "Sí" crezca
      document.getElementById("siBtn").style.fontSize = "90px";
      document.getElementById("siBtn").style.padding = "70px 90px";

      noButtonState++;
      break;
    case 6:
      document.getElementById("noBtn").innerHTML = "Solo pone que si unu, tite";
      document.getElementById("noBtn").style.backgroundColor = "#F1330A";
      cambiarAudio("6.mp3");


      //   document.getElementById("backgroundAudio").play(); // Reproducir la canción

      // Hacer que el botón "Sí" crezca
      document.getElementById("siBtn").style.fontSize = "100px";
      document.getElementById("siBtn").style.padding = "80px 100px";

      noButtonState++;
      break;
    case 7:
      document.getElementById("noBtn").innerHTML = "Estoy muy traste";
      document.getElementById("noBtn").style.backgroundColor = "#F1330A";
      cambiarAudio("7.mp3");


      //   document.getElementById("backgroundAudio").play(); // Reproducir la canción

      // Hacer que el botón "Sí" crezca
      document.getElementById("siBtn").style.fontSize = "120px";
      document.getElementById("siBtn").style.padding = "90px 120px";

      noButtonState++;
      break;
    case 8:
      document.getElementById("noBtn").innerHTML =
        "Los caminos de la vida no son como yo pensaba unu";
      document.getElementById("noBtn").style.backgroundColor = "#F1330A";
      cambiarAudio("8.mp3");


      //   document.getElementById("backgroundAudio").play(); // Reproducir la canción

      document.getElementById("siBtn").style.fontSize = "140px";
      document.getElementById("siBtn").style.padding = "100px 140px";

      noButtonState++;
      break;

    case 9:
      document.getElementById("noBtn").innerHTML =
        "Estoy muy muy muy muy tiste.";
      document.getElementById("noBtn").style.backgroundColor = "#F1330A";
      cambiarAudio("9.mp3");


      //   document.getElementById("backgroundAudio").play(); // Reproducir la canción

      // Hacer que el botón "Sí" crezca
      document.getElementById("siBtn").style.fontSize = "160px";
      document.getElementById("siBtn").style.padding = "110px 160px";

      noButtonState++;
      break;

    case 10:
      document.getElementById("noBtn").innerHTML =
        "Vale, ya te dejo de molestar con mi existencia unu...";
      document.getElementById("noBtn").style.backgroundColor = "#F1330A";
      cambiarAudio("10.mp3");


      //   document.getElementById("backgroundAudio").play(); // Reproducir la canción

      document.getElementById("siBtn").style.fontSize = "180px";
      document.getElementById("siBtn").style.padding = "120px 180px";

      noButtonState++;
      break;
    case 11:
      document.getElementById("noBtn").innerHTML =
        "Ai mi bb que solo me quiere decir que no y que no me quiere unu";
      document.getElementById("noBtn").style.backgroundColor = "#F1330A";
      cambiarAudio("11.mp3");


      //   document.getElementById("backgroundAudio").play(); // Reproducir la canción

      document.getElementById("siBtn").style.fontSize = "200px";
      document.getElementById("siBtn").style.padding = "130px 200px";

      noButtonState++;
      break;

    case 12:
      document.getElementById("noBtn").innerHTML =
        "T R A S T E pero muy T R A S T E E E E E.";
      document.getElementById("noBtn").style.backgroundColor = "#F1330A";
      cambiarAudio("12.mp3");


      //   document.getElementById("backgroundAudio").play(); // Reproducir la canción

      // Hacer que el botón "Sí" crezca
      document.getElementById("siBtn").style.fontSize = "220px";
      document.getElementById("siBtn").style.padding = "140px 220px";

      noButtonState++;
      break;

    case 13:
      document.getElementById("noBtn").innerHTML =
        "Mi corazon se ta haciendo pedazos unu :(";
      document.getElementById("noBtn").style.backgroundColor = "#F1330A";
      cambiarAudio("13.mp3");


      //   document.getElementById("backgroundAudio").play(); // Reproducir la canción

      document.getElementById("siBtn").style.fontSize = "240px";
      document.getElementById("siBtn").style.padding = "150px 240px";

      noButtonState++;
      break;

    case 14:
      document.getElementById("noBtn").innerHTML = "Ya ome unu, ya di que si";
      document.getElementById("noBtn").style.backgroundColor = "#F1330A";
      cambiarAudio("14.mp3");


      //   document.getElementById("backgroundAudio").play(); // Reproducir la canción

      // Hacer que el botón "Sí" crezca
      document.getElementById("siBtn").style.fontSize = "260px";
      document.getElementById("siBtn").style.padding = "160px 260px";

      noButtonState++;
      break;

    case 15:
      document.getElementById("noBtn").innerHTML = "Yes of course";
      document.getElementById("noBtn").style.backgroundColor = "#F1330A";
      cambiarAudio("15.mp3");


      //   document.getElementById("backgroundAudio").play(); // Reproducir la canción

      // Hacer que el botón "Sí" crezca
      document.getElementById("siBtn").style.fontSize = "280px";
      document.getElementById("siBtn").style.padding = "170px 280px";

      noButtonState++;
      break;

    case 16:
      document.getElementById("noBtn").innerHTML =
        "Claro por supuesto por si no sabes ingles unu";
      document.getElementById("noBtn").style.backgroundColor = "#F1330A";
      cambiarAudio("16.mp3");


      //   document.getElementById("backgroundAudio").play(); // Reproducir la canción

      document.getElementById("sadGifContainer").style.display = "none";
      document.getElementById("sadGifContainer1").style.display = "none";
      document.getElementById("sadGifContainer2").style.display = "none";
      document.getElementById("gifContainer").style.display = "block";
      document.getElementById("happyGifContainer").style.display = "none";
      // Vuelve al estado 0
      noButtonState = 0;
      break;

    default:
      // Por si acaso, maneja cualquier otro caso aquí
      break;
  }
});
