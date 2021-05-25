/*Cree un programa que lea un número y muestre si este  es divisible entre cinco o no. Realice una versión con condicionales y otra con estructura switch-case.

Algoritmo
1. Ingresar número 
2. convertir el número en entero
3. comparar si el número es divisible entre 5
4. mostrar al usuario si el número es divisible entre 5 */

let numero = parseInt(prompt("Ingrese un número"));

if (numero%5==0){
    console.log ("El número es divisible entre 5");
}else{
    console.log ("El número no es divisible");
}