
class Animal {
    // * El constructor es un metodo especial que se ejecuta
    // * en el momento de instanciar la clase
    constructor(nombre, genero){
        // Atributos
        this.nombre = nombre;
        this.genero = genero;
    }

    // Metodos
    sonar(){
        console.log('Hago sonidos por que estoy vivo');
    }
    saludar(){
        console.log(`Hola me llamo ${this.nombre}`);
    }
}


const mimi = new Animal('Mimi','Hembra');
const scooby = new Animal('Scooby','Macho');

console.log(mimi);
console.log(scooby);



//  * -------------------------------------------------------
//  * HERENCIA 

class Perro extends Animal {

    constructor(nombre, genero, tamanio) {
        // * Con el metodo super() se manda a
        // * llamar el constructor de la clase padre
        super(nombre, genero);
        this.tamanio = tamanio;
        this.raza = null;
    }

    sonar() {
        console.log('Soy un perro y mi sonido es un ladrido');
    }

    ladrar(){
        console.log('Guauu Guauu!');
    }

    // * Un metodo estático se puede ejecutar  
    // * sin necesidad instanciar la clase

    static soyMetodoEstatico(){
        console.log('Hola soy un metodo estático');
    }

    // * Los setters y getters son métodos especiales 
    // * que nos permiten establecer y obtener los
    // * valores de atributos de nuestra clase
    
    get getRaza(){
        return this.raza;
    }
    set setRaza(raza){
        this.raza = raza;
    }

}
// ! NOTA cuando usamos set y get
// ! JS convierte las funciones en propiedades

Perro.soyMetodoEstatico();

const scooby2 = new Perro ('Scooby', 'Macho', 'Gigante');

console.log(scooby2);
scooby2.saludar();
scooby2.sonar();
console.log(scooby2.getRaza);
scooby2.setRaza = 'Grán danés';
console.log(scooby2.getRaza);
