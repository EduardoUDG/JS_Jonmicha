


// * Funcion Anónima autoejecutable

(function () {
    console.log('Mi primer IIFE');
})();



(function (d, w, c) {
    console.log('Mi segunda IIFE');
    console.log(d);
    console.log(w);
    c.log('Este es un console.log');
})(document,window, console);

// alert('Hola');

// * Formas de escribir las funciones Anónimas
// * Clasica:
(function () {
    console.log('Versión clásica')
})();


// * La Crockfrod (JavaScript The Good Parts):
((function () {
    console.log('Versión Crockford')
})());


// * Unaria
+function () {
    console.log('Versión Unaria')
}();


// * Facebook
!function () {
    console.log('Versión Facebook')
}();

