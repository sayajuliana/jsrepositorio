/* 
Algoritmo valor absoluto de un numero
    INGRESAR ingresar numero
    LEER numero
    PROCESO aplicar valor absoluto del número
    IMPRIMIR valor absoluto del número
fin
*/

function valorAbsoluto (numero){
    let valorAbs = (Math.sqrt(numero*numero)); 
    return valorAbs;
}

let numero = parseInt (prompt("Ingrese un número")); 
let valAbsoluto = valorAbsoluto(numero); 
console.log ("El valor absoluto del número es", valAbsoluto);