let contPais={ america: "Colombia, Argentina, Canadá, Estados Unidos, Brasil", europa: "España, Francia, Alemania, Italia, Holanda", asia:"Japón, Corea del Sur, Filipinas, China, Tailandia", africa: "Sudafrica, El Congo, Egipto, Nigeria, Kenia", oceanía: "Australia, Nueva Zelanda, Fiyi, Vanatu, Palaos"}; 

function paises(){
    
    let cont= prompt("Ingrese el nombre de un continente");
    cont=cont.toLowerCase();

    for (const key in contPais) {
        if (cont == key){
            console.log( contPais[key]); 
        }
    }
}