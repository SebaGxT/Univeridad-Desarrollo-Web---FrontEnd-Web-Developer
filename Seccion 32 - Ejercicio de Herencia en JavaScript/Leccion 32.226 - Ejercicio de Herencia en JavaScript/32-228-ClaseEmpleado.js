class Empleado extends Persona{
    static ContEmpleado = 0;
    constructor(nombre,apellido,edad,sueldo){
        super(nombre,apellido,edad);
        this.sueldo = sueldo;
        this.IdEmpleado = ++Empleado.ContEmpleado;
    }
    get idEmpleado(){
        return this.IdEmpleado
    }
    get Sueldo(){
        return this.sueldo;
    }
    set Sueldo(sueldo){
        this.sueldo = sueldo;
    }
    toString(){
      return `
      ${super.toString()}
        IdEmpleado: ${this.IdEmpleado}
        Sueldo: ${this.sueldo}`; 
    }
}