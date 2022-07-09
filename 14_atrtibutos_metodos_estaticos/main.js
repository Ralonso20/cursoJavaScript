//Atributos y metodos estaticos

class Mascota{
    //constructor estatico
    static cola = 'larga';
    pelaje = 'lacio';
    static id = 0;
    constructor(nombre, edad){
        this._nombre = nombre;
        this._edad = edad;
        this._id = ++Mascota.id;
    }

    get numeroCreacion(){
        return this._id;
    }

    //metodo estatico

    static saludo(){
        return 'Mover cola';
    }
}

let mascota1 = new Mascota('Boby', 5);
let mascota2 = new Mascota('Juan', 5);
let mascota3 = new Mascota('Pepe', 5);
console.log(Mascota.cola);
console.log(mascota1.pelaje);

//el atributo estatico 
//puedo tener un contador que asigne el id de creacion cada vez que creo una nueva mascota, si lo implemento dentro del objeto este no podria saber cuando se esta creando, pero si dentro de la clase
console.log(mascota1.numeroCreacion);
console.log(mascota2._id);
console.log(mascota3._id);

class Perro extends Mascota{
    constructor(nombre, edad, raza){
        super(nombre, edad);
        this._raza = raza;
    }
}

//para acceder a los atributos y metodos estaticos no es necesario crear un objeto

console.log(Perro.cola);
console.log(Perro.saludo());

//vemos que de ciertas formas no podemos acceder
console.log(Perro.id);
console.log(Perro._id);
console.log(Perro.numeroCreacion);

let perro1 = new Perro('Rufus', 5, "Dalmata");

console.log(perro1._id);
console.log(Perro.id);
console.log(Mascota.id);