//Declaracion Funcion de tipo Expresion
//Permite asignar una funcion a una variable sin tener que poner nombre a la funcion
let x = function (a,b){return a+b};
let resultado;

/*
se le asigna una variable que a su vez hace referencia a una funcion
pasa los argumentos a la funcion que retorna el resultado -> se asigna a la variable x y se copia a 
la variable resultado
*/
resultado = x(1,2);
console.log("Suma: " + resultado);