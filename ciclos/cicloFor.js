/*CICLO:  

 *CICLO FOR: tiene tres secciones: Valor inicial; condición(La cual debe cumplirse inicialmente), control (aumento o decremento) 
¿para que sirve? Sirven para ejecutar instrucciones de manera iterativa(repetitiva).

*
sin ciclo for se tendría que repetir instrucciones varias veces. 
console.log(0);
console.log(1):
...

Lo cual no es práctico
*/
//Para imprimir números del 0 al 10 y dar solucion al problema se utilizan ciclos, en este caso FOR

//numero será la variable control del ciclo 
// el valor inicial es 0, ya que número=0
//la condición  es que el número aumente hasta que sea menor o igual que 10; cuando la condición no se cumple el ciclo termina. Se debe garantizar que la condición alguna vez no se cumpla y el ciclo termine 
// Se incrementa la variable control en 1 en cada iteración a través del operador ++

for(let numero = 0; index <=10; numero ++){
    console.log("Numero:", numero);
}
