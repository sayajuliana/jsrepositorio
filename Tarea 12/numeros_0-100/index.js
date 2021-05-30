// Cree un programa que imprima los números enteros entre 0 y 100 en orden ascendente y descendente. Use ciclo for. Use funciones.

console.log("-----ascendente-----")

let numero = 0;
function numeros_0_100 (numero){
    for (numero = 0; numero <= 100; numero++ ){
       console.log (numero);
    }    
}
numeros_0_100(numero); 

console.log("-----descendente-----")

let numeros = 100;
function numeros_100_0 (numeros){
    for (numeros = 100; numeros >= 0; numeros-- ){
       console.log (numeros);
    }    
}
numeros_100_0(numeros); 
