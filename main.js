// *Ejemplo de como funciona el forEach
// let numeros = [10, 20, 30, 40, 50];
// numeros.forEach(function (valor) {
//    console.log(valor); 
// });



// TODO Parametros REST & 
// * EL parametros REST puede ser o no infinito
function sumar(a, b, ...c) {
    let resultado = a + b;
    
    c.forEach(function (n) {
       resultado += n; 
    });
    return resultado;
}
console.log(sumar(1, 2, 3, 4));



// TODO Oeprador Spread
// * Concatena varios parametros en unos solo

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [6, 7, 8, 9, 0];
console.log('Arrreglo 1:',arr1,'Arrreglo 2:', arr2);

const arr3 = [...arr1, ...arr2];
console.log('Arreglo 1 y 2 en uno solo = ', arr3);


















// function sumar(a, ...c) { // *  1 [2, 2]
//     let resultado = a;
    
//     // * Itera solo 2 veces porque
//     // * es con los valores almacenados 
//     // * en "c"

//     c.forEach(function (n) {
//        resultado += n; 
//     });
//     return resultado;
// }
// console.log(sumar(1, 2, 2));




