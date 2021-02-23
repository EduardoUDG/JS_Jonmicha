// * Expresiones regulares
/* 
* Son una secuencia de caracteres que formam un patrón
* de búsqueda, principalmente utilizada Para la
* busqueda de patrones de cadenas de caracteres.

* https://es.wikipedia.org/wiki/Expresi%C3%B3n_regular#:~:text=En%20c%C3%B3mputo%20te%C3%B3rico%20y%20teor%C3%ADa,conforma%20un%20patr%C3%B3n%20de%20b%C3%BAsqueda.
* https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Regular_Expressions/Hoja_de_referencia
* https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Regular_Expressions
*/


// ! .test() nos devuelve un boolean si se cumple la exprecion
// ! .exec() nos devuelve algunos detalles de la expresion

let cadena = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt voluptas quae voluptatem veniam amet. Eveniet.';

// * 1.Forma de crear una expresion regular
let expReg = new RegExp('Lorem', '');

// * 2.Forma de crear una expresion regular
let expReg2 = /lorem/ig;


console.log(expReg.test(cadena));
console.log(expReg.exec(cadena));

console.log(expReg2.test(cadena));
console.log(expReg2.exec(cadena));

