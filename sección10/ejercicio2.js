function Persona () {
    this.doc  = prompt("Ingrese el número de documento");
    this.name = prompt("Ingrese su nombre completo"); 
      
}; 

var datos=[];

for( i = 0; i < 10 ; i++){
    datos[i] = new Persona();
}

for (const key in datos) {
    console.log (key, datos[key]); 
}; 





