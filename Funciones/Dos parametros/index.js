/* cree un programa que reciba dos números y muestre el mayor. En caso de que los números sean iguales también se debe mostrar al usuario*/

//función con dos parámetros a, b
function mayor (a, b){
    
     if (a == b){
     let mensaje = "no hay mayor";
     //retornamos mensaje y terminamos el trabajo de la función
     return mensaje;
    }
    console.log("-------");

    console.log("linea 8");
    if (a > b){
     let mensaje = "el mayor es a";
     return mensaje;
    }
    console.log("+++++");
     if (a < b){
    let mensaje = "el mayor es b";
    return mensaje;
    }

}

//guardamos el valor devuelto por la función en la variable mensajeFuncion
let mensajeFuncion = mayor ( 5, 5);
console.log ("Mayor:", mensajeFuncion);