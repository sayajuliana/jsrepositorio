let prod={ "leche":3000,"huevo":400,"queso":7000, "jamón":6000, "fríjol":2200, "lentejas":2000, "aceite":7500 };

let producto; 
    
function prodTiendas(prod) {
    for (const key in prod) {
    console.log ("producto", key);
  }

  producto= prompt("Ingrese el producto deseado"); 

    for (const key in prod) {
     if(producto == key)
        console.log("el producto", key,"cuesta", prod[producto]);  
    }
};  


    




