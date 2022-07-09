let day = prompt("Ingrese el dia de la semana: ");
//los case los colocamos entre comillas porque la funcion prompt siempre devuelve un string
switch(day){
    case '1': document.write("<h1>Hoy es Lunes</h1>");
    break;
    case '2': document.write("<h1>Hoy es Martes</h1>");
    break;
    case '3': document.write("<h1>Hoy es Miercoles</h1>");
    break;
    case '4': document.write("<h1>Hoy es Jueves</h1>");
    break;
    case '5': document.write("<h1>Hoy es Viernes</h1>");
    break;
    default: document.write("<h1>Dia desconocido</h1>");
}