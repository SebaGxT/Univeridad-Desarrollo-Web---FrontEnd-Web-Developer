class Empleado{
    constructor(nombre,sueldo){
        this.nombre = nombre;
        this.sueldo = sueldo;
    }
    obtenerDetalles(){
        return `Empleado: Nombre: ${this.nombre}, sueldo: ${this.sueldo}`;
    }
}

class Gerente extends Empleado{
    constructor(nombre,sueldo,departamento){
        super(nombre,sueldo);
        this.departamento = departamento;
    }
    obtenerDetalles(){
        return `Gerente: ${super.obtenerDetalles()}, Depto: ${this.departamento}`;
    }
}

function imprimir(tipo){
   console.log(tipo.obtenerDetalles());
}

let gerente1 = new Gerente('Sebastian',160000,'IT');
let empleado1 = new Empleado('Juan',240000);
imprimir(empleado1);
imprimir(gerente1);