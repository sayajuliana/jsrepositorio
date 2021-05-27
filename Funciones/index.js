/* Cree una funcion que tenga por parametro un numero y retorne su cuadrado
*/
//función de parámetro x que retorna el cuadrado de x
function cuadrado (x){
    //bloque de isntrucciones de la función 
    //definimos la variable que almacenará el cuadrado de x
    let cuadradoNumero = x*x;
    //el retorno marca la terminación deltrabajo de la función. 
    //Retronamos el valor de cuadradoNumero
    return cuadradoNumero;
}

//las funciones se llaman por su nombre y se usan parentesis () para invocarlas y pasar argumentos si se requieren. 
//para que una función trabaje hay que llamarla.
//llamamos la función evaluada y cuardamos el retorno en la variable valor función  
let valorFuncion = cuadrado(6); 
console.log("Retorno:", valorFuncion);