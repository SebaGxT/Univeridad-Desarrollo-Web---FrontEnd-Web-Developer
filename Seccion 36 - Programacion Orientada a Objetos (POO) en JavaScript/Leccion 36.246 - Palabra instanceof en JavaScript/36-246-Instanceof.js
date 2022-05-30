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
   /* Primero poner objetos de menor jerarquia a mayor */
   if (tipo instanceof Gerente){
       console.log('Es un Objeto Gerente');
   }
   /*Los objetos hijos van a dar verdadero si se pregunta por tipo de objeto igual o superior - padre - para if individuales
    para ligar los casos y que responda correctamente se debe ordenar de menor a mayor jerarquia los objetos
   */
   else if (tipo instanceof Empleado){
       console.log('Es un Objeto Empleado');
   }
   else if (tipo instanceof Object){
       console.log('Es un tipo Object');
   }
}

let gerente1 = new Gerente('Sebastian',160000,'IT');
let empleado1 = new Empleado('Juan',240000);
imprimir(empleado1);
imprimir(gerente1);