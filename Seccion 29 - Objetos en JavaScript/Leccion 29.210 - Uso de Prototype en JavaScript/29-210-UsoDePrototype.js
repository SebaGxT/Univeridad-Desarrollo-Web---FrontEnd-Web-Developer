function Persona(nombre,apellido,email){
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
    this.nombreCompleto = function (){
        return this.nombre + ' ' + this.apellido;
    }
    this.nombreCompleto2 = () => this.nombre + ' ' + this.apellido;
}

Persona.prototype.tel = '44332211';

let padre = new Persona('Sebastian Omar','De la Vega','sdelavega@mail.com');
padre.tel = '66554433';
console.log(padre.tel);
let madre = new Persona('Marlene Luciana','De la Vega','mdelavega@mail.com');
madre.tel = '66889900';
console.log(madre.tel);
