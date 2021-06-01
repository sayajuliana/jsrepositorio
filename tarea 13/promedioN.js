//Cree un programa que muestre el promedio de n números, dejándose de solicitar números cuando se introduzca el cero.


var promedio = 0;
var contador=0;
var n;
do {
    n= parseFloat (prompt ("Introducir numero"));
    if (n == 0){
        break;
    }
    promedio += n;    
    contador ++;    
} while ( n != 0);
promedio /= contador;
console.log (promedio);


