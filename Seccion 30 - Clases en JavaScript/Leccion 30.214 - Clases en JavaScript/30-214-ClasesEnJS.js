/*
Una clase es una plantilla de un objeto de la cual se crean los mismos

Los objetos son instancias de una clase

poseen atributos y valores
tambien tienen metodos

*/
class Persona{
    constructor(nombre,apellido){
        this.nombre = nombre;
        this.apellido = apellido;
    }
}

//Instancia de clase u objeto
let persona1 = new Persona('Sebastian Omar','de la Vega');
console.log(persona1);

let persona2 = new Persona('Marlene Luciana','de la Vega');
console.log(persona2);