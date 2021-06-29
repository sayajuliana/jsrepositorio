function Usuario(){
    this.documento  = prompt("Ingrese el número de documento");
    this.nombres = prompt("Ingrese sus nombres"); 
    this.apellidos  = prompt("Ingrese sus apellidos");
    this.edad = prompt("Ingrese su edad"); 
    this.peso = prompt("Ingrese su peso");
    this.estatura = prompt("Ingrese su estatura");  
}

var persona=[]; 
var numUsuario= prompt("Ingrese el número de usuarios que desea registrar") 

for ( let i= 0; i < numUsuario; i++) {
    alert("Ingrese los datos del  usuario "+(i+1));
    persona[i] = new Usuario();
}
alert("Su registro fue exitoso"); 

function consultarReg(persona, numUsuario){
    var consulta = prompt("Ingrese su número de documento");
    for ( let i= 0; i < numUsuario; i++) {
        for (const key in persona[i]) {
            if (consulta == persona[i][key]){
                console.log(persona[i]);
                return i; 
            }
        }
        
    }
}

if (confirm("¿Desea confirmar su registro?")) {
   i=consultarReg(persona, numUsuario);
  }
else {
    alert("Gracias por usar nuestro sistema");
  }


