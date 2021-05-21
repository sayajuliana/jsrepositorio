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

let cantidad = parseInt(prompt("Ingrese el valor deseado"));
let porcentaje = parseInt(prompt("Ingrese el procentaje deseado"));

let porcentajeRequerido = ((cantidad * porcentaje)/100);

console.log(porcentajeRequerido);