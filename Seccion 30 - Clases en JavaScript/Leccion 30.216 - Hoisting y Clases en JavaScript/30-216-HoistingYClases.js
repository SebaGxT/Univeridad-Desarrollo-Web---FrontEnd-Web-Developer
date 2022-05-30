//En clases no se aplica hoisting si o si primero hay que declararlos para utilizarlos
//let Persona2 = new Persona('Carla','Juarez'); aun no existe la clase por lo que no permite crear el objeto
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