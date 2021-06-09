function moneda(x){

    let resto = 0;

    let monedas = [500, 200, 100, 50, 20, 10, 5, 2, 1];

    for(i = 0; i < monedas.length; i++) {
        
        if(x >= monedas[i]) {
            resto = Math.trunc(x/monedas[i]);
            console.log(`${resto} billetes de ${monedas[i]} euros`);
            x = (x % monedas[i]); 
        }
    }  

}