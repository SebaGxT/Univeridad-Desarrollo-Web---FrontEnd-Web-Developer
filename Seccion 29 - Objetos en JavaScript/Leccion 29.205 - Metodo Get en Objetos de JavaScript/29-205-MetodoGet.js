let persona = {
    nombre: 'Sebastian',
    apellido: 'De la Vega',
    email: 'Sdelavega@mail.com',
    edad: 27,
    get nombreCompleto(){
        return this.nombre + " " + this.apellido;
    }
}

/*

metodo sin get

nombreCompleto: function(){
        return this.nombre + " " + this.apellido;
    }
}
 console.log(persona.nombreCompleto());

metodo con get 

get nombreCompleto(){
        return this.nombre + " " + this.apellido;
    }

console.log(persona.nombreCompleto);
*/

//Get obtiene los valores de las propiedades
console.log(persona.nombreCompleto);