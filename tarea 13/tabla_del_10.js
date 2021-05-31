// Cree un programa que muestre la tabla de multiplicar del 10, del 1 al 50. 

function multiplicar() {
    
    var numero = 1;
    var multiplicacion;
    while (numero <=50) {
        multiplicacion = numero*10;
        numero ++; 
        console.log (multiplicacion);  
    }

}

multiplicar();