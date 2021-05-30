//Cree un programa que imprima la tabla de multiplicar del 3, del 0 al 50. Use ciclo for. Use funciones. 

function multiplicar() {
    
    var multiplicacion;
    
    for(var n=0 ; n <= 50; n++ ){
       multiplicacion= n*3;
       console.log(multiplicacion);
    }
}

multiplicar();