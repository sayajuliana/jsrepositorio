let persona ={edad:20, peso: 75, nombres:"Pedro", apellidos:"Pérez Pérez"}; 

for (const key in persona) {
    console.log(key, persona[key]); 
}

persona.peso = 77; 
persona["edad"] = 21; 
console.log("Diccionario con llaves peso y edad modificados", persona); 

delete persona["apellidos"];
console.log("Diccionario apellidos eliminados", persona);  


