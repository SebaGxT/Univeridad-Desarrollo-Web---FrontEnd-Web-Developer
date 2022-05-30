'use strict'

try{
    //x = 10;
    //let x = 10;
    miFuncion();
}catch(error){
    console.log(error);
}
finally{
    //Bloque finally es opcional - este bloque siempre se va a ejecutar aunque no se provoque un error en el try 
    console.log('termina la revision de errores');
}
console.log('continuamos...');