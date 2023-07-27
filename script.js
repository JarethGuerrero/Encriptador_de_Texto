function encriptar() {
    var frase = document.getElementById("textoEncriptado").value.toLowerCase();

    var textoEncriptado = frase.replaceAll("e", "enter")
        .replaceAll("i", "imes")
        .replaceAll("a", "ai")
        .replaceAll("o", "ober")
        .replaceAll("u", "ufat");

    document.getElementById("textoResultado").innerText = textoEncriptado;
    document.getElementById("textoEncriptado").value = "";
}

function desencriptar() {
    var frase = document.getElementById("textoEncriptado").value;

    var textoEncriptado = frase.replaceAll("enter", "e")
        .replaceAll("imes", "i")
        .replaceAll("ai", "a")
        .replaceAll("ober", "o")
        .replaceAll("ufat", "u");

    document.getElementById("textoResultado").innerText = textoEncriptado;
    document.getElementById("textoEncriptado").value = "";
}

function copiarTextoEncriptado() {
    var textoEncriptado = document.getElementById("textoResultado").innerText;
  

    var textArea = document.createElement("textarea");
    textArea.value = textoEncriptado;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("copy");
    document.body.removeChild(textArea);
  

    var popup = document.createElement("div");
    popup.textContent = "Texto copiado";
    popup.classList.add("popup");
    document.body.appendChild(popup);
  

    setTimeout(function() {
      document.body.removeChild(popup);
    }, 2000);
  }
  
  function mostrarContenedorResultado() {
    // Obtener los elementos a reemplazar
    const contenedorImagen = document.querySelector('.contenedor__imagen');
    const contenedorSubtitulo = document.querySelector('.contenedor__Subtitulo');
    const contenedorParrafo = document.querySelector('.contenedor__Parrafo');

    // Ocultar los elementos a reemplazar
    contenedorImagen.style.display = 'none';
    contenedorSubtitulo.style.display = 'none';
    contenedorParrafo.style.display = 'none';
}



document.getElementById("btnEncriptar").addEventListener("click", encriptar,);
document.getElementById("btnDesencriptar").addEventListener("click", desencriptar);
document.getElementById("btnCopiar").addEventListener("click", copiarTextoEncriptado);
