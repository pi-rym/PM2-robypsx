const CarritoCompra = require("../index");

describe("CarritoCompra", () => {
    let carrito;
  
    beforeEach(() => {
      carrito = new CarritoCompra();
    });
  
    test("Inicialización del carrito", () => {
      expect(carrito.productos).toEqual([]);
    });
  
    test("Agregar producto al carrito", () => {
      carrito.agregarProducto({ nombre: "Producto 1", precio: 10 });
      expect(carrito.productos.length).toBe(1);
      expect(carrito.productos[0].nombre).toBe("Producto 1");
      expect(carrito.productos[0].precio).toBe(10);
    });
  
    test("Calcular total de la compra", () => {
      carrito.agregarProducto({ nombre: "Producto 1", precio: 10 });
      carrito.agregarProducto({ nombre: "Producto 2", precio: 20 });
      expect(carrito.calcularTotal()).toBe(30);
    });
  
    test("Aplicar descuento al total de la compra", () => {
      carrito.agregarProducto({ nombre: "Producto 1", precio: 10 });
      carrito.agregarProducto({ nombre: "Producto 2", precio: 20 });
      expect(carrito.aplicarDescuento(10)).toBe(27); // Descuento del 10%
      expect(carrito.aplicarDescuento(20)).toBe(24); // Descuento del 20%
    });
  });