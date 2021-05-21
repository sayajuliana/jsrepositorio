/*
algoritmo Edad en el Futuro 
    INGRESAR edad de usuario
    LEER edad de usuario
    INGRESAR  años que desee saber 
    IMPRIMIR  edad en el futuro
fin 
*/

let edadUsuario = parseInt(prompt("Ingrese su Edad"));
let años = parseInt(prompt("Ingresa los años que quiere agregar a su edad"));

let edadFuturo = (edadUsuario + años);
console.log(edadFuturo);
