/* 
    Tenemos diferentes maneras de hacer arreglos:
*/

// Primera forma
const a = []
const b = ['A', true, 'hola', ['1', '2', '3']]
//  .length nos devuelve el (Numero de elementos de un rarreglo)
console.log(a.length);
console.log(b.length);



//  Segunda forma
const c = Array.of('x', 'Y', 'z', 9, 8, 7);
console.log(c);


/* ------------------------------------------------------------- */
// Podemos inicializar un arreglo de la siguiente manera
// utilizando el prototipo de un arreglo como se muestra:

/* 
const d = Array(50).fill(false);
console.log(d);
*/



const colores = ['Rojo', 'Azul', 'Verde']
console.log(colores);
// .push manda un nuevo elemento al final
colores.push('Amarillo')
console.log(colores);
// .pop quita el ultimo elemento del areglo
colores.pop();
console.log(colores);


colores.forEach(function (el, i){
    console.log(`<li id="${i}"> ${el} </li> `)
});
