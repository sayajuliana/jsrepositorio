let arreglo  =[1,2,3,4,5,6,7,8,9,10]; 

for (i=0; i<arreglo.length; i++){
    console.log(arreglo[i]); 
}

console.log("--------segundo metodo----------"); 

arreglo.forEach(element => {
    console.log (element);
});