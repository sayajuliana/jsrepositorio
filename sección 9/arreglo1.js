//Cree un programa que implemente una función que reciba como argumento un arreglo y retorne la suma de los cuadrados de sus elementos, luego, imprima el resultado.

var numeros = [1, 2, 4, 7, 9]; 


function squares(numeros) {

    var sumaCuadrados= 0;
    numeros.forEach(element => {
        sumaCuadrados += Math.pow(element, 2); 
        
    });
    return sumaCuadrados;
    }

