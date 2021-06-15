// Usando el ciclo “for” Calcular el promedio de todos los elementos del arreglo

let numeros =[]; 

function promedio(numeros) {
    
    for (let i=0 ; i <= 9; i++ ){
        let numUsuario = parseInt (prompt("ingrese un número"));
        numeros.push(numUsuario); 
        console.log("El estado del arrelo es: ", numeros);
    }
    let suma = 0;
    let prom = 0; 
    let cont = numeros.length; 

    for (let i=0; i<numeros.length; i++){

            suma += numeros[i]; 
            prom = suma/cont; 
        } 
        console.log(prom); 

    }
  