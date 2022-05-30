class Persona{
    static contadorPer = 0;
    constructor(nombre,apellido,edad){
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.IdPersona = ++Persona.contadorPer;
    }
    get idPersona(){
        return this.IdPersona;
    }
    get Nombre(){
        return this.nombre;
    }
    set Nombre(nombre){
        this.nombre = nombre;
    }
    get Apellido(){
        return this.apellido;
    }
    set Apellido(apellido){
        this.apellido = apellido;
    }
    get Edad(){
        return this.edad;
    }
    set Edad(edad){
        this.edad = edad;
    }
    toString(){
        return `
        IdPersona: ${this.IdPersona}
        Nombre: ${this.nombre} 
        Apellido: ${this.apellido} 
        Edad: ${this.edad}`;
    }
}

class Empleado extends Persona{
    static ContEmpleado = 0;
    constructor(nombre,apellido,edad,sueldo){
        super(nombre,apellido,edad);
        this.sueldo = sueldo;
        this.IdEmpleado = ++Empleado.ContEmpleado;
    }
    get idEmpleado(){
        return this.IdEmpleado
    }
    get Sueldo(){
        return this.sueldo;
    }
    set Sueldo(sueldo){
        this.sueldo = sueldo;
    }
    toString(){
      return `
      ${super.toString()}
        IdEmpleado: ${this.IdEmpleado}
        Sueldo: ${this.sueldo}`; 
    }
}

class Cliente extends Persona{
    static ContCliente = 0;
    constructor(nombre,apellido,edad,fechaRegistro){
        super(nombre,apellido,edad);
        this.fechaRegistro = fechaRegistro;
        this.IdCliente = ++Cliente.ContCliente;
    }
    get idCliente(){
        return this.IdCliente;
    }
    get FechaRegistro(){
        return this.fechaRegistro;
    }
    set FechaRegistro(fechaRegistro){
        this.fechaRegistro = fechaRegistro;
    }
    toString(){
       return `${super.toString()}.
        Idcliente: ${this.IdCliente} 
        Fecha de registro: ${this.fechaRegistro}`;
    }

}

let persona1 = new Persona('Sebastian Omar','de la Vega',27);
let empleado1 = new Empleado('Sebastian Omar','de la Vega',27,255.36);
let cliente1 = new Cliente('Juan','Lopez',32,new Date());

console.log(persona1);
console.log(empleado1);
console.log(cliente1);

console.log(persona1.toString());
console.log(empleado1.toString());
console.log(cliente1.toString());