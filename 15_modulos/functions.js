const PI = 3.14;

export function area(radio){
    return PI*radio**2;
}

//Otra forma de exportar es con Default, podemos asignarle el nombre que queramos pero solo podremos tener una exportacion default
export default function perimetro(radio){
    return 2*PI*radio;
}


/* 
Una forma

function area(radio){
    return PI*radio**2;
}

export{area};*/ 