//5. Cree un programa que pregunte al usuario si desea salir, si o no “S/N”, si el usuario teclea la letra S el programa se detendrá, de lo contrario continuará ejecutándose.

//variable control
let salir = "n";

do {
    salir = prompt ("Desea salir?");
} while ( salir != "s");

