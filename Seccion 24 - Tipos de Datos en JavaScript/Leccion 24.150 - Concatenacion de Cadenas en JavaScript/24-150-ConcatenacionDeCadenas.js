var nombre = "Juan";
var apellido = "Perez";

var nombreCompleto = nombre + " " + apellido;
console.log(nombreCompleto);

var nombreCompleto2 = "Carlos" + " " + "Lara";
console.log(nombreCompleto2);

/*
Las expresiones en JS se evaluan de izquierda a derecha 
por lo tanto al encontrar primero una cadena el numero lo trata como cadena
*/
var x = nombre + 219;
console.log(x);

x = nombre + 2 + 4;
console.log(x);

x = nombre + (2 + 4);
console.log(x);

x = 2 + 4 + nombre;
console.log(x);
