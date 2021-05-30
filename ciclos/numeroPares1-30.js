//cree un programa que muestre los números pares entre 1 y 30

/*
Esto tiene lógica precisa, pero no es eficiente...No se repite código
let par_1 = 1 % 2 == 0; 
if(par_1){
    console.log("El 1 es par");
} else {
    console.log("El 1 es impar"); 
}
...hasta 30*/
console.log("-----Versión 1------");
//en este caso se necesita  iterar de 1 a 30. 
// valor inicial = 1, la condición no puede pasar de 30, entonces index <=30, 
for (let index = 1; index <= 30; index++) {
   if(index%2 == 0) {
       console.log(`El numero ${index} es par`);
   }
}

console.log("-----Versión 2------");
//versión 2, construimos una función que muestre si el numero es par, y la usamos repetidas veces dentro del for, para llamarla repetidas veces. 

function par(numero){
    if(numero%2 == 0)
        console.log(`El numero ${numero} es par`);
}

console.log("-----Versión 3------");
//hacemos la llamada de la función en un for
function pares_1_30(){
    for (let index = 1; index <= 30; index++){
        par(index);
    }    
}
pares_1_30();