//Cree una función que tenga por parámetro un arreglo de números y muestre el mayor y el menor de ellos

let numeros = [0,100,-4,6,80,-99,300]; 

function numMayor(numeros) {
    let mayor = 0; 
    numeros.forEach(element => {
        if (element > mayor){
            mayor = element; 
           
        }
    });
    return ("el elemento mayor es", mayor );
}