let persona = {
    nombre: 'Sebastian',
    apellido: 'De la Vega',
    email: 'Sdelavega@mail.com',
    edad: 27,
    idioma: 'es',
    get lang(){
        return this.idioma.toUpperCase();
    },
    set lang(lang){
        this.idioma = lang.toUpperCase();
    },
    get nombreCompleto(){
        return this.nombre + " " + this.apellido;
    }
}

console.log(persona.lang);
persona.lang = 'es_ar';
console.log(persona.lang);
console.log(persona.idioma);