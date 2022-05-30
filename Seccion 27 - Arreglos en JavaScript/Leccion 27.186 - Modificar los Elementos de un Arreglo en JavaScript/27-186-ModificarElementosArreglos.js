let autos = ['BMW','Mercedes Benz','Volvo'];


for(let i = 0; i < autos.length; i++){
    console.log(i + ' : '+autos[i]);
}

autos[1] = "MercedesBenz";
console.log(autos[1]);

autos.push("Audi");

for(let i = 0; i < autos.length; i++){
    console.log(i + ' : '+autos[i]);
}