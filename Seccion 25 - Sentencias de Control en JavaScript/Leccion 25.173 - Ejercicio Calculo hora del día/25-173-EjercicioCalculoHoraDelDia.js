let hora = 0, mensaje;

if(hora > 5 && hora < 12){
    mensaje = "Buenos dias";
}else if(hora > 11 && hora < 19){
    mensaje = "Buenas tardes";
}else if (hora > 18 && hora < 25){
    mensaje = "Buenas noches";
}else if (hora >= 0 && hora < 7){
    mensaje = "Durmiendo";
}else{
    mensaje = "Valor incorrecto";
}

console.log(mensaje);