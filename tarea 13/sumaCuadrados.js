//Cree un programa que calcule la suma de los cuadrados de los números entre 1 y n.

let n = parseInt (prompt("Ingrese un número"));  
let sumaCuadrados = 0;
let numero = 1; 

while (numero <= n) {
    cuadrado = n*n;
    sumaCuadrados += cuadrado; 
    numero ++; 
}
console.log (sumaCuadrados);