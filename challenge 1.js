const determinarParImpar = (numero) => {
    if (numero % 2 == 0) {
        console.log(${ numero }"es un numero par")
    } else {
        console.log(${ numero }"no es un numero par")
    }
}
determinarParImpar(5);

// ---

const determinarParImpar = (numero) => {
    if (numero % 2 == 0) {
        console.log("${numero} es un numero par")
    } else {
        console.log("${numero} no es un numero par")
    }
}
determinarParImpar(5);
VM794: 5 ${ numero } no es un numero par