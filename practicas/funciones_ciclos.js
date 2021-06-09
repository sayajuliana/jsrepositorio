let numero1= parseFloat(prompt("Ingrese limite Inferior")); 
let numero2= parseFloat(prompt("Ingrese limite superior")); 
// asumimos que el numero mayor es el primero 


function numeroMayor(lInf, lSup){
    let limiteInferior= lInf; 
    let limiteSuperior= lSup; 
    let numeroMayor = limiteInferior;
    while (limiteInferior <= limiteSuperior) {
        
        if (limiteInferior > numeroMayor){
        numeroMayor = limiteInferior;  
    }
    console.log("Numero:", limiteInferior);
    limiteInferior++; 
}
return numeroMayor; 

}
let valorMayor= numeroMayor(numero1, numero2);
console.log ("El numero mayor es:", valorMayor); 