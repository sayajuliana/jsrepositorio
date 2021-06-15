// Dado el arreglo [1,2,3,4,5,6]
// ● Iterar por todos los elementos dentro del arreglo utilizando while y mostrarlos en pantalla.
// ● Iterar por todos los elementos dentro del arreglo utilizando el ciclo “for” y mostrarlos en pantalla.
// ● Mostrar todos los elementos dentro del arreglo sumándole uno a cada uno.
// ● Crear una copia del arreglo usando el ciclo “for” pero con todos los elementos incrementados en 1.
// ● Calcular el promedio de todos los elementos del arreglo

let numero =[1,2,3,4,5,6]; 

function print(numero) {
    let i=0;
    while ( i < numero.length){
        console.log(numero[i]); 
        i++; 
    }
}

function print1(numero) {
    for (i=0; i<numero.length; i++){
        console.log(numero[i]); 
    }
}

function print2(numero) {
    var numMasUno =0;
    numero.forEach(element => {
        numMasUno = element +1; 
        console.log(numMasUno);
    });
    
 }

 function copy(numero) {
    let copNum = numero.slice();
    let copia; 
     for (i=0; i< copNum.length; i++){
     copia = copNum[i] + 1; 
     console.log(copia); 
     }
  }

function promedio(numero) {
    let prom = 0; 
    let suma = 0;
    let cont = numero.length; 
    numero.forEach(element => {
        suma += element; 
        prom =(suma/cont); 
    });
     return prom; 
}