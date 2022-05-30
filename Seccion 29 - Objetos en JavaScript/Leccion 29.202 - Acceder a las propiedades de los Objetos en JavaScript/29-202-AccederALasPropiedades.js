let persona = {
    nombre: 'Sebastian',
    apellido: 'De la Vega',
    email: 'Sdelavega@mail.com',
    edad: 27,
    nombreCompleto: function (){
        return this.nombre + " " + this.apellido;
    }
}

console.log(persona.nombre);
//acceder a la propiedad de un objeto como si fuera array - debe tener la propiedad entre comillas
console.log(persona['apellido']);

//for in - permite recorrer todas las propiedades de un objeto
for(nombrePropiedad in persona){
    console.log(nombrePropiedad);
    console.log(persona[nombrePropiedad]);
}