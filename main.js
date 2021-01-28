let a = 2
let b = new Number(1)
let c = 7.19
let d = '2.6'


console.log(a, b, c.toFixed(1));
console.log(parseInt(c));
console.log(parseInt(d));
console.log(typeof c, typeof d)
console.log(c + parseInt(d))
console.log(c + parseFloat(d))

/* 
    .toFixed(1)
    Esta funcion nos ayuda a redondear un 
    un alor numerico con numero decimal
    indicando cuantas a decimas se reducira
 

    parseInt(nom_variable)
    Esta funcion nos regresa el valor entero
    de una varible

    parseFloat(nom_varible)
    Imprime el valor entero como la parte 
    decimal de una varible

    typeof nom_variable
    Nos regresa el tipo de dato que 
    es la variable 

 */

    