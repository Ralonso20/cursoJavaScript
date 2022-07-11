//CREAR NODOS
const parrafoCuatro = document.createElement('p');
const textoParrafoCuatro = document.createTextNode('Parrafo 4');
//Para agregar el nodo al documento usaremos el metodo append child el mismo que se aplicara al nodo padre
//en este caso seria la etiqueta div que contiene los otros 3 parrafos

const nodoPadre = document.querySelector('.padre');

//AGREGAR NODOS

//nodoPadre.appendChild(parrafoCuatro);
parrafoCuatro.appendChild(textoParrafoCuatro);

//OTRA FORMA DE AGREGAR TEXTO

const parrafoCinco = document.createElement('p');
parrafoCinco.innerHTML = 'Parrafo 5';

//nodoPadre.appendChild(parrafoCinco);

/*La diferencia entre textNode y innerHTML es que el textNode va a escribir el texto tal cual, a diferencia del inner
por ejemplo si hubiera escrito <h3>Parrafo 5</h3>  en el navegador apareveria como un encabezado 3*/

//el metodo appendChild nos deja agregar de a un nodo, pero el metodo append nos deja agrega de a varios
nodoPadre.append(parrafoCuatro, parrafoCinco);