function miFuncion(a,b){
    console.log(arguments.length);
    return a+b;
 }

console.log(miFuncion(2,3));
 console.log(typeof miFuncion);

 var miFuncionTexto = miFuncion.toString();
 console.log(miFuncionTexto);
 