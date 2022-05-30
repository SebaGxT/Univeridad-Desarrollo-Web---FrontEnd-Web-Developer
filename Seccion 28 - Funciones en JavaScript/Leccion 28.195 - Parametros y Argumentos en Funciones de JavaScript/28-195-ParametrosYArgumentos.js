/*
Parametros son la listas de valores que va a recibir la funcion
Argumentos son los valores que se envian a traves de la llamada de la funcion
*/ 

let sumar = function (a,b){
    console.log(arguments[0]);
    console.log(arguments[1]);
    return a + b
};

let resultado = sumar(1,2);
console.log("Suma: " + resultado);
//------------------------------------------------ Llama a la funcion sin pasaje de argumentos - JS ejecuta igual y devuelve NaN - argumentos Undefined
sumar = function (a,b){
    console.log(arguments[0]);
    console.log(arguments[1]);
    return a + b
};

 resultado = sumar();
console.log("Suma: " + resultado);

//------------------------------------------------ Llamar funcion sin argumentos - parametros definidos con valores
 sumar = function (a=4,b=5){
    console.log(arguments[0]);
    console.log(arguments[1]);
    return a + b
};

 resultado = sumar();
console.log("Suma: " + resultado);

//------------------------------------------------ Reemplazo de valores argumentos
sumar = function (a=4,b=5){
    console.log(arguments[0]);
    console.log(arguments[1]);
    return a + b
};

 resultado = sumar(6,3);
console.log("Suma: " + resultado);


//------------------------------------------------Agregar un argumento extra no definido en parametro
sumar = function (a=4,b=5){
    console.log(arguments[0]);
    console.log(arguments[1]);
    console.log(arguments[2]);
    return a + b + arguments[2];
};

 resultado = sumar(3,6,7);
console.log("Suma: " + resultado);

