/*ingresar el número 1
leer el número 
ingresar el número 2 
leer el número 
ingresr el número 3
leer el número
comparar los tres números */ 

let numero1 = parseInt(prompt("Ingrese el primer número")); 
let numero2 = parseInt(prompt("Ingrese el segundo número"));
let numero3 = parseInt(prompt("Ingrese el tercer número"));

if (numero1 > numero2 && numero1 > numero3){
    console.log("el primer numero es mayor");
} else {
    if (numero1 == numero2 == numero3){
        console.log("los numeros son iguales");
    }
    else {
        if (numero1 < numero2 && numero2< numero3){
            console.log("el tercer numero es mayor");
    }
     else {
        if (numero2> numero1 && numero2>numero3){
            console.log("el segundo numero es mayor");
        }
    }
    }
}