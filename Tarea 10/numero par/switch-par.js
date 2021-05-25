let numero = parseInt(prompt ("Ingrese un número")); 
numero = numero % 2; 

switch(numero){
       case 0:
              console.log("el número es par");
              break;
       default:
              console.log ("el número es impar");   
}