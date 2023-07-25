

function encriptar(){
    
    var frase = document.getElementById("textoEncriptado").value.toLowerCase();

    var textoEncriptado = frase.replaceAll("e","enter")
                               .replaceAll("i","imes")
                               .replaceAll("a","ai")
                               .replaceAll("o","ober")
                               .replaceAll("u","ufat");

    document.getElementById("textoDesencriptado").innerHTML = textoEncriptado; 
    document.getElementById("textoEncriptado").value = "";                       
};

function desencriptar(){
    
    var frase = document.getElementById("textoEncriptado").value;

    var textoEncriptado = frase.replaceAll("enter","e")
                               .replaceAll("imes","i")
                               .replaceAll("ai","a")
                               .replaceAll("ober","o")
                               .replaceAll("ufat","u");

    document.getElementById("textoDesencriptado").innerHTML = textoEncriptado;  
    document.getElementById("textoEncriptado").value = "";
}

function copiarTextoEncriptado() {
    var textoEncriptado = document.getElementById("textoEncriptado").value;
    
    // Copiar el texto encriptado al portapapeles
    var textArea = document.createElement("textarea");
    textArea.value = textoEncriptado;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("copy");
    document.body.removeChild(textArea);
}

document.getElementById("btnEncriptar").addEventListener("click", encriptar);
document.getElementById("btnDesencriptar").addEventListener("click", desencriptar);
document.getElementById("btnCopiar").addEventListener("click", copiarTextoEncriptado);