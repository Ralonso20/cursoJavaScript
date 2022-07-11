//CREAR NODOS
const parrafoCero = document.createElement('p');
const parrafoCuatro = document.createElement('p');
const textoParrafoCuatro = document.createTextNode('Parrafo 4');


parrafoCero.innerHTML = 'Parrafo 0';
const nodoPadre = document.querySelector('.padre');


parrafoCuatro.appendChild(textoParrafoCuatro);


const parrafoCinco = document.createElement('p');
parrafoCinco.innerHTML = 'Parrafo 5';


nodoPadre.append(parrafoCuatro, parrafoCinco);

//INSERT BEFORE 
//debemos seleccionar al elemento padre
const parrafoUno = document.querySelector('#parrafo1');
nodoPadre.insertBefore(parrafoCero, parrafoUno);


//INSERTADJACENTELEMENT
const parrafoExtra = document.createElement('p');
parrafoExtra.innerHTML = 'Parrafo extra';

//beforeBegin - esto se incertara antes de la etiqueta de apertura en nuestro caso, div
nodoPadre.insertAdjacentElement('beforebegin', parrafoExtra);

//afterBegin - esto lo colocara despues de la etiqueta de inicio, colocandolo como un hijo
nodoPadre.insertAdjacentElement('afterbegin', parrafoExtra);

//tambien tenemos afterend y beforeend, que hacen lo mismo que la setencia begin pero al final

//OTORGAR ATRIBUTOS
parrafoExtra.setAttribute('class', 'parrafo');