/*
Funcion anonima que se manda a llamar a si misma

no es reutilizable, solo se ejecuta una vez

*/
(function (){
    console.log("Ejecutando la funcion");
})();

(function (a,b){
    console.log("Suma: "+(a+b));
})(3,4);
