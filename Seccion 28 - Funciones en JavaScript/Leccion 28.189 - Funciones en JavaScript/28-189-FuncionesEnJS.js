/*
Concepto de Hoisting se puede llamar a la funcion antes o despues de definirla
ya que siempre mueve la declaracion al principio del programa para ser utilizada
*/

miFuncion(4,2);

//Declaracion de la funcion
function miFuncion(a,b){
    console.log("Suma: "+(a+b));
}

//Lamado a la funcion
miFuncion(2,3);
