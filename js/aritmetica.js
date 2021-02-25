
export function sumar(a,b){
    return a + b;
}


export function restar(a,b){
    return a - b;
}

/* 
* Comentamos las funciones de arriba porque con el
* Objeto de abajo las declaramos y las exportamos
*/

export const aritmetica = {
    sumar,  // sumar :sumar
    restar,
};

