// TODO Prototipos


// ! POO
/*
* Clases = Modelo a seguir 
* Objetos = es un instncia de una clase
*   Atributos = es una caracteristica o propiedad del objeto
*   Metodos   = Son las acciones que un objeto realiza
*/

const animal = {
    nombre: 'Poppi',
    sonar() {
        console.log('Guauu Guauu!!');
    }
}
// console.log(animal);











// TODO Funcion Constructora 1
// TODO esta la forma primitiva de como funciona
function Animal(nombre, genero) {
    // * Atributos
    this.nombre = nombre;
    this.genero = genero;

    // * Metodos
    this.sonar = function () {
        console.log('Guauu Guauu!!');
    }
    this.saldo = function () {
        console.log(`Hola soy ${this.nombre}`);
    }
}

const snoopy = new Animal('Snoopy', 'Macho'),
    lolaBynnu = new Animal('Lola Bunny', 'Hembra');
// console.log(snoopy);
// console.log(lolaBynnu);











// TODO Funcion Constructora 2 donde los metodos
// *    al prototipo como tal
// *    para evitar duplicados de los metodos

function Animal2(nombre, genero) {
    // * Atributos
    this.nombre = nombre;
    this.genero = genero;

}

// * Metodos agregados alprototipo de la funcion constructora   
Animal2.prototype.sonar = function () {
    console.log('Guauu Guauu!!');
}
Animal2.prototype.saldo = function () {
    console.log(`Hola soy ${this.nombre}`);
}

const poppi = new Animal2('Poppi', 'Macho'),
    puka = new Animal2('Puka', 'Hembra');

console.log(poppi);
console.log(puka);

