/* 
Algoritmo Área y perímetro de un circulo 
    INGRESAR radio 
    LEER radio
    perimetro del circulo multiplicar 2*pi*radio
    afea del circulo multiplicar pi*radio^2
    IMPRIMIR área y perímetro del ciruclo
fin
*/

let radio = parseInt(prompt("Ingrese el radio")); 
const PI = Math.PI;

let perimetroCirculo = (2*PI*radio);
let areaCirculo = (PI*(radio^2));
console.log (perimetroCirculo);
console.log(areaCirculo);
 