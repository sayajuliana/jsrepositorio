/* 
Algoritmo volumen del cubo 
    INGRESAR medida del lado del cubo 
    LEER lado del cubo
    PROCESO multiplicar lado por lado por lado
    IMPRIMIR volumen del cubo
fin
*/

function volCubo (lado){
    let volumen = lado*lado*lado;
    return volumen;
}

let lado =  parseInt(prompt ("Ingrese lado del cubo"));

let volumenCubo = volCubo(lado); 
console.log (volumenCubo);

