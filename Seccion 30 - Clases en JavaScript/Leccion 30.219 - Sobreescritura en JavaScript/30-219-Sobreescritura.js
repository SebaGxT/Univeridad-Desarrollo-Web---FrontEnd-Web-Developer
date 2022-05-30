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

    nombreCompleto(){
        return this.nombre + ' ' + this.apellido;
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
    //Sobreescritura - debe ser el mismo nombre definido en la clase padre
    nombreCompleto(){
        //Obtener el metodo de la clase padre para no volver a escribir todo
        return super.nombreCompleto() + ', ' + this.departamento;
        //return this.nombre + ' ' + this.apellido + ', ' + this.departamento;
    }
}

let empleado1 = new Empleado('Sebastian Omar','de la Vega','Sistemas');
console.log(empleado1);
console.log(empleado1.nombreCompleto());