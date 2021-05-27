/* 
Algoritmo producto con IVA  
    INGRESAR precio del producto
    LEER precio del producto
    PROCESO multiplicar el precio del producto por el IVA  y sumarlo al precio del producto
    IMPRIMIR precio producto con IVA
fin
*/

function productoIva (precio, IVA){
    let prodIva = (precio * IVA) + precio;
    return prodIva;
}

let precio = parseInt(prompt("Ingrese el precio del producto")); 
let IVA = parseFloat(prompt("Ingrese el IVA"));
let precioIva = productoIva(precio, IVA);
console.log("El precio con iva es:", precioIva);
