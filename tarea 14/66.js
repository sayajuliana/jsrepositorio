// Diseña un programa que, dados dos números enteros, muestre por pantalla uno de estos mensajes:((El segundoes el cuadrado exacto del primero.)),((El segundo es menor que el cuadrado del primero.))o((El segundo esmayor que el cuadrado del primero.)), dependiendo de la verificación de la condición correspondiente al significado decada mensaje.

function mensaje(a, b){

    if((b*b)===a){
        console.log("el segundo es el cuadrado exacto del primero");
    }
    if((a*a) >b){
        console.log("el segundo es menor que el cuadrado del primero");
    }
    if((a*a)<(b)){
        console.log("el segundo es mayor que el cuadrado del primero");
    }

}
