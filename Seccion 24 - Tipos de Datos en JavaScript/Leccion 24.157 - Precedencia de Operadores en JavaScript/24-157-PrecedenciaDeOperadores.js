/*

Nivel - operadores - descripcion - modo de evaluar

15 ()[] - new llamada funcion arreglo propiedad acceso objeto lugar en memoria - izquierda a derecha
14 ++ -- + - ! ~ delete typeof void incremento decremento suma y resta unaria negacion logica bitwise complement deallocation buscar tipo de variable - derecha a izquierda
13 * / % multiplicacion division modulo - izquierda a derecha
12 + - Suma resta - izquierda a derecha
11 >> << Bitwise Right shift Bitwise Left Shift - izquierda a derecha
10 < <= > >= menor menor que mayo mayor que - izquierda a derecha
9 == != === !== igualdad distinto - izquierda a derecha
8 & Bitwise AND - izquierda a derecha
7 ^ Bitwise XOR - izquierda a derecha
6 | Bitwise OR - izquierda a derecha
5 && Logica AND - izquierda de derecha
4 || Logica OR - izquierda a derecha
3 ?: operador condicional - derecha a izquierda
2 = += -= *= /= %= &= ^= |= <<= >>= operadores de asignacion  - derecha a izquierda
1  , coma - izquierda a derecha

*/
let a = 3, b = 2, c = 1, d = 4;

let z = a * b;
console.log(z);

z = a * b + c;
console.log(z);

z = c + a * b;
console.log(z);

z = a * b + c / d;
console.log(z);

z = c + a * b / d;
console.log(z);

z = (c + a) * b / d;
console.log(z);
