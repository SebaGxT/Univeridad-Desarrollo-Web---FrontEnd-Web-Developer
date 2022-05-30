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
        /*Para la sobreescritura debe tener el mismo nombre*/
        return `Gerente: ${super.obtenerDetalles()}, Depto: ${this.departamento}`;
    }
}

let gerente1 = new Gerente('Sebastian',160000,'IT');
console.log(gerente1.obtenerDetalles());
let empleado1 = new Empleado('Juan',240000);
console.log(empleado1.obtenerDetalles());