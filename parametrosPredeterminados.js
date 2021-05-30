//parametro predeterminado 
function cubo(x) {
  if (typeof x === 'undefined') {
    x = 5
  }

  return x * x * x
}
cubo()
// parámetro opcional 

function crearPersona(nombre)
{
  var nombre = nombre || "Javier";
}

function f(n?: number) {
    console.log(n.toFixed());   // no se especifican argumentos
    console.log(n.toFixed(3));  // se especifica un argumento
}
