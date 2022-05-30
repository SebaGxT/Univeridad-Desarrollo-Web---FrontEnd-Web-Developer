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




let persona1 = new Persona('Sebastian Omar','de la Vega',27);
let empleado1 = new Empleado('Sebastian Omar','de la Vega',27,255.36);
let cliente1 = new Cliente('Juan','Lopez',32,"2/1/22");

console.log(persona1);
console.log(empleado1);
console.log(cliente1);

console.log(persona1.toString());
console.log(empleado1.toString());
console.log(cliente1.toString());

