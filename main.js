
console.log(Date());

let fecha = new Date();

// * Fecha
console.log(fecha);

// !------------------------------


// * Día en numero
console.log(fecha.getDate());



// * Día de la semana en numero
// * D-L-M-I-J-V-S  ->  0-1-2-3-4-5-6
console.log(fecha.getDay());



// * Mes en numero
// * Enero  ->  0-1-2-3-4-5-6-7-8-9-10-11
console.log(fecha.getMonth());


// !------------------------------



// * Año 
console.log(fecha.getFullYear());

// * Obten la hora 
console.log(fecha.getHours());

// * Obten la minutos 
console.log(fecha.getMinutes());

// * Obten la segundos 
console.log(fecha.getSeconds());

// * Obten la milisegundos 
console.log(fecha.getMilliseconds());


// !------------------------------

// * Fecha a Sting
console.log(fecha.toString());

// * Solo la Fecha a Sting
console.log(fecha.toDateString());

// * Fecha en formato 00/00/00 y (Hora)
console.log(fecha.toLocaleString());

// * Fecha en formato 00/00/00
console.log(fecha.toLocaleDateString());

// * Solo el horario local
console.log(fecha.toLocaleTimeString());


// !------------------------------

// * Obtiene la fecha del meridiano CERO 
console.log(fecha.getUTCDate);


// * Segundos del TimesTamp(1970) hasta la fecha actual
console.log(Date.now());

let cumpleEduardo = new Date(2000, 11, 8);
console.log(cumpleEduardo);
