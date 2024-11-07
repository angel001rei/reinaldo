const prompt = require('prompt-sync')()

// for (let trak = 0; trak <= 7; trak++){
//     console.log(trak)
// }

// const num = 10;
// if (num%2 !== 0) {
//     console.log("El impar")
// }


// for (let impar = 1; impar <= 19; impar++){
    
//     if(impar%2 !==0 )
//         console.log (impar)
// }


// let usuario = parseFloat(prompt("ingrese un numero"))

// let valor= 10
// let suma = 0
// for (let numSuma = 1; numSuma<= 6; numSuma++){
    
//     suma = numSuma+ suma;
// }
// console.log(suma)

let usuario1 = parseFloat(prompt("ingrese el numero de una tabla: "))



let n = usuario1

 for( let multi =0; multi<= n; multi++){

    multi = multi*n
 }
 console.log( "la tabla es ")