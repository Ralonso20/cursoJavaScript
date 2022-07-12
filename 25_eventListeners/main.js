//EVENT LISTENERS
/*Podemos llamar al elemento como vimos anteriormente o podemos directamente hacer mencion al ID
const botonSaludo = document.querySelector('#saludoBtn')*/

//tenemos infinidad de eventos que podemos revisar en esta pagina: https://www.w3schools.com/jsref/dom_obj_event.asp


/*saludoBtn.addEventListener('click', () => {
    console.log('Hola desde funcion flecha');
})*/

/*Tenemos un problema, asi como podemos agregar eventos tambien podemos removerlos
pero al utilizar funciones anonimas no podemos hacer referencia a ellas*/

function saludo(){
 console.log('Hola desde funcion externa.');
}

//debemos recordar de no poner los parentesis porque si no se ejecutara sin ningun accionar
saludoBtn.addEventListener('click', saludo);

//saludoBtn.removeEventListener('click', saludo);


//PARAMETRO EVENT
/*El evento como tal se convierte en un parametro que nos ofrece mucha informacion
ejemplo: si el codigo de tecla fuera 13 (enter) que se imprima por consola el evento*/

// userInput.addEventListener('keypress', (event) => {
//     if(event.keyCode == 13){
//         console.log(event);
//     }
// })

//esto nos devolveria el valor en la casilla de input
userInput.addEventListener('keypress', (event) => {
    if(event.key == 'Enter'){
        console.log(event.target.value);
    }
})