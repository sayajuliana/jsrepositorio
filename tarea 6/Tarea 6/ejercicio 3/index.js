/* algoritmo Prestamo 
    INGRESAR entero monto prestamo
    LEER monto prestamo
    INGRESAR entero plazo del prestamo
    LEER plazo del prestamo
    INGRESAR constante interés 
    PROCESAR valor de las cuotas
fin 
*/

let valorPrestamo = parseInt(prompt("ingrese valor del prestamo"));
let plazoPrestamo = parseInt(prompt("ingresar plazo en meses")); 
const INTERES = 0.027;

let valorCuotas = ((valorPrestamo*INTERES)+(valorPrestamo/plazoPrestamo));
console.log(valorCuotas);
