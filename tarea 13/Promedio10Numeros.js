//Cree un programa que calcule el promedio de 10 números. 

let numero;
let promedio = 0;
let contador = 1; 
while ( contador <= 10 ){
    numero= parseFloat (prompt("Ingrese un número"));
    promedio += numero;
    contador ++; 
}
promedio /= contador;
console.log (promedio);