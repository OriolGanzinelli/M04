// Número secreto generado aleatoriamente
const numeroSecreto = generarNumeroSecreto();

// Número máximo de iteraciones
const maxIteraciones = 5;
let iteracionActual = 0; // Comenzamos en 0 para que el primer mensaje sea "Primer intento"

// Mensajes de intento
const mensajesIntento = ["Segundo intento", "Tercer intento", "Cuarto intento", "Intento final"];

function generarNumeroSecreto() {
  const min = 10000;
  const max = 99999;
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function comprobarNumero() {
  const input = document.getElementById("inputNumero");
  const resultadoDiv = document.getElementById("resultado");
  const codigoDiv = document.getElementById("codigo");
  const intento = input.value;

  // Verificar si el intento es válido
  if (intento.length !== 5 || !/^\d+$/.test(intento)) {
    alert("Por favor, ingresa un número de 5 dígitos válidos.");
    input.value = "";
    return;
  }

  // Incrementar la iteración actual antes de mostrar el mensaje
  iteracionActual++;

  // Verificar si se ha agotado el número de intentos
  if (iteracionActual >= maxIteraciones) {
    // Actualizar la sección INFO con el mensaje del intento final
    const resultadoIntento = document.getElementById("resultado-intento");
    resultadoIntento.innerHTML = mensajesIntento[iteracionActual - 1];

    // Mostrar el resultado en la sección RESULT
    const filaResultado = document.createElement("div");
    filaResultado.classList.add("cuadrados_grises_fila");
    for (let i = 0; i < 5; i++) {
      const celda = document.createElement("div");
      celda.classList.add("numero-cuadrado");
      celda.innerHTML = intento[i];
      if (intento[i] === numeroSecreto.toString()[i]) {
        celda.style.backgroundColor = "green"; // Número en la posición correcta
      } else if (numeroSecreto.toString().includes(intento[i])) {
        celda.style.backgroundColor = "yellow"; // Número en posición incorrecta
      } else {
        celda.style.backgroundColor = "darkgray"; // Número no presente
      }
      filaResultado.appendChild(celda);
    }
    resultadoDiv.appendChild(filaResultado);

    // Verificar si el jugador ha ganado o perdido
    if (intento === numeroSecreto.toString()) {
      resultadoIntento.innerHTML = `Has acertado, enhorabuena!!`;
    } else {
      resultadoIntento.innerHTML = `Has fallado!! El número secreto era: ${numeroSecreto}`;
    }

    // Deshabilitar el campo de entrada
    input.disabled = true;
  } else {
    // Actualizar la sección INFO con el mensaje del intento actual
    const resultadoIntento = document.getElementById("resultado-intento");
    resultadoIntento.innerHTML = mensajesIntento[iteracionActual - 1];

    // Mostrar el resultado en la sección RESULT
    const filaResultado = document.createElement("div");
    filaResultado.classList.add("cuadrados_grises_fila");
    for (let i = 0; i < 5; i++) {
      const celda = document.createElement("div");
      celda.classList.add("numero-cuadrado");
      celda.innerHTML = intento[i];
      if (intento[i] === numeroSecreto.toString()[i]) {
        celda.style.backgroundColor = "green"; // Número en la posición correcta
      } else if (numeroSecreto.toString().includes(intento[i])) {
        celda.style.backgroundColor = "yellow"; // Número en posición incorrecta
      } else {
        celda.style.backgroundColor = "darkgray"; // Número no presente
      }
      filaResultado.appendChild(celda);
    }
    resultadoDiv.appendChild(filaResultado);

    // No actualizar el código con los dígitos del intento
    input.value = "";
    input.focus();
  }
}