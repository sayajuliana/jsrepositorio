let angulo1 = parseInt(prompt ("Ingrese el ángulo 1")); 
let angulo2 = parseInt(prompt ("Ingrese el ángulo 2"));
let angulo3 = parseInt(prompt ("Ingrese el ángulo 3")); 
 
var suma = angulo1+angulo2+angulo3;

switch (suma){
    case 180:
    console.log ("Es un triángulo"); 
    break; 

    default:
    console.log ("Ingrese ángulos válidos");
    break; 
}
