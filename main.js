// *    Funcion declarada
function saludar() {
    console.log('Bienvenido');
}



// *    Funcion Anonima
// !    Se tiene que llamar despues
// !    que se declara la funcion
const saludar2 = function() {
    console.log('Bienvenido');
}


// *------------------------------------------------



// *    Funcion de tipo flecha
const saludar3 = () => {
    console.log('Bienvenido');
}


// *    Otra forma con el mismo resultado
const saludar4 = () => console.log('Bienvenido');


// !    Si  pasamos parametros, lo podemos dejar como se muestra
const saludar5 = name => console.log(`Bienvenido ${name}`);


// !    Esta forma de funcion, tambien funciona como un RETURN
const sumar = (a,b) => a+b;
/* console.log(sumar(2,2)); */



// *------------------------------------------------


const numeros1 = [1, 2, 3, 4, 5];
numeros1.forEach((el, index) => console.log(`${el} su posicion es: ${index}`));


// *------------------------------------------------

// const numeros2 = [6, 7, 8, 9, 0];
// const imprimirArreglo = (arreglo) => { arreglo.forEach((n, i) => {
//         console.log(`Elemento: ${n} y posicion: ${i}`)
//     }); 
// }
// imprimirArreglo(numeros2);


// *------------------------------------------------


// const numeros3 = [...numeros1, ...numeros2];
// imprimirArreglo(numeros3);