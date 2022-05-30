'use strict'
/*
try{
    //x = 10;
    //let x = 10;
    //miFuncion();
    //Throw sirve para arrojar un error en caso de ser necesario
    throw 'Mi error';
}catch(error){
    console.log(error);
}
finally{
    console.log('termina la revision de errores');
}
console.log('continuamos...');*/

let resultado = 1;

try{
    if(isNaN(resultado)){
        throw 'No es un número';
    }else if(resultado === ''){
        throw 'Es cadena vacía';
    }else if(resultado >= 0){
        throw 'Valor positivo';
    }else if(resultado < 0){
        throw 'Valor negativo';
    }

}catch (error){
    console.log(error);
    //console.log(error.name); <- solo muestra el nombre del error
    //console.log(error.message); <- solo muestra el mensaje del error
}