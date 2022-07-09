let userAge;
//let date= new Date();
let actualYear = new Date().getFullYear();
userAge=prompt("Ingrese su edad: ");

document.write(`estamos en el ano ${actualYear}\n`);
document.write(`Si tu edad es ${userAge}\n`);
document.write(`Supongo que naciste en el ano ${actualYear - userAge}`);