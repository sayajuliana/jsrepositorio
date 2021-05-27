/* Cree un programa que lea los tres ángulos internos de un triángulo y muestre si los ángulos corresponden a un triángulo o no.*/ 

//funcion con 3 parametros que retorna un booleano
function esTriangulo (anguloA, anguloB, anguloC){
    let suma = anguloA + anguloB + anguloC
    if( suma == 180){
        return true;
    }
    return false;
}
//pedimos al usuario los tres ángulos para pasarlos como argumentos a la función

let angulo1 = parseInt(prompt("Ingrese ángulo 1")); 
let angulo2 = parseInt(prompt("Ingrese ángulo 2")); 
let angulo3 = parseInt(prompt("Ingrese ángulo 3"));

//pasamos los ángulos como argumento y guardamos el retorno de la función en la variable estadoTriangulo y se evalúa el valor devuelto por la función mediante condicionales, ya que el valor  de retorno es un booleano

let estadoTriangulo = esTriangulo (angulo1, angulo2, angulo3);
if(estadoTriangulo) {
    console.log("Es un triángulo");
} else {
    console.log ("No es un triángulo");
}
    
