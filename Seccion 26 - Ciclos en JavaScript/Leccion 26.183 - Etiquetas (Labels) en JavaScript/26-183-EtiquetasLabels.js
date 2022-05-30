//El uso de etiquetas no es recomendable
//funciona con continue y break
//ejecuta lo siguiente a la etiqueta
inicio:
for(let i = 0;i < 11; i++){
    if(i % 2 !==0){
        continue inicio;
    }
    console.log(i);
}