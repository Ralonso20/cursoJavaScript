//usuario ingresa la hora
//el sistema lo saluda de acuerdo a las siguientes condiciones:
//hora 6 a 12: buenos dias
//hora 13 a 18: buenas tardes
//el resto: buenas noches

let actualHour = prompt("ingrese la hora del dia: ");

if(actualHour >= 6 && actualHour <=12){
   document.write("<h1>Buenos dias!</h1>");
}else if(actualHour >= 13 && actualHour <=18){
    document.write("<h1>Buenos tardes!</h1>");
}else{
    document.write("<h1>Buenos noches!</h1>");
}

