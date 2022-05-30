class orden{
    static contOrden = 0;
    static get MAX_PRODUCTOS(){
        return 5;
    }
    constructor(){
        this.prods = [];
        //this.contadorProdAgre = 0;
        this.ordenNRO = ++orden.contOrden;
    }
    get idOrden(){
        return this.ordenNRO;
    }
    agregarProducto(producto){
        if(this.prods.length < orden.MAX_PRODUCTOS){
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
            productosOrden += producto.toString() + ' ';
        }
        console.log(`Orden: ${this.ordenNRO} Total: ${this.calcularTotal()}, Productos: ${productoOrden}`);
    }   
}