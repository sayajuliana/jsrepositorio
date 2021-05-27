/* cree una función que retorne Hola Mundo, que no use parámetros*/

function holaMundo(){
    let mensaje = "Hola Mundo";
    return mensaje;
}
//Guardamos el valor funcional devuelto por holaMundo en la variable mensajeFuncion
let mensajeFuncion = holaMundo();
console.log("Mensaje:", mensajeFuncion)