//lectura de datos usamos prompt()
//lo que entra por teclado entra como string
//let nombre = prompt("ingrese nombre");
//console.log("...impresión sin concatenación");

//mostrar datos (imprimir)
//console.log(nombre);
//console.log("...impresión con concatenación");

//impprimir nombre con saludo
//console.log("Bienvenida:" , nombre);
//console.log("---conversión a entero---");

//programa se toma el precio de un producto y muestra su precio final con IVA del 19%

/*
Algoritmo Precio_final
    Entero precioProducto
    Real precioFinal
    Constante Real IVA = 0.19

    LEER(precioProducto)
    
    precioFinal= (precioProducto*IVA) + precioProducto

    IMPRIMIR(precioFinal)
FinAlgoritmo
*/
//usamos la palabra reservada const para declarar constantes
const IVA =0.19; 
//string sea convertido a entero
let precioProducto = parseInt(prompt('Introduzca precio del producto'));
//SI QUIERO CONVERTIR A FLOTANTE(DECIMALES) HAGO ParseFloat
//calculamos el precio final del producto ingresado por el usuario
let precioFinal = precioProducto*IVA + precioProducto;
//imprimimos el precio final
console.log ("precio final: ", precioFinal );

/*
###UNA VEZ SE HA DECLARADO CON let UNA VARIABLE, NO SE PUEDE DECLARAR OTRA CON EL MISMO NOMBRE EN EL MISMO AMBITO###
let nombre="Pedro";
let nombre= "juan";

###MANERA CORRECTA###
let nombre ="Juan";
nombre = "Pedro";
*/

