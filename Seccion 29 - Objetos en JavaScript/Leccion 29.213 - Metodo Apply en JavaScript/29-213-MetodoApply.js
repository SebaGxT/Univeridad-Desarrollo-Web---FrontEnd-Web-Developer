let persona1 = {
    nombre: 'Sebastian Omar',
    apellido: 'de la Vega',
    nombreCompleto: function(titulo,tel){
        return titulo + ' ' + this.nombre + ' ' + this.apellido + ' ' + tel;
        //return this.nombre + ' ' + this.apellido;
    }
}
let persona2 = {
    nombre: 'Carlos',
    apellido: 'Lara'
}

//Metodo Apply - permite llamar un metodo en un objeto que no lo tiene definido
console.log(persona1.nombreCompleto('Ingeniero: ', '66887711'));
//console.log(persona1.nombreCompleto.apply(persona2));

//Pasaje de argumentos - se hace a traves de arreglos
//let arreglo = ['Ingeniero: ','66554433'];
//console.log(persona1.nombreCompleto.apply(persona2,arreglo));
console.log(persona1.nombreCompleto.apply(persona2,['Ingeniero: ','66554433']));