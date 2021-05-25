let numero = parseInt(prompt("Ingrese un número"));
numero = numero%5; 

switch (numero){
    case 0:
        console.log("El número es divisible entre 5");
        break;
    
    default:
        console.log("El número no es divisible entre 5");
}