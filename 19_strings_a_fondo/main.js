// STRINGS
let nombre1 = "Juan";
let nombre2 = 'Pedro';
let nombre3 = `Maria`;

let declaracion = "Mi lenguaje favorito es 'Javascript'."
console.log(declaracion);

let compras = `lista de compras:
* Aceite
* Arroz
* Carne
* Frutas`;
console.log(compras);

let compras2 = "lista de compras: \n* Aceite \n* Arroz \n* Carne \n* Frutas";
console.log(compras2);

//Template strings
let edad = 15;
console.log(`Roberto tiene ${edad} años.`);
console.log("Roberto tiene " + edad + " años.");

//Largo del string
let saludo = 'Hola Mundo!';
console.log(saludo.length);

//Accediendo a caracteres
console.log(saludo[10]);

saludo[0] = 'h';
console.log(saludo[0]);

saludo = 'hola Mundo!';
console.log(saludo[0]);

//Cambiando entre mayusculas y minusculas
console.log(saludo.toUpperCase());
console.log(saludo.toLowerCase());

//Subcadenas
let frase = 'HTML es un lenguaje de marcado y Javascript es un lenguaje de programacion';
console.log(frase.indexOf('HTML'));
console.log(frase.indexOf('lenguaje'));
console.log(frase.indexOf('es',6));
console.log(frase.indexOf('CSS'));
console.log(frase.lastIndexOf('es'));

//includes, startsWith, endsWidth
console.log(frase.includes('lenguaje'));
console.log(frase.includes('CSS'));
console.log(frase.endsWith('programacion'));
console.log(frase.endsWith('programación'));

//Substrings
let lenguaje = ' Javascript ';
// lenguaje = lenguaje.trim();
console.log(lenguaje.substring(2,4));//me mostrara el string desde un inicio marcado a un final marcado
console.log(lenguaje.substr(2,4)); //este metodo me muestra desde el punto que yo elija en el primer parametro y el segundo parametro seria la longitud para mostar

//trim() elimina espacios en blanco y repeat()

console.log(lenguaje.repeat(10));