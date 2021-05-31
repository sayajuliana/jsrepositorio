//Cree un programa que calcula la suma de los primeros n números naturales. 

let n = parseInt(prompt("Ingrese un número")); 

function suma (n){

    var numero= 0;
    var suma = 0; 
    while (numero <= n ) {
        suma += numero;
        numero ++; 
    }
    console.log (suma); 
}

suma  (n);
