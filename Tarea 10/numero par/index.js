/* Cree un programa que lea un número y muestre si este es par o impar. Realice una versión con condicionales y otra con estructura switch-case*/

/* algoritmo 
1. pedir un número
2. cambiar el número a entero
3. comparar si el número es par o no
4. Decidir y mostrar un mensaje al usuario que diga si
el número es par */

let numero = parseInt(prompt ("Ingrese un número")); 

if ( numero %2 == 0){
       console.log ("El número es par");
}