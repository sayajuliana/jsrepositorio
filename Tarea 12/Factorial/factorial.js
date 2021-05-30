//Cree un programa que dado un número entero n, calcule su factorial(n!). Use ciclo for. Use funciones.

let n = parseInt(prompt ("Ingrese un número")); 

function factorial (n){
    var fact = 1;
    for (var i= 1; i<= n; i++){
        fact *= i;
    }
    console.log (fact);
}

factorial (n); 