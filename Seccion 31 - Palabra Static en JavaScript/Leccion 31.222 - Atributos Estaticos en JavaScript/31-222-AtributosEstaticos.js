class Persona{

    static contadorObjetosPersona = 0;

    constructor(nombre,apellido){
        this.nombre = nombre;
        this.apellido = apellido;
        Persona.contadorObjetosPersona++;
        console.log("Se incrementa contador: " + Persona.contadorObjetosPersona);
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
console.log(persona1.toString());

let empleado1 = new Empleado('Sebastian Omar','de la Vega','Sistemas');
console.log(empleado1.toString());

//console.log(persona1.contadorObjetosPersona); no se permite
console.log(Persona.contadorObjetosPersona);
console.log(Empleado.contadorObjetosPersona);