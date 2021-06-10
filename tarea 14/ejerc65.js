// Diseña un programa que, dado un número entero, determine si  ́este es el doble de un número impar. (Ejemplo: 14 es el doble de 7, que es impar.)

function dobleImpar (num){
    let result;
    
    if((num/2)%2 === 0){
        result ="par";
    }else{
        result ="impar"; 
    }
    return result;
}
