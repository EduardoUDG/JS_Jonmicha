// ? Podemos ver a math como una libreria
// ? ya que tiene funciones y valores constantes
// ? ya definidos como las c y c++


// * Obejto math
console.log(Math);

// * Podemos usar math para sacar valores CONSTANTES 
console.log('Valor constante' ,Math.PI);

// * Valor absoluto
console.log('Absoluto',Math.abs(-7.8));

// * Unidad arriba
console.log('Entero hacia arriba 7.8 = ' ,Math.ceil(7.8));

// * Unidad abajo
console.log('Entero hacia abajo 7.2 = ' ,Math.floor(7.4));

// * Redondear
console.log('Redondear 7.5 = ' ,Math.round(7.5));
console.log('Redondear 7.4 = ' ,Math.round(7.4));

// * Raiz
console.log('Raiz de 81 = ' ,Math.sqrt(81));

// * Potencia
console.log('Potencia de 2^3 = ' ,Math.pow(2,3));

// * Saber si un numero es positivo o negativo
console.log('Positivo = 0, Negativo = -1, cero = 0' ,Math.sign(-10));
console.log('Positivo = 0, Negativo = -1, cero = 0' ,Math.sign(0));
console.log('Positivo = 1, Negativo = -1, cero = 0' ,Math.sign(10));

// * Random, simpre da un numero aleatorio entre 0 y 1
console.log('Numero Random = ' , Math.round(Math.random() * 1000));

