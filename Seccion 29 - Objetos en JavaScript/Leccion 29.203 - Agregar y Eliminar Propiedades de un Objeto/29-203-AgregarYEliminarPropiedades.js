let persona = {
    nombre: 'Sebastian',
    apellido: 'De la Vega',
    email: 'Sdelavega@mail.com',
    edad: 27,
    nombreCompleto: function (){
        return this.nombre + " " + this.apellido;
    }
}

//Agregar propiedad
persona.tel = '55443322';

console.log(persona);

persona.te1 = '44332211';

console.log(persona);

//modificar valor de propiedad
persona.tel = '66554433';

console.log(persona);

//Eliminar Propiedad
delete persona.te1;

console.log(persona);
