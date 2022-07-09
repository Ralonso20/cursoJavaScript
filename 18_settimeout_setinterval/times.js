//setTimeout con este metodo podemos hacer que una funcion se ejecute DESPUES de un cierto tiempo

function saludo(nombre){
    console.log(`Hola ${nombre}, buenos dias`);
}

//setTimeout(funcion, ms, args1, arg2, ...)
let temporizadorID = setTimeout(saludo, 2000, 'David');
/*
Con este metodo podemos anular el timeout
clearTimeout(temporizadorID);
*/

//setInterval - ejecuta una funcion CADA cierto tiempo
//setInterval(funcion, ms, args1, arg2, ...)

let numero = 5;

/* 
function conteo(){
    console.log(`lanzamiento en ${numero} segundos`);
    numero--;
    if(numero === 0){
        clearInterval(lanzamiento)
    }
}

//El metodo seguira contando despues del 0, pero contamos con clearInterval
let lanzamiento = setInterval(conteo, 1000);
*/

//La mejor forma de plantearlo seria con una funcion flecha

let lanzamiento = setInterval(() => {
    console.log(`lanzamiento en ${numero} segundos`);
    numero--;
    if(numero === 0){
        clearInterval(lanzamiento)
    }
}, 1000);


//setTimeout anidado

/*
let incrementoID = setTimeout(function incremento(){
    console.log(numero);
    numero++;
    incrementoID = setTimeout(incremento, 1000);
}, 1000);
*/

/*Debemos tener en cuenta algunas cosas
1-No usamos funciones flechas, por ser anonimas, nececitamos una funcion con nombre para poder llamarla
2-setInterval comienza a contar el tiempo cuando se llama a la funcion y el setTimeout anidado cuando finaliza
Utilziamos cada una dependiendo las nececidades si la funcion tarda mas de un segundo en ejecutarse setInterval daria problemas
deberiamos aumentar el tiempo o usar un setTimeout anidado
*/