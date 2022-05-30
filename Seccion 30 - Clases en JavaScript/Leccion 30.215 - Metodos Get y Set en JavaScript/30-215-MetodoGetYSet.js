class Persona{
    constructor(nombre,apellido){
        this.nombre = nombre;
        this.apellido = apellido;
    }

    get obtenerNombre(){
        return this.nombre;
    }

    set modificarNombre(nombre){
        this.nombre = nombre;
    }

}

let persona1 = new Persona('Sebastian Omar','de la Vega');
console.log(persona1.obtenerNombre);//Get obtiene el valor del atributo
persona1.modificarNombre = 'Sebastian';//Set ingresa un valor al atributo
console.log(persona1.obtenerNombre);