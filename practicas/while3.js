//Escriba un programa que pregunte una y otra vez si desea terminar el programa, siempre que se conteste exactamente N (en mayúsculas).

let respuesta; 

do {
    respuesta= prompt("Desea terminar el programa?"); 
} while (respuesta == "N");

