function Progcita(){
    this.doc  = prompt("Ingrese el número de documento");
    this.nombre = prompt("Ingrese su nombre completo"); 
    this.fecha  = prompt("Ingrese la fecha en la que desea su cita");
    this.hora = prompt("Ingrese la hora a la que desea su cita"); 
}

function consultarCita(cita,n){
    var consulta =  prompt("Ingrese su número de documento"); 
    for( i = 0; i < n ; i++){
        for (const key in cita[i]) {
            if (consulta == cita[i][key]){
                console.log(cita[i]);
                return i; 
            }
        }
    }
}

var cita = [];
var n = prompt("Ingrese el número de usuarios");

for( i = 0; i < n ; i++){
    alert("Ingrese los datos del  usuario "+(i+1));
    cita[i] = new Progcita ();
}

if (confirm("Desea confirmar su cita?")) {
    i=consultarCita(cita,n);
    if (confirm("Desea reprogramar su cita?")){
        if (confirm("Desea cambiar el dia de su cita?")){
            cita[i].fecha=prompt("Ingrese la nueva fecha en la que desea su cita");
        }
        if (confirm("Desea cambiar la hora de su cita?")){
            cita[i].hora=prompt("Ingrese la nueva hora en la que desea su cita");
        }
        console.log(cita[i]);
    }
    else{
        alert("Gracias por usar nuestro sistema");        
    }
  }
else {
    alert("Gracias por usar nuestro sistema");
  }

