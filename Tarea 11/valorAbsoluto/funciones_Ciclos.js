//Cree una función que imprima los números enteros entre a y b (tomando a y b)) y muestre el mayor de todos.
let limiteInferior= parseFloat(prompt("Ingrese limite Inferior")); 
let limiteSuperior= parseFloat(prompt("Ingrese limite superior")); 
// asumimos que el numero mayor es el primero 
let numeroMayor = limiteInferior;

while (limiteInferior <= limiteSuperior) {
    if (limiteInferior > numeroMayor){
        numeroMayor = limiteInferior;  
    }
    console.log("Numero:", limiteInferior);
    limiteInferior++; 
}
 

// numeroMayor(a, b){

//}