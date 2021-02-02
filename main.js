// Recordemos que podemos hacer una
// instancia de objeto de la siguiente manera

let a = new String('Hola');
// console.log(a);

/* --------------------------------------- */

// Este es un Objeto
const b = {}
// console.log(b);


/* --------------------------------------- */

const User = {
    nameUser: 'Eduardo',
    lastUser: 'Chavez',
    ageUser: '20',
    pasatiemposUser: ['Jugar','Guitarra','Dibujar',],
    solter: true,
    contactUser: {
        emailUser: 'lalo@gmail.com',
        paisUser: 'Mexico',
        numberUser: '52334425478',
    },
    saludarUser: function(){
        console.log('Hola saludos!!')
    },
    decirNombreUser: function(){
        console.log(`Hola bienvenido ${this.nameUser} ${this.lastUser} y tengo ${this.ageUser}`)
    },
}
/* 
*   Dentro de un objeto a las avariables se les van
*   a llamar atributos/propiedades y a las
*   funciones se les llama metodos
*/

console.log(User);
console.log(User['nameUser']);
console.log(User.ageUser);
console.log(User.solter);
console.log(User.pasatiemposUser[1]);
console.log(User.contactUser.paisUser);
User.saludarUser()
User.decirNombreUser('Pedrito')

// * lo que esta dentro de un objeto 
// * lo enlista como un arreglo (Solo las propiededes)
console.log(Object.keys(User));

// * regresa los valores de que tienen las propiedades
// * en un objeto

console.log(Object.values(User));

// * Busca el la propiedad con el nombre que le pasemos 

console.log(User.hasOwnProperty('nameUser'));










