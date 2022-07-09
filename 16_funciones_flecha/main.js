//Funciones anonimas
//estas no gozan del concepto de hoiting, no puedo llamarlas donde quiera, primero debe ser declarada
let saludo = function(nombre){
    return `Saludos ${nombre}`;
}

console.log(saludo("Daniel"));

//Funciones flecha () => {}

/*Las funciones flechas tienen ciertas caracteristicas:
1-Las funciones flechas son anonimas, asi que primero deben ser declaradas
2-no utilizan la palabra reservada function 
3-no utilizan return 
4-si solo tienen un parametro podemos omitir el parentesis
*/

let saludo2 = nombre => `Saludos ${nombre}`;
console.log(saludo2("Marcos"));


let saludo3 = (nombre, apellido) => `Saludos ${nombre}, ${apellido} `;
console.log(saludo3("Armando", "Torres"));

/*Si la funcion no tiene parametros los parentesis son obligatorios 
si debemos hacer referencia a un objeto debemos cerrarlo entre parentesis para no confundir
las llaves de una funcion flecha con las de un objeto
*/

let obj = () => ({nombre: 'Bob', edad:'20'});
console.log(obj())