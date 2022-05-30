let autos = ['BMW','Mercedes Benz','Volvo'];


for(let i = 0; i < autos.length; i++){
    console.log(i + ' : '+autos[i]);
}

autos[1] = "MercedesBenz";
console.log(autos[1]);

autos.push('Audi');

console.log(autos);

console.log(autos.length);
autos[autos.length] = 'Cadillac';

console.log(autos);

autos[6] = 'Porsche';
console.log(autos);
