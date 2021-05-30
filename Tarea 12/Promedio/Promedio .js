var estudiantes = parseInt (prompt ("Ingrese cantidad de estudiantes"));
var notas = parseInt (prompt ("Ingrese cantidad de notas"));

function promedios( e , n ){

    for (var i= 1; i<= e; i++){

        var promedio = 0;
        for(var j= 1;j<=n;j++){
            let nota = parseFloat (prompt ("Ingrese la nota "+ j +"  del estudiante " + i));
            promedio+=nota;
        }
        promedio/=n;

        console.log (promedio);

    }
}
promedios (estudiantes,notas);