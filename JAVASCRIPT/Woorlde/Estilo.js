let numeroSecreto = generarNumeroSecreto();
const maxIteraciones = 5;
let iteracionActual = 0;
const mensajesIntento = ["Segundo intento", "Tercer intento", "Cuarto intento", "Intento final"];
let juegoTerminado = false;
console.log("Número Secreto: " + numeroSecreto);

function generarNumeroSecreto() {
  const min = 10000;
  const max = 99999;
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function reiniciarJuego() {
  numeroSecreto = generarNumeroSecreto();
  iteracionActual = 0;
  juegoTerminado = false;
  const resultadoDiv = document.getElementById("resultado");
  resultadoDiv.innerHTML = "";
  const resultadoIntento = document.getElementById("resultado-intento");
  resultadoIntento.innerHTML = "Primer intento, suerte!";
  const input = document.getElementById("inputNumero");
  input.value = "";
  input.disabled = false;
  input.focus();
}

function comprobarNumero() {
  if (juegoTerminado) {
    return;
  }

  const input = document.getElementById("inputNumero");
  const resultadoDiv = document.getElementById("resultado");
  const intento = input.value;

  if (intento.length !== 5 || !/^\d+$/.test(intento)) {
    alert("Por favor, ingresa un número de 5 dígitos válidos.");
    input.value = "";
    return;
  }

  iteracionActual++;

  if (iteracionActual >= maxIteraciones) {
    juegoTerminado = true;
    const resultadoIntento = document.getElementById("resultado-intento");
    resultadoIntento.innerHTML = mensajesIntento[iteracionActual - 1];
    const filaResultado = document.createElement("div");
    filaResultado.classList.add("cuadrados_grises_fila");
    for (let i = 0; i < 5; i++) {
      const celda = document.createElement("div");
      celda.classList.add("numero-cuadrado");
      celda.innerHTML = intento[i];
      if (intento[i] === numeroSecreto.toString()[i]) {
        celda.style.backgroundColor = "green";
      } else if (numeroSecreto.toString().includes(intento[i])) {
        celda.style.backgroundColor = "yellow";
      } else {
        celda.style.backgroundColor = "darkgray";
      }
      filaResultado.appendChild(celda);
    }
    resultadoDiv.appendChild(filaResultado);
    if (intento === numeroSecreto.toString()) {
      resultadoIntento.innerHTML = "Has acertado, enhorabuena!!";
    } else {
      resultadoIntento.innerHTML = `Has fallado!! El número secreto era: ${numeroSecreto}`;
    }
    input.disabled = true;
    setTimeout(reiniciarJuego, 1500);
  } else {
    const resultadoIntento = document.getElementById("resultado-intento");
    resultadoIntento.innerHTML = mensajesIntento[iteracionActual - 1];
    const filaResultado = document.createElement("div");
    filaResultado.classList.add("cuadrados_grises_fila");
    for (let i = 0; i < 5; i++) {
      const celda = document.createElement("div");
      celda.classList.add("numero-cuadrado");
      celda.innerHTML = intento[i];
      if (intento[i] === numeroSecreto.toString()[i]) {
        celda.style.backgroundColor = "green";
      } else if (numeroSecreto.toString().includes(intento[i])) {
        celda.style.backgroundColor = "yellow";
      } else {
        celda.style.backgroundColor = "darkgray";
      }
      filaResultado.appendChild(celda);
    }
    resultadoDiv.appendChild(filaResultado);
    input.value = "";
    input.focus();
  }
}