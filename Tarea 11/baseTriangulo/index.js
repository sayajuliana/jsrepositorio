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

function areaTriangulo (base, altura){
    let area = (base*altura)/2
    return area;
}

let base = parseInt ( prompt("Ingrese el valor de la base") );
let altura = parseInt ( prompt("Ingrese el valor de la altura"));

let area = areaTriangulo(base, altura);
console.log ("El área del triángulo es:", area);