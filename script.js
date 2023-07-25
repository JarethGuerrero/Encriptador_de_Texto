

function encriptar(){
    
    var frase = document.getElementById("textoEncriptado").value.toLowerCase();

    var textoEncriptado = frase.replaceAll("e","enter")
                               .replaceAll("i","imes")
                               .replaceAll("a","ai")
                               .replaceAll("o","ober")
                               .replaceAll("u","ufat");

    document.getElementById("textoDesencriptado").innerHTML = textoEncriptado;                           
};

function desencriptar(){
    
    var frase = document.getElementById("textoEncriptado").value;

    var textoEncriptado = frase.replaceAll("enter","e")
                               .replaceAll("imes","i")
                               .replaceAll("ai","a")
                               .replaceAll("ober","o")
                               .replaceAll("ufat","u");

    document.getElementById("textoDesencriptado").innerHTML = textoEncriptado;                           
}
document.getElementById("btnEncriptar").addEventListener("click", encriptar);
document.getElementById("btnDesencriptar").addEventListener("click", desencriptar);