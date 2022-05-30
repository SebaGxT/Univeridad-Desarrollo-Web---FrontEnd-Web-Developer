let persona1 = {
    nombre: 'Sebastian Omar',
    apellido: 'de la Vega',
    nombreCompleto: function(){
        return this.nombre + ' ' + this.apellido;
    }
}
let persona2 = {
    nombre: 'Carlos',
    apellido: 'Lara'
}

//uso de call para usar el metodo de un objeto en otro objeto
console.log(persona1.nombreCompleto());

console.log(persona1.nombreCompleto.call(persona2));