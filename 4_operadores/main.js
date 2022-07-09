let operando1 = 4;
let operando2 = 5;
let incremento;
incremento = operando2+1;
console.log(incremento);
console.log(operando2);

console.log(incremento*=operando2);

/*el post incremento primero asigna el valor a la variable y despues realiza la operacion
Lo mismo sucede con el decremento
con el pre incremento primero se realiza la operacion y despues la asignacion*/
incremento = operando2++;
console.log(incremento);
console.log(operando2);
 
incremento = ++operando2;
console.log(incremento);
console.log(operando2);

//operador ternario
//en base a la condicion nos devuelve dos resultados, en este caso no es igual al uno ser string y el otro numero
let resultado = (30==='30') ? 'Si es igual' : 'NO es igual';

console.log(resultado)
//aca no comparamos los tipos si no el valor como tal, y es tomado como que es igual
resultado = (30=='30') ? 'Si es igual' : 'NO es igual';

console.log(resultado)