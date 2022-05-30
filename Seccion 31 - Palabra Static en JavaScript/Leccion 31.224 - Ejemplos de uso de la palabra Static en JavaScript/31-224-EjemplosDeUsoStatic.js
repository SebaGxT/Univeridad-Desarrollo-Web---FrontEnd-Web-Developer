class Persona{

    static contadorPersona = 0;

    constructor(nombre,apellido){
        this.nombre = nombre;
        this.apellido = apellido;
        this.idPersona = ++Persona.contadorPersona;
    }

    get obtenerNombre(){
        return this.nombre;
    }

    get obtenerApellido(){
        return this.apellido;
    }

    set modificarNombre(nombre){
        this.nombre = nombre;
    }

    set modificarApellido(apellido){
        this.apellido = apellido;
    }

    nombreCompleto(){
        return this.idPersona + ' ' + this.nombre + ' ' + this.apellido;
    }
    toString(){
        return this.nombreCompleto();
    }
    static saludar(){
        console.log("Saludos desde metodo static");
    }
    static saludar2(persona){
        console.log('Hola ' + persona.nombre + ' ' + persona.apellido);
    }
}

class Empleado extends Persona{
    constructor(nombre,apellido,departamento){
        super(nombre,apellido);
        this.departamento = departamento;
    }
    
    get obtenerDepartamento(){
        return this.departamento;
    }

    set modificarDepartamento(departamento){
        this.departamento = departamento;
    }
    nombreCompleto(){
        return super.nombreCompleto() + ', ' + this.departamento;
    }
}

let persona1 = new Persona('Sebastian Omar','de la Vega');
let empleado1 = new Empleado('Sebastian Omar','de la Vega','Sistemas');
let persona2 = new Persona('Carla','Lopez');
console.log(persona1.toString());
console.log(empleado1.toString());
console.log(persona2.toString());