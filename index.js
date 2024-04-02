function encriptar(){
    let texto = document.getElementById("texto").value;
    let imagen = document.getElementById("Imagen1").src;
    let mensaje = document.getElementById("mensaje").value;


    let textoCifrado = texto
        .replace(/e/gi, "enter")
        .replace(/i/gi, "imes")
        .replace(/a/gi, "ai")
        .replace(/o/gi, "ober")
        .replace(/u/gi, "ufat");

    if (document.getElementById("texto").value. length !=0) {
        document.getElementById("mensaje").value = textoCifrado;
        document.getElementById("Imagen1").src = "encriptado.jpg"
    } else{
        alert("Debes ingresar algún texto");
    }
}

function desencriptar(){
    let texto = document.getElementById("texto").value;
    let imagen = document.getElementById("Imagen1").src;
    let mensaje = document.getElementById("mensaje").value;

    let textoCifrado = texto
        .replace(/enter/gi, "e")
        .replace(/imes/gi, "i")
        .replace(/ai/gi, "a")
        .replace(/ober/gi, "o")
        .replace(/ufat/gi, "u");

    if (document.getElementById("texto").value. length !=0) {
        document.getElementById("mensaje").value = textoCifrado;
        document.getElementById("Imagen1").src = "desencriptado.jpg";
    } else{
        alert("Debes ingresar algún texto");
    }
}

/*
La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"
*/
