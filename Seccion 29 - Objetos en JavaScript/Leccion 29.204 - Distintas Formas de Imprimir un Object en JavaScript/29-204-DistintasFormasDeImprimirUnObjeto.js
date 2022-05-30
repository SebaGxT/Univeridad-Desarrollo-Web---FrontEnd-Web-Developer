let persona = {
    nombre: 'Sebastian',
    apellido: 'De la Vega',
    email: 'Sdelavega@mail.com',
    edad: 27,
    nombreCompleto: function (){
        return this.nombre + " " + this.apellido;
    }
}

//console.log(persona) -> Impresion en navegador [object Object]
//Formas de imprimir un objeto

//Concatenacion
console.log(persona.nombre+' '+persona.apellido);

//for in
for(nombrePropiedad in persona){
    console.log(persona[nombrePropiedad]);
}

//regresar objeto como arreglo
let personaArray = Object.values(persona);
console.log(personaArray);

//Conversion de objeto a cadena con funcion JSON
let personaString = JSON.stringify(persona);
console.log(personaString);