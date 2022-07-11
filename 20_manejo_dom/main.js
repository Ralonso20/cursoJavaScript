//Seleccion de elementos por ID

let elementoPorID = document.getElementById('parrafo1');

elementoPorID.innerHTML = 'HTML'

//Seleccion de elementos por clases

let elementosPorClase = document.getElementsByClassName('parrafo');

console.log(elementosPorClase);

elementosPorClase[1].innerHTML = ('CSS');

//Seleccionar por etiqueta

let elementosPorEtiquetas = document.getElementsByTagName('p');

elementosPorEtiquetas[2].innerHTML = ('JS');

//Modificando estilo

elementoPorID.style.backgroundColor = 'blue';
elementoPorID.style.color = 'white';
elementoPorID.style.borderRadius = '8px';
elementoPorID.style.width = '250px';
elementoPorID.style.textAlign = 'center';
