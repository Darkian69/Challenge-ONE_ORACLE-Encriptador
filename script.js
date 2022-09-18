function capturar() {
    var texto = document.getElementById("entrada-texto").value;
    return texto;
}

function encriptar(){
    var texto = capturar();
    var resultado;
    resultado = texto.replace(/a/gi,"xd")
    .replace(/e/g, "enter")
    .replace(/i/g, "imes")
    .replace(/o/g, "ober")
    .replace(/u/g, "ufat");
    console.log(resultado);
    var xd = document.getElementById("text-output");
    xd.innerHTML = resultado;
}

//el pepe pedro piedra
//enterl penterpenter penterdrober pimesenterdrai
//enterl pepe pedrober pimesedrai
//enterl penterpenter penterdrober pimesenterdraimes
