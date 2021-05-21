/* 
Algoritmo Área de un triangulo 
    INGRESAR base del triángulo
    LEER base del triángulo
    INGRESAR altura del triángulo 
    LEER altura del triángulo 
    PROCESO multiplicar base por altura 
    IMPRIMIR área del triángulo
fin
*/

let base = parseInt(prompt("Ingrese la base"));
let altura = parseInt(prompt("Ingrese la altura"));

let areaTriangulo= ((base*altura)/2); 
console.log(areaTriangulo);