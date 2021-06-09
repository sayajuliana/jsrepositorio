
function dobleImpar (num){
    let result
    if ((num/2)!=0){return false}

    if((num/2)%2 === 0){
        result ="par";
    }else{
        result ="impar"; 
    }
    return result;
}
