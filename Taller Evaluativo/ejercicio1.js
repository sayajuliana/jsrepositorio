//let y var es para declarar la variable 
let edad = parseInt (prompt("Ingrese su edad")); 


//función, son instrucciones para realizar un procedimiento
function mostrarEdad(edad) {
    switch (edad) {
        case 15:
            console.log ("Usted tiene 15 años"); 
            break;
        case 20: 
            console.log ("Usted tiene 20 años"); 
            break;
        case 30:
            console.log ("Usted tiene 30 años"); 
            break;
        default: 
        console.log ("Ingrese una edad válida")
            break;
    }
}


