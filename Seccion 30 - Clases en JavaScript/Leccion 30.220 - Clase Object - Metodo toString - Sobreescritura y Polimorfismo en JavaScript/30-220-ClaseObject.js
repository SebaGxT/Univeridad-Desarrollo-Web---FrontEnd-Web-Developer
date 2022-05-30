//JS extiende la clase a Object ya que es la clase padre de todas las clases, si no se especifica se agrega de forma implicita
//class Persona extends Object
class Persona{
    constructor(nombre,apellido){
        this.nombre = nombre;
        this.apellido = apellido;
    }

    get obtenerNombre(){
        return this.nombre;
    }

    get obtenerApellido(){
        return this.apellido;
    }

    set modificarNombre(nombre){
        this.nombre = nombre;
    }

    set modificarApellido(apellido){
        this.apellido = apellido;
    }

    nombreCompleto(){
        return this.nombre + ' ' + this.apellido;
    }
    //Sobreescritura del metodo de la clase padre Object
    toString(){
        /*
        Se aplica polimorfismo (multiples formas en tiempo de ejecucion)
        el metodo que se ejecuta depende si es una referencia de tipo padre o de tipo hijo
        */
        return this.nombreCompleto();
    }
}

class Empleado extends Persona{
    constructor(nombre,apellido,departamento){
        super(nombre,apellido);
        this.departamento = departamento;
    }
    
    get obtenerDepartamento(){
        return this.departamento;
    }

    set modificarDepartamento(departamento){
        this.departamento = departamento;
    }
    nombreCompleto(){
        return super.nombreCompleto() + ', ' + this.departamento;
    }
}

let persona1 = new Persona('Sebastian Omar','de la Vega');
console.log(persona1.toString());

let empleado1 = new Empleado('Sebastian Omar','de la Vega','Sistemas');
console.log(empleado1.toString());//en Navegador se impre [object,Object] si no se sobreescribe con un metodo para imprimir
