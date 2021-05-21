/*ingresar el numero 1
leer el número 
ingresar el numero 2 
leer el número 
comparar el número 1 y el número 2 */ 

let numero1 = parseInt(prompt("Ingrese el primer número")); 
let numero2 = parseInt(prompt("Ingrese el segundo número"));

if (numero1 > numero2){
    console.log("el primer numero es mayor que el segundo");
} else {
    if (numero1 == numero2){
        console.log("el primer numero es igual al segundo numero");
    }
    else {
        if (numero1 < numero2){
            console.log("el segundo numero es mayor al primero numero");
    }
    }
}