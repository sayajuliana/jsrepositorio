// Un capital de C euros a un interés del x por cien anual durante n años se convierte en C·(1 +(x/100))^n euros. Diseña un programa que solicite la cantidad C y el interés x y calcule el capital final solo si x es una cantidad positiva.

function capital(c, x, n){
    if (x<0){
        return 0;
    }
    let capital = c*Math.pow (1+(x/100), n);
    return capital; 
}