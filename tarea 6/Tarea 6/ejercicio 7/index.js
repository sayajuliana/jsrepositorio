/* 
Algoritmo producto con IVA  
    INGRESAR precio del producto
    LEER precio del producto
    PROCESO multiplicar el precio del producto por el IVA  y sumarlo al precio del producto
    IMPRIMIR precio producto con IVA
fin
*/

let precioProducto = parseInt(prompt("Ingrese precio producto"));
const IVA = 0.19;

let productoIva = ((precioProducto*IVA)+precioProducto);
console.log(productoIva);