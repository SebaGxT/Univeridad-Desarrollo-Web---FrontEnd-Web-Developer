//Funcion constructor de objetos
function Persona(nombre,apellido,email){
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
    this.nombreCompleto = function (){
        return this.nombre + ' ' + this.apellido;
    }
    this.nombreCompleto2 = () => this.nombre + ' ' + this.apellido;
}

let padre = new Persona('Sebastian Omar','De la Vega','sdelavega@mail.com');

let madre = new Persona('Marlene Luciana','De la Vega','mdelavega@mail.com');

console.log(padre.nombreCompleto());
console.log(madre.nombreCompleto2());