class Cliente extends Persona{
    static ContCliente = 0;
    constructor(nombre,apellido,edad,fechaRegistro){
        super(nombre,apellido,edad);
        this.fechaRegistro = new Date(fechaRegistro);
        this.IdCliente = ++Cliente.ContCliente;
    }
    get idCliente(){
        return this.IdCliente;
    }
    get FechaRegistro(){
        return this.fechaRegistro;
    }
    set FechaRegistro(fechaRegistro){
        this.fechaRegistro = fechaRegistro;
    }
    toString(){
       return `${super.toString()}.
        Idcliente: ${this.IdCliente} 
        Fecha de registro: ${this.fechaRegistro}`;
    }

}