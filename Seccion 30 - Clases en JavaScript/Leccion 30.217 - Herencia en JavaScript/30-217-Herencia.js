class Persona{
    constructor(nombre,apellido){
        this.nombre = nombre;
        this.apellido = apellido;
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
}

let empleado1 = new Empleado('Sebastian Omar','de la Vega','Sistemas');
console.log(empleado1);
console.log(empleado1.obtenerNombre);
console.log(empleado1.obtenerApellido);
console.log(empleado1.obtenerDepartamento);

//let empleado2 = new Empleado(persona1.obtenerNombre,persona1.obtenerApellido,'Sistemas');
//console.log(empleado2);