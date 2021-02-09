let nombre = 'Popi'
let edad = 5;

const perro = {
    nombre:nombre,
    edad:edad,
    ladrar:function (){
        console.log('guauu guauu!!!');
    }
}

console.log(perro);
perro.ladrar();
/* 
* **********************************************
*/

const dog = {
    nombre,
    edad,
    raza: 'raza',
    ladrar() {
        console.log('guauu guauu guauu!!!');
    }
}

console.log(dog);
