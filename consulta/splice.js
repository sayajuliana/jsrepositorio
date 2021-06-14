// splice= elimina elementos de un arreglo al indicar su posición y la cantidad de elementos que se desean borrar a partir de esa posición
//también se usa para crear un nuevo arreglo a partir de los elementos que se eliminaron del arreglo original 

let numeros=[1,2,3,4,5,6,7,8,9,0]; 

// splice (indice elementos, cantidad de elementos que quiero eliminar )
numeros.splice(5, 5); 

console.log(numeros); 

//

let pares= [2,4,6,8,10]
let pares2 = pares.splice(2,3)

console.log(pares2); 