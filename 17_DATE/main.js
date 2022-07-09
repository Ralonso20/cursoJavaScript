//OBJETO DATE 1ra forma de instancia

let fechaActual = new Date();

console.log(fechaActual);
console.log(fechaActual.getFullYear());
console.log(fechaActual.getDate());

//TIMESTAMP: 01 Enero 1970 -> Actualidad cantidad de milisegundos que pasaron desde el primero de enero de 1970 hasta hoy

console.log(fechaActual.getTime());
console.log(Date.now());
//con el signo mas obligamos a evaluar la expresion Date en forma numerica
console.log(+fechaActual);

//Esto nos puede servir para realizar operaciones, por ejemplo, cuanto se demora una persona en escrbir
//podemos restar el Timestamp antes y despues de la escritura

//2da forma: Teniendo un TimeStamp que queremos leer de una forma legible

let fechaConTimeStamp = new Date(1627034033900);

console.log(fechaConTimeStamp);

//3ra forma: Por medio de un strig, este estilo acepta varios formatos de fecha

let fechaConString = new Date("2021-07-23 23:00:14");
console.log(fechaConString);

//4ta forma: Con parametros y respetando el formato Date(ano, mes, fecha, horas, minutos, segundos, ms)

let fechaConParametros = new Date(2021, 1, 25, 15, 20, 35, 45);
console.log(fechaConParametros); 

//SETTERS

fechaConParametros.setFullYear(1980);
console.log(fechaConParametros); 

//EJERCICIO 1: Mostar la fecha actual con los dias de la semana en espanol con el siguiente formato
//Dia de la semana, dd de mm de yyyy

let fecha1 = new Date();

let day = fecha1.getDate();
let dayOfWeek = fecha1.getDay();
let month =  fecha1.getMonth();
let year =  fecha1.getFullYear();

let diaSemana = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo'];
let mesEspanol = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

console.log(`${diaSemana[dayOfWeek]}, ${day} de ${mesEspanol[month]} de ${year} `)