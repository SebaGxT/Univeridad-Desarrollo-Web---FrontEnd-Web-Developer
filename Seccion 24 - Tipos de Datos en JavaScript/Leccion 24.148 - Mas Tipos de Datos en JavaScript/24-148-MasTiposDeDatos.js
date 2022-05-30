var nombre = "Sebastian";
console.log(nombre);
console.log(typeof nombre);

nombre = 10;
console.log(nombre);
console.log(typeof nombre); 


var numero = 1000;
console.log(numero);
console.log(typeof numero);


var objeto = {
    nombre: "Sebastian",
    apellido: "De la Vega",
    telefono: "48403801"
}
console.log(objeto);
console.log(typeof objeto);

//Tipo de dato boolean (true, false)
var bandera = true;
console.log(bandera);
console.log(typeof bandera);

//Tipo de dato function en JS las funciones tambien son tipos de datos
function miFuncion(){
    console.log(miFuncion);
    console.log(typeof miFuncion);
}

//Tipo de dato Symbol se utiliza para crear un valor unico de una variable
var simbolo = Symbol("Mi simbolo");
console.log(simbolo);
console.log(typeof simbolo);

//Tipo clase es una funcion
class Persona{
    constructor(nombre, apellido){
        this.nombre = nombre;
        this.apellido = apellido;
    }
}
console.log(Persona);
console.log(typeof Persona);

//Tipo de dato Undefined
var x;
console.log(x);
console.log(typeof x);

x = undefined;
console.log(x);
console.log(typeof x);

//null = ausencia de valor
var y = null;
console.log(y);
console.log(typeof y);