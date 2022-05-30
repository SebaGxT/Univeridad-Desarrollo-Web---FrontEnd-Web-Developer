/*"use strict"; uso global*/
/*
El modo estricto evita tener malas practicas en el codigo
como el uso de variables sin declarar
*/
x = 10;
console.log(x);

let z = 20;
console.log(z);


miFuncion();

function miFuncion(){
    /*"use strict; uso local"*/
    y = 15;
}