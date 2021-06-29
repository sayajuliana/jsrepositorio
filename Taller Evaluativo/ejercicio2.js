var n1 = parseInt(prompt("Ingrese el primer numero:"));
var n2 = parseInt(prompt("Ingrese el segundo numero:"));

function numMayor(num1, num2){
    
    if (num1 > num2){
        alert("El primer numero es mayor que el segundo");
        return num1;
    } else {
        if (num1 < num2){
            alert("El segundo numero es mayor al primer numero");
            return num2;
        }
        else {
            alert("Los dos numeros son iguales");
            return num1;
        }
    }
}

var mayor = numMayor(n1,n2);
console.log("El numero mayor es ",mayor);