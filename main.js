
console.log(console);
console.error('Esto es un error');
console.warn('Esto es un aviso');
console.info('Este es un mensaje info');

// * log es como un registro de lo que  
// * a pasado en nuestra aplicacion

let nombre = 'Eduardo', apellido = 'Chavez', edad = 20;

console.log(nombre);
console.log(apellido);
console.log(edad);
console.log(nombre, apellido, edad);
console.log(`Hola mi nombre es ${nombre} ${apellido} y tengo ${edad}`);


// * Comodines 
console.log(`Hola mi nombre es %s %s y tengo %d`, nombre, apellido, edad);
console.clear();
// console.log(window);


// * Imprime lo que hay en el documento
// * por ejemplo imprimiendo las etiquetas HTML
// console.log(document);


// * (dir) muestra las propiedades y metodos en formato objeto
// console.dir(document);t
console.clear();

console.group('Este es un group dentro la consola');
console.log('Item #1');
console.log('Item #2');
console.log('Item #3');
console.log('Item #4');
console.log('Item #5');
console.groupEnd();



// console.log(console);

/* 
* Queremos que represente todas las entradas
* Del objeto console en una tabla
* Usando el constructor objetc
* y el metodo entries, para que genere una 
* Fila por todas las propiedades del objeto console
*/

// console.table(Object.entries(console));
// console.table(Object.entries(console).sort());







console.clear();
const numeros2 = [1, 2, 3, 4, 5]
const vocales = ['a','e','i','o','u'];
console.table(numeros2); 
console.table(vocales);







// * Tabla con objetos
console.clear();

const perro = {
    nombre: 'Pedro',
    raza: 'Pug',
    color: 'Dorado',
} 

const array1 = ['Juan','Carlos','Pepe','Diego','Ramirez','Javier','Luis'];
// console.table(perro);



console.time('Cuanto tiempo tarda mi código');
const arreglo2 = Array(1000000);
for (let i = 0; i < arreglo2.length; i++) {
    arreglo2[i] = i;    
}
console.timeEnd('Cuanto tiempo tarda mi código');



// * ----------------------------------------
console.clear();
// * Nos ayuda a saber cuantas veces 
// * Se realizo una tarea, ciclo ect

// for (let i = 0; i < 100; i++) {
//     console.count('Código for');
//     console.log(i);
// }



// * ------ una forma de hacer test muy basico

let x = 1
let y = 2
let pruebaXY = 'Se esperaba que X siempre esa menor que Y';

console.assert(x < y, {x, y ,pruebaXY}); 





