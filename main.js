const numeros = [1, 2, 3];

// Sin destructuracion
let uno = numeros[0], dos = numeros[1], tres = numeros[2];
console.log(uno, dos, tres);


// Cons destructuracion
const [one, two, three] = numeros;
console.log(one, two, three); 


let persona = {
    nombre:'Eduardo',
    apellido:'Chavez',
    edad:20,
}

let {nombre,apellido,edad} = persona;
console.log(nombre, apellido, edad);