/*ingresar producto
leer producto 
comparar el producto ingresado para determinar si paga o no IVA  */ 

let producto = prompt  ("Ingrese nombre del producto"); 
producto = producto.toLowerCase();
let producto1 = "lentejas";
let producto2 = "crema";
let producto3 = "arroz";
let producto4 = "vino";

if (producto == producto1 || producto == producto3){
    console.log("no paga IVA");
}  else {
    console.log ("paga IVA");
}