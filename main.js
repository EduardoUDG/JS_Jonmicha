

try {
    console.log('En el try se agrega el codigo a evaluar');
    // noExiste;
} catch (error) {
    console.log('Captura cualquier error surgido o lanzado en el try');
    // console.log(error)
} finally {
    console.log('Se ejecutara siempre al final de un bloque Try-catch');
}

/*
*   isNanN()   es una funciones que nos indica 
*   si no es un numero noes regresara true
*   si, si es un numero nos regresara falso   
*/

try {
    let numero = 'y'

    if(isNaN(numero)) {
        throw new Error('El caracter introducido no es un Numero')
    }
    console.log(numero * numero);
} catch {
    console.log(Se produjo el siguiente error: ${error});
}