//Así se declara una variable
let n = 9;
//Se imprime la variable "n" en la consola
console.log(n);

//Tipos de variable predefinidos
//Números
let myNumber = n;
n = 3;
console.log(`myNumber vale: ${myNumber} \nn vale: ${n}`);
let myNumber2 = 5.55555555;


let myBeautifulLittleVariable;
//let my_beautiful_little_variable; (mal)

console.log(typeof(myNumber));
console.log(typeof(myNumber2));

//¿Qué puñeta es un NaN?
let number = 0/0;
console.log(number + 45);
console.log(typeof(NaN));

//Booleanos
let myBool = true;
let myBool2 = false;

//String
let myString = "Dijo: 'Hola, ¿Qué tal?'";
console.log(myString);
myString = 'Dijo: "Hola, ¿Qué tal?"';
console.log(myString);
let myString2 = `Dijo: "What's up, hommie?"`;
console.log(myString);
console.log("9" + 9);
console.log(myString + " " + myString2);
console.log(`${myString} ${myString2}`);

console.log(myString.length);
console.log(`myString en minúsicula: ${myString.toLowerCase()}`);
console.log(`myString no ha cambiado: ${myString}`);
//A partir de esta línea myString;
myString = myString.toLowerCase();

console.log(`La primera 'a' en myString está en el índice: ${myString.indexOf('hola')}`);

let saludo = myString.slice(myString.indexOf('hola'), myString.indexOf('hola') + 'hola'.length);
console.log(saludo);

let saludoGritando = saludo.toUpperCase();

console.log(myString2.replace('hommie', 'Usuario Random'));
//Undefined

//Null

//Operadores
// Suma + 
// Resta -
// Multiplicación *
// División /
// Módulo %
// Exponente **
// Añadir 1 n++, ++n
// Restar 1 n--, --n;

console.log("El módulo de 22 entre 2 es: " + 22 % 2);

console.log("7 elevado a 12 es: " + 7 ** 12);

n = 4;

console.log(++n);
console.log(n);

//n = n + 4;
n += 4;
console.log(n);
//n = n - 5;
n -= 5;
console.log(n);
//n = n % 2;
n %= 2;
console.log(n);
/*
n = Math.Random();

n *= 7;

console.log(n);

n += 1;

console.log(n);

n = Math.floor(n);

console.log(n);
*/