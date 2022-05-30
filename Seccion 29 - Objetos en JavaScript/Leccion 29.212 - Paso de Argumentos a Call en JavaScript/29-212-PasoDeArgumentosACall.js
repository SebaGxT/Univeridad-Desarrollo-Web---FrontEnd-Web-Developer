let persona1 = {
    nombre: 'Sebastian Omar',
    apellido: 'de la Vega',
    nombreCompleto: function(titulo,tel){
        return titulo + ' ' + this.nombre + ' ' + this.apellido + ' ' + tel;
    }
}
let persona2 = {
    nombre: 'Carlos',
    apellido: 'Lara'
}

//Pase de argumentos a call
console.log(persona1.nombreCompleto('Ingeniero: ','5544332211'));
console.log(persona1.nombreCompleto.call(persona2,'Ingeniero: ','6644332211'));