class CarritoCompra {
    constructor() {
        this.productos = [];
      }
    
      agregarProducto(producto) {
        this.productos.push(producto);
      }
    
      calcularTotal() {
        return this.productos.reduce((total, producto) => total + producto.precio, 0);
      }
    
      aplicarDescuento(porcentaje) {
        const descuento = this.calcularTotal() * (porcentaje / 100);
        return this.calcularTotal() - descuento;
      }
}

module.exports = CarritoCompra;