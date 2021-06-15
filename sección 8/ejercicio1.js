// Dado el siguiente arreglo [ [1, 2, 3], [4, 5, 6], [7, 8, 9] ]:
// Iterar por todos los elementos del arreglo utilizando while y mostrarlos en pantalla.
// Iterar por todos los elementos del arreglo utilizando el ciclo “for” y mostrarlos en pantalla.
// Crear otro arreglo que sea idéntico al arreglo dado, pero con todos los elementos incrementados en 1. 
//Para esto debe usar ciclo for y a través de iteraciones ir formando el nuevo arreglo con sus elementos tal cual se piden.
// Usando el ciclo “for” Calcular el promedio de todos los elementos del arreglo

let numeros =[ [1, 2, 3], [4, 5, 6], [7, 8, 9] ]; 

function print(numeros) {
    let i=0;
    let j=0; 
    while ( i < numeros.length){
        i++; 
        while (j < numeros.length[i]) {
            j++;
            console.log(numeros[i][j]);
        }
    }
    console.log (numeros); 
}

function print1(numeros) {

    for (let i=0; i<numeros.length; i++){

        for(let j=0; j<numeros[i].length; j++){

            console.log(numeros[i][j]); 
        } 
    }
}

function print2(numeros) {

    let copiaNum = numeros.slice(); 
    let copia; 
    for (let i=0; i<copiaNum.length; i++){

        for(let j=0; j<copiaNum[i].length; j++){

            copia = copiaNum[i][j]+1; 
            console.log(copia); 

        } 
    }
 }


function promedio(numeros) {
    let suma = 0;
    let prom = 0; 
    let cont = (numeros.length*3); 
    for (let i=0; i<numeros.length; i++){

        for(let j=0; j<numeros[i].length; j++){
            suma += numeros[i][j]; 
            prom = suma/cont; 
        } 
    }
    console.log(prom); 
}
