function cambiarColor(){
    let numAleatorio = ((1 + (5 - 1))*Math.random()).toFixed(0);

    console.log(numAleatorio);
    
    if (numAleatorio == 1){
        document.getElementById("titulo-cabecera").style.color = "red";
    } else if (numAleatorio == 2){
        document.getElementById("titulo-cabecera").style.color = "blue";
    } else if (numAleatorio == 3){
        document.getElementById("titulo-cabecera").style.color = "orange";
    } else if (numAleatorio == 4){
        document.getElementById("titulo-cabecera").style.color = "green";
    } else if (numAleatorio ==5){
        document.getElementById("titulo-cabecera").style.color = "black";
    }
}