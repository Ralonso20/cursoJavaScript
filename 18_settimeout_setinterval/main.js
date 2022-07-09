//Guardamos como variable una referencia del documento html
let displayDate = document.getElementById('fecha');
let displayClock = document.getElementById('reloj');

let date = new Date();

let dayOfWeek = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo'];
let months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

displayDate.innerHTML = `${dayOfWeek[date.getDay()]}, ${date.getDay()} de ${months[date.getMonth()]} de ${date.getFullYear()}`;


/*Debemos tener en cuenta que deberemos crear el objeto nuevamente cada vez que llamamos a setInterval para obtener la hora actualizada */
setInterval(()=>{
    let hour = new Date()
    //`${hour.getHours()}:${hour.getMinutes()}:${hour.getSeconds()}` imprimir asi es una posibilidad pero...hay mejores formas en este caso
    displayClock.innerHTML = hour.toLocaleTimeString();
}, 1000)