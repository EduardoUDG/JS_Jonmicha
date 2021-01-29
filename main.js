/* 
    Las funciones son poderoas en js porque
    les podemos asignar como valor, tambien puede 
    retornar la ejecucion de una funcion adicional
    como argumentos, retornar como valores
*/


// Funcion Declarada
function sumar(a, b) {
    return a+b;
}

// Invocación de Funcion ↓
let pruebaFuncion = sumar(3,3);
/* console.log(pruebaFuncion);*/


/* -------------------------------------------------- */



// Declarando valor por defecto en 
// una funcion con parametros
function saludo(nombre = 'user', edad='0') {

    if (nombre == 'user'){
        console.log(`Hola ${nombre}, Bienvenido`);        
    } else {
        console.log(`Hola ${nombre} tu edad es ${edad} años`);
    }
}
// saludo('Lalo', 20);
// saludo();



/* -------------------------------------------------- */



// Funciones Declaradas VS Funciones Expresadas
// funcionDeclarada()

function funcionDeclarada() {
    console.log('Esta es una funcion declarada');
}

// funcionDeclarada()



/* -------------------------------------------------- */

// Fnciones con expresiones
// crear una funcion y asignarsela dinamicamente a una variable



// No podemos llamar este tipo de funcion si no a sido primero declarada  
// Funcion Anonima ↓ (Se llama asi, por que la funcion no tiene nombre)

const funcionExpresada =  function() {
    console.log('Esta es una funcion expresada');    
}

funcionExpresada(); 



