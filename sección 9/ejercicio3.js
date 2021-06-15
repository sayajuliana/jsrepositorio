// Cree un programa que implemente una función que reciba como argumento un arreglo y retorne la suma de los cuadrados de sus elementos, luego, imprima el resultado

let numeros =[]; 

function squares(numeros) {
    
    for (let i=0 ; i <= 9; i++ ){
        let numUsuario = parseInt (prompt("ingrese un número"));
        numeros.push(numUsuario); 
        console.log("El estado del arrelo es: ", numeros);
    }
    var sumaCuadrados= 0;
    
    numeros.forEach(element => {
        sumaCuadrados += Math.pow(element, 2); 
        
    });
    return sumaCuadrados;

    }
  