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

console.log(persona.nombre);
console.log(persona.edad);
console.log(persona.apellido);
console.log(persona);
console.log(persona.nombreCompleto());

