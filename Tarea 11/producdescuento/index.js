/* 
Algoritmo Producto con descuento
    INGRESAR precio del producto 
    LEER precio del producto
    PROCESO sacar el 10% del precio del producto y restarlo al precio inicial
    IMPRIMIR precio del producto con descuento
fin
*/

function precioDescuento(precio, descuento){
    let valor = ((precio*descuento)+precio);
    return valor; 
}

let precio = parseInt(prompt("Ingrese el precio del producto"));
let descuento = parseFloat(prompt("Ingrese el descuento"));

let valorDescuento = precioDescuento (precio, descuento);
console.log("El valor de su producto es:", valorDescuento);