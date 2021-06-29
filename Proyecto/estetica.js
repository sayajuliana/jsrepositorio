var servicios= { masaje:45000, peluqueria:30000, uñas:20000}; 

var empleados= { juan:"uñas, 8:00, 9:00, 10:00, 11:00", laura:"masajes, 2:00, 3:00, 4:00, 5:00", camilo:"peluqueria, 8:30, 9:30, 10:30, 11:30", manuela:"masajes,  8:00, 9:00, 10:00, 11:00", diana: "uñas,2:30, 3:30, 4:30, 5:30 "};


function Usuario(){
    this.documento  = prompt("Ingrese el número de documento");
    this.nombres = prompt("Ingrese sus nombres"); 
    this.email = prompt("Ingrese su email");
    this.contraseña = prompt("Ingrese su contraseña"); 
    this.edad = prompt("Ingrese su edad");
}

var persona=[]; 
var numUsuario= prompt("Ingrese el número de usuarios que desea registrar") 

for ( let i= 0; i < numUsuario; i++) {
    alert("Ingrese los datos del  usuario "+(i+1));
    persona[i] = new Usuario();
}
alert("Su registro fue exitoso"); 

function consultarReg(persona, numUsuario){
    var correo = prompt("Ingrese su email");
    var clave = prompt("Ingrese su contraseña");
    for ( let i= 0; i < numUsuario; i++) {
        if (correo == persona[i].email && clave==persona[i].contraseña){
            console.log(persona[i]);
            return i; 
        }
    }
        
}



if (confirm("¿Desea iniciar sesión?")) {
   i=consultarReg(persona, numUsuario);
  
   if (confirm("Desea agendar su cita?")){
    a= agendar(servicios,empleados); 
}
}
else {
    alert("Gracias por usar nuestro servicios");
  }

function agendar(servicios,empleados){
    
    let servicio= prompt("Ingrese el servicio que desea agendar");
    servicio=servicio.toLowerCase();
    
    for (const key in servicios) {
        if (servicio == key ){
            console.log ( "El servicio seleccionado es", key); 
        }
    }
    
    let empleado= prompt("Ingrese el empleado con quien desea agendar");
    empleado=empleado.toLowerCase();
    for (const key in empleados) {
        if (empleado == key ){
            console.log ( "El empleado seleccionado es", key); 
        }
    }
    return agendar; 
}