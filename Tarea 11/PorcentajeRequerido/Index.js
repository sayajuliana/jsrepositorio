/* 
Algoritmo porcentaje de una cantidad
    INGRESAR el valor deseado
    LEER valor deseado
    INGRESAR porcentaje que desea calcular
    LEER porcentaje
    PROCESO multiplicar el valor por el porcentaje y dividir entre 100 el resultado
    IMPRIMIR porcentaje requerido
fin
*/

function valorDescuento (precio, porcentaje){
    let descuento = ((precio*porcentaje)/100);
    return descuento;
}

let precio = parseInt(prompt("Ingrese el precio deseado"));
let porcentaje = parseInt(prompt("Ingrese el porcentaje deseado")); 

let descuento = valorDescuento(precio, porcentaje);  
console.log("El valor de su descuento es:", descuento);