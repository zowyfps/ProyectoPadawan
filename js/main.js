alert('Bienvenidos Padawans a su entrenamiento Jedi');

// Batalla Padawan 

let vidaPadawanRojo = 100;
let vidaPadawanAzul = 100;

let golpesuave = 10;
let golpefuerte = 30;

let round = 0 


//Funciones
function calcularGolpe(){
    return Math.round(Math.random()* (golpefuerte-golpesuave)+golpesuave);
}

function ambosPadawanViven(){
    return vidaPadawanRojo > 0 && vidaPadawanAzul > 0;
}

function padawanRojoVivo(){
    return vidaPadawanRojo>0
}

while (ambosPadawanViven()){
    round+=1
    let golpePadawanRojo = calcularGolpe()

    let golpePadawanAzul = calcularGolpe()

    if(golpePadawanRojo  > golpePadawanAzul){
        //vidaPadawanAzul=vidaPadawanAzul-golpePadawanRojo;
        vidaPadawanAzul -= vidaPadawanRojo;
        console.log(`Numero de Round:` + round);
        console.log(`El Padawan Rojo golpea al Padawan Azul con una fuerza de ${golpePadawanRojo}`);

    }else{
        //vidaPadawanRojo = vidaPadawanRojo-golpePadawanAzul;
        vidaPadawanRojo -= golpePadawanAzul;
        console.log("Numero de round: " + round);
        console.log(`El Padawan Azul golpea al Padawan Rojo con una fuerza de ${golpePadawanAzul}`);
    }
    
    console.log(`vida Padawan Azul : ${vidaPadawanAzul}`);
    console.log(`vida Padawan Rojo : ${vidaPadawanRojo}`);

}

if(padawanRojoVivo()){
    console.log("Gano Padawan Rojo")
} else{
    console.log("Gano Padawan Azul")
}
