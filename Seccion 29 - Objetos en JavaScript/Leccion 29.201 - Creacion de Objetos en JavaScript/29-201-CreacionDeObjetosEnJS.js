let persona = {
    nombre: 'Sebastian',
    apellido: 'De la Vega',
    email: 'Sdelavega@mail.com',
    edad: 27,
    nombreCompleto: function (){
        /* let n;
        n = this.nombre + " " + this.apellido;
        return n;*/
        return this.nombre + " " + this.apellido;
    }
}

//Creacion de objeto en memoria vacio
let persona2 = new Object();
//Se asignan propiedades - deficion dinamica de atributos y valores
persona2.nombre = 'Carlos';
persona2.direccion = 'Saturno 15';
persona2.telefono = '55443322';

console.log(persona2.telefono);

