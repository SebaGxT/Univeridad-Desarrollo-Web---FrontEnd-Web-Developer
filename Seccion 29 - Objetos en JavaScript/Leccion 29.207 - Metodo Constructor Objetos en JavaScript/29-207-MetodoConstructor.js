//Funcion constructor de objetos
function Persona(nombre,apellido,email){
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
}

let padre = new Persona('Sebastian','De la Vega','sdelavega@mail.com');

console.log(padre);

let madre = new Persona('Marlene','De la Vega','mdelavega@mail.com');

console.log(madre);

padre.nombre = 'Sebastian Omar';

console.log(padre);
console.log(madre);