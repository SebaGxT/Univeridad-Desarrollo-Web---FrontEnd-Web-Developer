let resultado = sumarTodo(5,4,13,10,9,10,11,3);
console.log(resultado);

//Suma dinamica con cantidad de argumentos x
function sumarTodo(){
    let suma = 0;
    for(i=0;i<arguments.length;i++){
        suma +=arguments[i];
    }
    return suma;
}

