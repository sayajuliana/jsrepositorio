/* 
Algoritmo producto con IVA  
    INGRESAR precio del producto
    LEER precio del producto
    PROCESO multiplicar el precio del producto por el IVA  y sumarlo al precio del producto
    IMPRIMIR precio producto con IVA
fin
*/
//Parametro por defecto se establece el parámetro con un valor por defecto y cuando se llama la función y se ejecute trabaja con el valor establecido por defecto 

//los parámetros obligatorios van primero, luego van los parámetros predeterminados o con valores por defecto. 

function productoIva (precio, iva=0.19){
    let prodIva = (precio * iva) + precio;
    return prodIva;
}
console.log("-------ProdIva------");

//función con parámetro predeterminado 
//
let precio = parseInt(prompt("Ingrese el precio del producto")); 

let precioIva = productoIva(precio);
console.log("El precio con iva es:", precioIva);


function gravedad (planeta, gravedad=9.8){
    let mensaje = `La gravedad en el planeta ${planeta} es ${gravedad}`; 
    console.log("-------gravedad------");
    console.log(mensaje);
}
gravedad("tierra");
