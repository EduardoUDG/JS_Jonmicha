
/* 
* Cortocuito OR / cuando el valor de la izquierda en la
* expresion siempre puede validar a true, es el valor que
* se cargara por defecto
*/

/* 
* Cortocuito AND / cuando el valor de la izquierda en la
* expresion siempre puede validar a false, es el valor 
* que se cargará por defecto
*/



function saludar(nombre) {
    // ! Cortocircuito
    nombre = nombre || 'Desconocido';
    console.log(`Hola ${nombre}`);
}

saludar('Eduardo');
saludar();
console.log('Cadena' || 'Valor de la derecha');
console.log( 19 || 'Valor de la derecha');
console.log( true || 'Valor de la derecha');
console.log( [] || 'Valor de la derecha');
console.log( {} || 'Valor de la derecha');
console.log( false || 'Valor de la derecha');
console.log( null || 'Valor de la derecha');
console.log( undefined || 'Valor de la derecha');
console.log( '' || 'Valor de la derecha');
console.log( 0 || 'Valor de la derecha');

console.log( false && 'Valor de la derecha');
console.log( null && 'Valor de la derecha');
console.log( undefined && 'Valor de la derecha');
console.log( '' && 'Valor de la derecha');
console.log( 0 && 'Valor de la derecha');

