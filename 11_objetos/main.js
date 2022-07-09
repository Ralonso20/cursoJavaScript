//Creacion de un objeto
let usuario = {
    nombre: 'Maria',
    edad: 20,
    estudiante: true,
    'Tiene pasaporte': true,

    idiomas:{
        nativo: 'spanish',
        extranjero:{
            ingles: 'Avanzado',
            frances: 'Medio',
            aleman:'bajo'
        }
    }
}

console.log(usuario);
console.log(usuario.edad);

//Agregar propiedades
usuario.carrera = "contabilidad";

console.log(usuario);

//Eliminar propiedad

delete usuario.edad;

console.log(usuario);

//consulta de propiedad

let has_student_property = usuario.hasOwnProperty('estudiante');

console.log(has_student_property);

let has_age_property = usuario.hasOwnProperty('edad');

console.log(has_age_property);

//METODO CORCHETE

/*Este metodo puede sustituir al punto, y nos deja tener propiedades nombradas con dos palabras siempre entre comillas
`Dos palabras` 
con el metodo de corchetes puedo verificar su existencia pero no con el metodo de punto*/

console.log(usuario['estudiante']);
console.log(usuario['Tiene pasaporte']);

/*Igualmente VSC me deja ingresar usuario. y autocompletar y se pondran los corchetes automaticamente, en otro caso tendiramos error por consola*/ 

//OBJETOS DENTRO DE OBJETOS

console.log(usuario.idiomas.extranjero.frances)
console.log(usuario.idiomas["extranjero"].ingles)

//Constructores de objetos

function Disco(artis, album, year){
    this.artis = artis,
    this.album = album,
    this.year = year
}

let disco = new Disco('Beach House', 'Bloom', 2012);
console.log(disco)