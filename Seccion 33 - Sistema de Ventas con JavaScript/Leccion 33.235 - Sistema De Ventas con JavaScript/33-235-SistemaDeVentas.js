class Producto{
    static idProducto = 0;
    constructor(nombre,precio){
        this.nombre = nombre;
        this.precio = precio;
        this.idProd = ++Producto.idProducto;
    }
    get IdProducto(){
        return this.idProd;
    }
    get Nombre(){
        return this.nombre;
    }
    set Nombre(nombre){
        this.nombre = nombre;
    }
    get Precio(){
        return this.precio;
    }
    set Precio(precio){
        this.precio = precio;
    }
    toString(){
        return `
        Id Producto: ${this.idProd} 
        Nombre: ${this.nombre} 
        Precio: $${this.precio}`;
    }
}

class Orden{
    static contOrden = 0;
    static get MAX_PRODUCTOS(){
        return 5;
    }
    constructor(){
        this.prods = [];
        //this.contadorProdAgre = 0;
        this.ordenNRO = ++Orden.contOrden;
    }
    get idOrden(){
        return this.ordenNRO;
    }
    agregarProducto(producto){
        if(this.prods.length < Orden.MAX_PRODUCTOS){
            this.prods.push(producto);
            //this.prods[this.contadorProdAgre++] = producto;
        }else{
            console.log('No se puede agregar mas productos');
        }
    } 
    calcularTotal(){
        let total = 0;
        for(let producto of this.prods){
            total += producto.precio;
        }
        return total;
    }
    mostrarOrden(){
        let productoOrden = '';
        for (let producto of this.prods){
            productoOrden += producto.toString() + ' ';
        }
        console.log(`Orden: ${this.ordenNRO} Total: $${this.calcularTotal()}, Productos: ${productoOrden}`);
    }   
}

let producto1 = new Producto('Pantalon',200);
let producto2 = new Producto('Camisa',100);
let producto3 = new Producto('cinturon',50);
let orden1 = new Orden();
orden1.agregarProducto(producto1);
orden1.agregarProducto(producto2);
orden1.mostrarOrden();
let orden2 = new Orden();
orden2.agregarProducto(producto1);
orden2.agregarProducto(producto2);
orden2.agregarProducto(producto3);
orden2.agregarProducto(producto2);
orden2.agregarProducto(producto3);
orden2.agregarProducto(producto1);
orden2.mostrarOrden();