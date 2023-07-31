const textArea = document.querySelector(".textArea1");
const mensaje = document.querySelector(".textArea2");

function btnEncriptar(){
    const textoEncriptado = encriptar(textArea.value);
    mensaje.value = textoEncriptado;
    textArea.value = "";
    mensaje.style.backgroundImage = "none"; 
}

function encriptar(stringEncriptado){
    let matrizText = [["e", "enter"],["i", "imes"],
                    ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptado = stringEncriptado.toLowerCase();
    for(let i = 0; i < matrizText.length; i++){
        if(stringEncriptado.includes(matrizText[i][0])){
            stringEncriptado = stringEncriptado.replaceAll(matrizText[i][0], matrizText[i][1])
        }
    }
    /* console.table(matrizText); */
    return stringEncriptado;
}

function btnDesencriptar(){
    const textoEncriptado = desencriptar(textArea.value);
    mensaje.value = textoEncriptado;
    textArea.value = "";
}

function desencriptar(stringDesencriptado){
    let matrizText = [["e", "enter"],["i", "imes"],
                    ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptado = stringDesencriptado.toLowerCase();
    for(let i = 0; i < matrizText.length; i++){
        if(stringDesencriptado.includes(matrizText[i][1])){
            stringDesencriptado = stringDesencriptado.replaceAll(matrizText[i][1], matrizText[i][0])
        }
    }
    /* console.table(matrizText); */
    return stringDesencriptado;
}

function btnCopiar(){
    textArea.value = mensaje.value;
}

