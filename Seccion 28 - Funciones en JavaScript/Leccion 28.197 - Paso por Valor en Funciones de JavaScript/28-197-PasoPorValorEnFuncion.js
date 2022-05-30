//Valor primitivo no tiene propiedades ni metodos
let x = 10;

function cambiarValor(a){
    a = 20;
    return a;
}

//Paso por valor -> Copia el valor del argumento al parametro
cambiarValor(x);
//no modifica el valor de x
console.log(x);
