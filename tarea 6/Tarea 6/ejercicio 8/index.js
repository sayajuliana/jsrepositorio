/* 
Algoritmo Producto con descuento
    INGRESAR precio del producto 
    LEER precio del producto
    PROCESO sacar el 10% del precio del producto y restarlo al precio inicial
    IMPRIMIR precio del producto con descuento
fin
*/


let precioProducto = parseInt(prompt("Ingresa precio del producto"));
const DESCUENTO = 0.10; 

let precioDescuento = (precioProducto - (precioProducto*DESCUENTO));

console.log(precioDescuento);