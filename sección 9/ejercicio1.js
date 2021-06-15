//Cree un programa que use una función de un parámetro, a la cual se le pase como argumento un arreglo, de tal manera que la función retorne la longitud(número de elementos) del arreglo.

let numeros =[]; 


function tamArreglo (numeros) {
    
    for (let i=0 ; i <= 4; i++ ){
        let numUsuario = parseInt (prompt("ingrese un número"));
        numeros.push(numUsuario); 
        console.log("El estado del arrelo es: ", numeros);
    }
    let tamañoArreglo = numeros.length; 

    return tamañoArreglo; 
    }
   