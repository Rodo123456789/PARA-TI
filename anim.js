// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "Cuando me siento en tus brazos se me olvida todo", time: 15 },
  { text: "Soy afortunado por tenerte a ti", time: 20 },
  { text: "Aquí despertando a mi lado", time: 26 },
  { text: "Estoy en deuda porque llegaste a mi vida", time: 29 },
  { text: "Como si estuvieras hecha justo a mi medida", time: 36 },
  { text: "Y yo no lo pedí, solito me llegó", time: 41 },
  { text: "Y vale doble, sí, un regalo de Dios", time: 46 },
  { text: "Destinado para mí", time: 51 },
  { text: "Voy a hacer el encargado de cuidarte siempre", time: 56 },
  { text: "Que nada te falte", time: 63 },
  { text: "Mi única misión será hacerte muy feliz", time: 65 },
  { text: "En las buenas y en las malas, estaré contigo para lo que necesites", time: 74 },
  { text: "Pase lo que pase, voy a estar ahí", time: 83 },
  { text: "La recompensa para mí", time: 90 },
  { text: "Es mirar tu linda carita sonreír", time: 94 },
  { text: "Como si estuvieras hecha justo a mi medida", time: 114 },
  { text: "Y yo no lo pedí, solito me llegó", time: 119 },
  { text: "Y vale doble, sí, un regalo de Dios", time: 123 },
  { text: "Destinado para mí", time: 128 },
  { text: "Voy a hacer el encargado de cuidarte siempre", time: 134 },
  { text: "Que nada te falte", time: 140 },
  { text: "Mi única misión será hacerte muy feliz", time: 142 },
  { text: "En las buenas y las malas estaré contigo para lo que necesites", time: 151 },
  { text: "Pase lo que pase, voy a estar ahí", time: 161 },
  { text: "La recompensa para mí", time: 167 },
  { text: "Es mirar tu linda carita sonreír", time: 170 },
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);