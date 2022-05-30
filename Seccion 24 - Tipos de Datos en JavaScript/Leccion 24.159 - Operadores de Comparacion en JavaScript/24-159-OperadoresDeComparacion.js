let  a = 3 , b = 2, c = "3", z;

z = a == c; // Se revisa el valor sin importar el tipo
console.log(z);

z = a === c; // Revisa si los valores son iguales y tambien los tipos
console.log(z);