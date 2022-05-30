class Persona{

    static contadorPersona = 0;

    //Metodo estatico solo va a permitir leer el valor
    static get MAX_OBJ(){
        return 5;
    }

    constructor(nombre,apellido){
        this.nombre = nombre;
        this.apellido = apellido;
        if(Persona.contadorPersona < Persona.MAX_OBJ){
            this.idPersona = ++Persona.contadorPersona;
        }else{
            console.log("Se ha superado el maximo de objetos permitidos");
        }
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
let persona2 = new Persona('Sebastian Omar','de la Vega');
let empleado2 = new Empleado('Sebastian Omar','de la Vega','Sistemas');
let persona3 = new Persona('Sebastian Omar','de la Vega');
let empleado3 = new Empleado('Sebastian Omar','de la Vega','Sistemas');
console.log(Persona.MAX_OBJ);
Persona.MAX_OBJ = 10;//No funciona ya que solo se definio metodo get
console.log(Persona.MAX_OBJ);
console.log(persona1.toString());
console.log(empleado1.toString());
console.log(persona2.toString());
console.log(empleado2.toString());
console.log(persona3.toString());
console.log(empleado3.toString());
