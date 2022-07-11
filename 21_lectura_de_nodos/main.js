//LECTURA POR NODOS

//LECTURA DE ELEMENTO POR ID
let elementoPorID = document.querySelector('#parrafo1');
elementoPorID.innerHTML = "Holi";

//LECTURA DE ELEMENTO POR CLASE
//Al tener varias clases querySelector solo trae la primero pero...
//let elementosPorClase = document.querySelector('.parrafo');
//elementosPorClase.innerHTML = "Pedro";


//Tenemos la funcion querySelectorAll para resolver esto

let elementosPorClase = document.querySelectorAll('.parrafo');

//debemos tener en cuenta que esto nos trae una nodeList y no un array, como no vamos a disponer de todos los metodos de los arreglos 
//Debemos tranformar el nodeList en un arreglo, para esto utilizamos el metodo de propagacion
const arreglo = [...elementosPorClase];

arreglo[1].innerHTML = "Pedro";

//LECTURA DE ELEMENTO POR ETIQUETA
//Como se ve podemos igualmente trabajar con los nodeList, simplemente debemos convertirlos cuando nececitemos los metodos de un array
let elementosPorEtiquetas = document.querySelectorAll('p');

elementosPorEtiquetas[2].innerHTML = 'Que ondis';
