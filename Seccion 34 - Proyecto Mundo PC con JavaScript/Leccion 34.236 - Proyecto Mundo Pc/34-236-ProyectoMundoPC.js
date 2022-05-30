class DispositivoEntrada{
    constructor(tipoEntrada,marca){
        this.tipoEntrada = tipoEntrada;
        this.marca = marca;
    }
    get TipoEntrada(){
        return this.tipoEntrada;
    }
    set TipoEntrada(tipoEntrada){
        this.tipoEntrada = tipoEntrada;
    }
    get Marca(){
        return this.marca;
    }
    set Marca(marca){
        this.marca = marca;
    }
}

class Raton extends DispositivoEntrada{
    static idRaton = 0;
    constructor(tipoEntrada,marca){
        super(tipoEntrada,marca);
        this.IdRaton = ++Raton.idRaton;
    }
    get IDRaton(){
        return this.IdRaton;
    }
    toString(){
        return `
        ID Raton: ${this.IdRaton}
        Tipo Entrada: ${this.tipoEntrada}
        Marca: ${this.marca}
        `;
    }
}

class Teclado extends DispositivoEntrada{
    static idTeclado = 0;
    constructor(tipoEntrada,marca){
        super(tipoEntrada,marca);
        this.IdTeclado = ++Teclado.idTeclado;
    }
    get IDTeclado(){
        return this.IdTeclado;
    }
    toString(){
        return `
        ID Teclado: ${this.IdTeclado}
        Tipo Entrada: ${this.tipoEntrada}
        Marca: ${this.marca}
        `;
    }
}

class Monitor{
    static idMonitor = 0;
    constructor(marca,tamanio){
        this.IdMonitor = ++Monitor.idMonitor;
        this.marca = marca;
        this.tamanio = tamanio;
    }
    get IDMonitor(){
        return this.IdMonitor;
    }
    get Marca(){
        return this.marca;
    }
    set Marca(marca){
        this.marca = marca;
    }
    get Tamanio(){
        return this.tamanio;
    }
    set Tamanio(tamanio){
        this.tamanio = tamanio;
    }
    toString(){
        return `
        ID Monitor: ${this.IdMonitor}
        Marca: ${this.marca}
        Tamaño: ${this.tamanio}
        `;
    }
}

class Computadora{
    static idComputadora = 0;
    constructor(nombre,monitor,teclado,raton){
        this.IdComputadora = ++Computadora.idComputadora;
        this.nombre = nombre;
        this.monitor = monitor;
        this.teclado = teclado;
        this.raton = raton;
    }
    get IDComputadora(){
        return this.IdComputadora;
    }
    get Nombre(){
        return this.nombre;
    }
    set Nombre(nombre){
        this.nombre = nombre;
    }
    toString(){
        return `

        ID Computadora: ${this.IdComputadora}
        Nombre: ${this.nombre}

        Monitor ${this.monitor}
        Teclado ${this.teclado}
        Raton ${this.raton}
        `;
    }

}

class Orden{
    static idOrden = 0;
    constructor(){
        this.IdOrden = ++Orden.idOrden;
        this.computadora = [];
    }
    get IDOrden(){
        return this.IdOrden;
    }
    agregarComputadora(comp){
        this.computadora.push(comp);
    }
    mostrarOrden(){
        let listOrden = '';
        for (let comp of this.computadora){
            listOrden += `${comp}`;/*Este uso de variable llama al metodo toString del objeto - otra opcion es usar comp.toString()*/
        }
        console.log(`Orden: ${this.IdOrden}, Computadoras: ${listOrden}`);
    }
}

let monitor1 = new Monitor('Samsung',23);
let teclado1 = new Teclado('USB','Logitech');
let raton1 = new Raton('USB','RedDragon');
let monitor2 = new Monitor('Asus',29);
let teclado2 = new Teclado('USB','RedDragon');
let raton2 = new Raton('USB','Cooler Master');
let compu1 = new Computadora('Sebastian',monitor1,teclado1,raton1);
//console.log(compu1.toString());
let compu2 = new Computadora('Marly',monitor2,teclado2,raton2);
let orden1 = new Orden();
let orden2 = new Orden();
let orden3 = new Orden();
orden1.agregarComputadora(compu1);
orden1.agregarComputadora(compu2);
orden2.agregarComputadora(compu1);
orden3.agregarComputadora(compu2);
orden1.mostrarOrden();
orden2.mostrarOrden();
orden3.mostrarOrden();