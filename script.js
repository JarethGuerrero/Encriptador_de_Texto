function encriptar() {
    const frase = document.getElementById("textoEncriptado").value.toLowerCase();

    const encriptaciones = {
        'e': 'enter',
        'i': 'imes',
        'a': 'ai',
        'o': 'ober',
        'u': 'ufat'
    };

    const textoEncriptado = frase.replace(/[eiaou]/g, letra => encriptaciones[letra]);

    document.getElementById("textoResultado").value = textoEncriptado;
    document.getElementById("textoEncriptado").value = "";
    document.getElementById("textoResultado").style.backgroundImage = "none";
}


function desencriptar() {
    const frase = document.getElementById("textoEncriptado").value.toLowerCase();

    const desencriptaciones = {
        'enter': 'e',
        'imes': 'i',
        'ai': 'a',
        'ober': 'o',
        'ufat': 'u'
    };

    const textoDesencriptado = frase.replace(/(enter|imes|ai|ober|ufat)/g, palabra => desencriptaciones[palabra]);

    document.getElementById("textoResultado").value = textoDesencriptado;
    document.getElementById("textoEncriptado").value = "";
    document.getElementById("textoResultado").style.backgroundImage = "none";
}

function read(){
    let text = document.getElementById("textoResultado").value;
    return text;
}

async function copiarTexto() {
    let txt = read();
    if (txt) {
        try {
            await navigator.clipboard.writeText(txt);
            mostrarPopup("Texto copiado");
            document.getElementById("textoResultado").value = "";
            document.getElementById("textoResultado").style.backgroundImage = "url(../images/Munheco.svg)";
        } catch (err) {
            mostrarPopup("No se pudo copiar el texto");
        }
    } else {
        mostrarPopup("Texto no encontrado");
    }
}

function mostrarPopup(mensaje) {
    var popup = document.createElement("div");
    popup.textContent = mensaje;
    popup.classList.add("popup");
    document.body.appendChild(popup);

    setTimeout(function () {
        document.body.removeChild(popup);
    }, 2000);
}

/* 
function copiarTexto(textoEncriptado) {
    console.log(copiarTexto);
    var textoEncriptado = document.getElementById("textoResultado").value;
  
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
 */

document.getElementById("btnEncriptar").addEventListener("click", encriptar,);
document.getElementById("btnDesencriptar").addEventListener("click", desencriptar);
document.getElementById("btnCopiar").addEventListener("click", copiarTexto);
