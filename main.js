/* 
*   Un forin nos permite recorrer todas
*   las propiedades de un objeto: 
*/

const user = {
    nameUser: 'Eduardo',
    lastUser: 'Chavez',
    ageUser: 20,
}


for (const propiedad in user) {
    console.log(propiedad);
    console.log(`Key: ${propiedad}, Values: ${user[propiedad]}`);
}

/* 
*   Un forof nos permite recorrer todos los
*   elementos de cualquier objeto que sea
*   iterable en JavaScrit
*/

const numeros = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]

for (const elemento of numeros) {
    console.log(elemento);
}