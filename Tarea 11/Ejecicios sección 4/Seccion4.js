esTrianguloIf();
esTrianguloCase();
numero_par_impar();
numero_par_impar2();
divisiblecinco();
divisiblecinco2();
primo1_15();
primo1_15dos();


//funcion que lee tres angulos y dice si corresponden a un triangulo con if
function esTrianguloIf (){
   var primerAngulo = parseInt(prompt("ingrese el primer angulo"));
   var segundoAngulo = parseInt(prompt("ingrese el segundo angulo"));
   var tercerAngulo = parseInt(prompt("ingrese el tercer angulo"));
   if ((primerAngulo+segundoAngulo+tercerAngulo)==180){
       alert ("los angulos corresponden a un triangulo");
   }else{ alert("los angulos NO corresponden a un triangulo")}

}
//funcion que lee tres angulos y dice si corresponden a un triangulo con switch-case
function esTrianguloCase(){
    var primerAngulo = parseInt(prompt("ingrese el primer angulo"));
    var segundoAngulo = parseInt(prompt("ingrese el segundo angulo"));
    var tercerAngulo = parseInt(prompt("ingrese el tercer angulo"));
    var total=(primerAngulo+segundoAngulo+tercerAngulo);
    switch(total){
        case 180:
            alert ("los angulos corresponden a un triangulo");
            break
        default :
            alert("los angulos NO corresponden a un triangulo")   
    }


}
//funcion que lee un numero y dice si es par o impar usando if
function numero_par_impar(){
    var numero = parseInt(prompt("ingrese un numero"));
    numero = numero%2;
    if(numero==0){
        alert("el numero ingresado es par")
    }else{ alert("el numero ingresado NO es par")}

}
//funcion que lee un numero y dice si es par o impar usando switch-case
function numero_par_impar2(){
    var numero = parseInt(prompt("ingrese un numero"));
    numero = numero%2;
    switch(numero){
        case 0:
            alert("el numero ingresado es par")
            break
        default:
            alert("el numero ingresado NO es par")      
}
}
//funcion que lee un numero y dice si es divisible entre 5 o NO  usando if
function divisiblecinco(){
    var numero = parseInt(prompt("ingrese un numero"));
    numero = numero%5;
    if(numero==0){
        alert("el numero ingresado es divisible entre 5")
    }else{ alert("el numero ingresado NO es divisible entre 5")}

}
//funcion que lee un numero y dice si es divisible entre 5 o NO  usando if
function divisiblecinco2(){
        var numero = parseInt(prompt("ingrese un numero"));
        numero = numero%5;
        switch(numero){
            case 0:
                alert("el numero ingresado es divisible entre 5")
                break
            default:
                alert("el numero ingresado NO es divisible entre 5")      
    }

}
//funcion para decir si un numero entre 1-15 es primo o no 
function primo1_15 (){
    var numero = parseInt(prompt("ingrese un numero"));
    if (numero == 2||numero ==3||numero ==5||numero ==7||numero ==11||numero ==14){
        alert("el numero ingresado es un numero primo menor que 15")

    }else{ alert("el numero ingresado NO es un numero  primo menor que 15")}

}
//funcion para decir si un numero entre 1-15 es primo o no 
function primo1_15dos (){
    var numero = parseInt(prompt("ingrese un numero"));
    switch (numero){
        case 2:
            alert("el numero ingresado es un numero primo menor que 15")
        break;
        case 3:
            alert("el numero ingresado es un numero primo menor que 15")
        break;
        case 5:
            alert("el numero ingresado es un numero primo menor que 15")
        break;
        case 7:
            alert("el numero ingresado es un numero primo menor que 15")
        break;
        case 11:
            alert("el numero ingresado es un numero primo menor que 15")
        break;
        case 13:
            alert("el numero ingresado es un numero primo menor que 15")
        break;

        default : alert("el numero ingresado NO es divisible entre 5") 
    }
    
}
