
// console.log(window);

// alert('Hola esto es una alerta');
// confirm('Hola esto es una alerta');
// prompt('Hola esto es un aviso y le permite al usuario ingresar un valor');

// let alerta = alert('Hola esto es una alerta');
// let confirmacion = confirm('Hola esto es una alerta');
// let aviso = prompt('Hola esto es un aviso y le permite al usuario ingresar un valor');
 
// console.log(alerta);
// console.log(confirmacion);
// console.log(aviso);




// function sumar(a, ...c) { // *  1 [2, 2]
//     let resultado = a;
    
//     // * Itera solo 2 veces porque
//     // * es con los valores almacenados 
//     // * en "c"

//     c.forEach(function (n) {
//        resultado += n; 
//     });
//     return resultado;
// }
// console.log(sumar(1, 2, 2));

function sumar(...c){
    let resultado = null;

    c.forEach(num => {
        resultado += num;
    });
    return resultado;
}


console.log(sumar(1, 2, 3,4, 5));

