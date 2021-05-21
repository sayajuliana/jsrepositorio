/* 
Algoritmo volumen del cubo 
    INGRESAR medida del lado del cubo 
    LEER lado del cubo
    PROCESO multiplicar lado por lado por lado
    IMPRIMIR volumen del cubo
fin
*/


let lado = parseInt(prompt("Ingrese el lado del cubo"));

let volumenCubo = (lado*lado*lado);
console.log(volumenCubo);