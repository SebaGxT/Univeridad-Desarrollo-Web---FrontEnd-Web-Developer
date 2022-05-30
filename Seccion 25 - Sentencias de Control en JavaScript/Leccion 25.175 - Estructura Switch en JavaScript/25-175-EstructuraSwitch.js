let  numero = 3, numeroTexto = "Valor desconocido";

switch (numero){
    case 1:
        numeroTexto = "Numero uno";
        break;
    case 2:
        numeroTexto = "Numero dos";
        break;
    case 3:
        numeroTexto = "Numero tres";
        break;
    case 4:
        numeroTexto = "Numero cuatro";
        break;
    default:
        numeroTexto = "Caso no encontrado";
        /*
        El break del default es opcional si es la ultima opcion
        defaul puede ponerse primero pero debe colocarse un break
        */
}

console.log(numeroTexto);