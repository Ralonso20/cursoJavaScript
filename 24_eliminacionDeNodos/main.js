const parrafoCuatro = document.createElement('p');

parrafoCuatro.innerHTML = 'Parrafo 4';
const nodoPadre = document.querySelector('.padre');


nodoPadre.appendChild(parrafoCuatro);

//ELIMINAR NODOS
const parrafoUno = document.querySelector("#parrafo1");
const parrafoDos = document.querySelector("#parrafo2");
const parrafoTres = document.querySelector("#parrafo3");
//removeChild
nodoPadre.removeChild(parrafoUno);

//remove
parrafoDos.remove()

//replaceChild
nodoPadre.replaceChild(parrafoCuatro, parrafoTres);
