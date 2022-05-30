/*

Paso por refencia

Las variables o constantes de objetos almacenan una referencia de memoria
que guarda los atributos y valores del mismo.

*/

const persona = {
    nombre: 'Sebastian',
    apellido: 'de la Vega'
}

/*
El parametro apunta a la referencia en memoria que se le pasa como argumento en la llamada a la funcion
Lo que permite modificar el objeto a traves de la funcion ya que va y modifica el valor alojado en la referencia de memoria
*/

function cambiarValorObjeto(p1){
    p1.nombre = 'Omar';
    p1.apellido = 'De la Vega';
}

console.log(persona);
cambiarValorObjeto(persona);
console.log(persona);