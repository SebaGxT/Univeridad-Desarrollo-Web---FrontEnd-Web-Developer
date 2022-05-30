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

let producto1 = new Producto('Coca Cola',255.50);
console.log(producto1.toString());
let producto2 = new Producto('Pepsi',240);
console.log(producto2.toString());
let producto3 = new Producto('jabon',98);
console.log(producto3.toString());
let producto4 = new Producto('desodorante',143.50);
console.log(producto4.toString());