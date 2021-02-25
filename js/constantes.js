
export const PI = Math.PI;

export let usuario = 'Eduardo';
let password = '1234';



// * De esta forma exportamos de forma automatica sin ser importada 
export default function saludar(){
    console.log('Hola modulos + ES6');
}

// ! NO podemos exportar más de 2 exporaciones por archivo 