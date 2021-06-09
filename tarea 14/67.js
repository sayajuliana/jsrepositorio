function capital(c, x, n){
    if (x<0){
        return 0;
    }
    let capital = c*Math.pow (1+(x/100), n);
    return capital; 
}