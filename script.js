const inputTexto = document.querySelector(".input-texto")
const mensaje = document.querySelector(".mensaje")

function btnEncriptar(){
    const textoEncrip = encriptar(inputTexto.value);
    mensaje.value =  textoEncrip;
    inputTexto.value = "";
}

function btnDesencriptar(){
    const textoEncrip = desencriptar(inputTexto.value);
    mensaje.value =  textoEncrip;
    inputTexto.value = "";
}

function btnCopiar(){
    copiar();
}

function encriptar(texto){
    let matrizCod = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    texto = texto.toLowerCase();

    for (let index = 0; index < matrizCod.length; index++) {
        if (texto.includes(matrizCod[index][0])) {
            texto = texto.replaceAll(matrizCod[index][0],matrizCod[index][1])
        }
    }
    return texto;
}

function desencriptar(texto){
    let matrizCod = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    texto = texto.toLowerCase();

    for (let index = 0; index < matrizCod.length; index++) {
        if (texto.includes(matrizCod[index][1])) {
            texto = texto.replaceAll(matrizCod[index][1],matrizCod[index][0])
        }
    }
    return texto;
}

function copiar(){
    mensaje.select()
    navigator.clipboard.writeText(mensaje.value)
    mensaje.value =""
    alert("Texto Copiado")
}