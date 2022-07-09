//Clases

class Player{
    constructor(nombre, colorSombrero){
        this._nombre = nombre;
        this._colorSombrero = colorSombrero;
    }

    saltar(){}
    correr(){}
    saludar(){
        return `Hola soy ${this._nombre} y mi sombrero es ${this._colorSombrero}`;
    }

    get miNombre(){
        return this._nombre;
    }

    set poneNombre(newName){
        this._nombre = newName;
    }
}

let player1 = new Player("Mario", "Rojo");
let player2 = new Player("Luigi", "Verde");

console.log(player1);

console.log(player1.saludar());
console.log(player2.saludar());

//GET

console.log(player1.miNombre);
//SET
player1.poneNombre = 'Pedro';
console.log(player1);

//Creacion de SUBCLASE

class Pet extends Player{
    constructor(nombre, colorSombrero, colorPiel){
        super(nombre, colorSombrero);
        this._colorPiel = colorPiel;
    }

    get colorPiel(){
        return this._colorPiel;
    }

    set colorPiel(nuevoColor){
        this._colorPiel = nuevoColor;
    }

    comer(){
        return "Yo como manzanas";
    }

    //Reescribir un metodo clase padre

    saludar(){
        return super.saludar() + ", ademas soy una mascota";
    }
}

let mascota1 = new Pet("Yoshi", "Invisible", "Verde");
console.log(mascota1);

/*podemos usar los metodos heredados*/

console.log(mascota1.saludar())
console.log(mascota1.comer())

//Reescribir un metodo clase padre

console.log(mascota1.saludar())

/*Las clases no no gosan del concepto de HOISTING, quiere decir que no las puedo llamar desde cualquier parte del codigo a diferencia de una funcion
para crear un objeto antes debe estar la clase, una funcion podria llamarla primero antes de definirla*/

