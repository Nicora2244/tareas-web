function divisionDeValor (dividendo, divisor){
    return new Promise( (resolve, reject) => {
        if (divisor == 0){
            reject("Error: La division no puede hacerse con 0")
        } else{
            const resultado = dividendo/divisor;
            resolve(resultado)

        }
    })
}

    divisionDeValor(10, 2)
    .then(resultado => {
        console.log("El resultado es:", resultado);
    })
    .catch(error => {
        console.error("Hubo un error:", error);
    });

async function obtenerResultado(){
    try{
        const resultado = await divisionDeValor(8,4); 
        console.log("El resultadoe es :", resultado)  
    }catch (error){
        console.log(error)
    }
}

obtenerResultado();