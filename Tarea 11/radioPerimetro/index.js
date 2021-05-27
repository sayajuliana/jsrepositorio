/* 
Algoritmo Área y perímetro de un circulo 
    INGRESAR radio 
    LEER radio
    perimetro del circulo multiplicar 2*pi*radio
    afea del circulo multiplicar pi*radio^2
    IMPRIMIR área y perímetro del ciruclo
fin
*/
let PI= Math.PI

function areaCirculo (radio){
    let areaC = PI * radio*radio; 
    return areaC; 
}

let radio = parseInt (prompt ("Ingrese el valor del radio"));
let area = areaCirculo (radio);

console.log ("El área del circulo es:", area);  

function perimetroCirculo (radio){
    let perimetroC = radio*PI*2;
    return perimetroC; 
}

let perimetro = perimetroCirculo (radio);
console.log ("El perimetro del circulo es:", perimetro);  