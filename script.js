function capturar() {
    var texto = document.getElementById("entrada-texto").value;
    return texto;
}

function encriptar(){
    var texto = capturar();
    var resultado;
    resultado = texto
    .replace(/e/g, "enter")
    .replace(/i/g, "imes")
    .replace(/a/gi,"ai")
    .replace(/o/g, "ober")
    .replace(/u/g, "ufat");
    console.log(resultado);
    var salida = document.getElementById("text-output");
    salida.innerHTML = resultado;
}

function desencriptar() {
    var texto = capturar();
    var resultado;
    resultado = texto
    .replace(/enter/g, "e")
    .replace(/imes/g, "i")
    .replace(/ai/gi,"a")
    .replace(/ober/g, "o")
    .replace(/ufat/g, "u");
    console.log(resultado);
    var salida = document.getElementById("text-output");
    salida.innerHTML = resultado;
}

function updateClipboard() {
    var salida = document.getElementById("text-output").textContent;
    navigator.clipboard.writeText(salida).then(() => {
      console.log("success");
    }, () => {
      /* clipboard write failed */
      console.log("failed");
    });
  }