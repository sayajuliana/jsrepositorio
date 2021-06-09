//Escriba un programa que simule una hucha. El programa solicitará primero una cantidad, que será la cantidad de dinero que queremos ahorrar. A continuación, el programa solicitará una y otra vez las cantidades que se irán ahorrando, hasta que el total ahorrado iguale o supere al objetivo. 

var objetivo = parseFloat(prompt("Ingrese la cantidad que desea ahorrar"));
var ahorro=0;
var valor; 

function ahorrar(objetivo, valor, ahorro) {
    do {
        valor = parseFloat(prompt("Ingrese el valor a guardar"));
        if(valor<=0){
            alert("Ingrese un dato valido");}
        else{
            ahorro += valor;}     
    } while (ahorro < objetivo);
    
    alert("alcanzo el objetivo de ahorro");
}

ahorrar(objetivo, valor, ahorro);
