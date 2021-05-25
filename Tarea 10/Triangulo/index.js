/* 1.	Cree un programa que lea los tres ángulos internos de un triángulo y muestre si los ángulos corresponden a un triángulo o no. Realice una versión con condicionales y otra con estructura switch-case */
/* algoritmo triángulo
1. ingresar los ángulos 
2. convertir a entero
3. establecer si los ángulos corresponden a un triángulo
*/

let angulo1 = parseInt(prompt ("Ingrese el ángulo 1")); 
let angulo2 = parseInt(prompt ("Ingrese el ángulo 2"));
let angulo3 = parseInt(prompt ("Ingrese el ángulo 3")); 

if( angulo1+angulo2+angulo3 ==180){
    console.log("Es un triángulo");
} else {
    console.log("No es un triángulo");
}

