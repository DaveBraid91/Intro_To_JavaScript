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

"\n"
"\\"
"We are \"Vikings\""
'\''

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

//CONSTANTES
const pi = 3.14;
//pi = 2;
const gmailEnding = "@gmail.com";

//FLUJO DE CÓDIGO
//Condicionales
n = 8;
if(n % 2 === 1)
{
    console.log("n es impar");
}
else
{
    console.log("n es par");
}

if(n > 0)
{
    console.log("n es positivo.");
}
else if(n < 0)
{
    console.log("n es negativo.");
    console.log("Pero está trabajando en ello.");
}
else
{
    console.log("n es cero.")
}

n = 15;

if(n >= 1 && n <= 10)
{
    console.log(`El número ${n} está entre 1 y 10`);
}
else
{
    console.log("Te he pedido un número entre 1 y 10, pedazo de cacho de trozo de mula en miniatura.");
}

if(!(n < 1 || n > 10))
{
    console.log(`El número ${n} está entre 1 y 10`);
}
else
{
    console.log("Te he pedido un número entre 1 y 10, pedazo de cacho de trozo de mula en miniatura.");
}

let x = (n > 0) ? "Positivo" : "Negativo";

const colorGreen =
{
    red : 0,
    green : 15,
    blue : 0
}

//color.green = 150;
//color[1] = 150;
colorGreen['green'] = 255;

const persona = 
{
    nombre : "Saria",
    apellido : "Kokiri",
    edad : 56,
    colorDePelo : colorGreen
}

//Esto sería mal hecho
// let alumnos = ["Pepito", "Juanita", "José"];
// console.log(alumnos);
// console.log(alumnos[1]);
// alumnos[7] = "Saria";
// console.log(alumnos[5]);

let alumnos = ["Pepito", "Juanita", "José"];
console.log(alumnos);
console.log(alumnos[1]);
alumnos.push("Saria");
console.log(alumnos);
let primerAlumno = alumnos.shift();
console.log(alumnos);


//alumnos = [];

const personas = [
    {
        nombre : "Saria",
        apellido : "Kokiri",
        edad : 56,
        colorDePelo : colorGreen
    },
    {
        nombre : "Eduardo",
        apellido : "Manostijeras",
        edad : 15,
        colorDePelo : "Negro"
    },
    {
        nombre : "Mario",
        apellido : "Bros",
        edad : 23,
        colorDePelo : "Rojo"
    }
]

console.log(personas[1].apellido)

personas.push([
    {
        nombre : "Rigoberto",
        apellido : "Augustino",
        edad : 101,
        colorDePelo : "Verde",
    },
    {
        nombre : "Lila",
        apellido : "Manila",
        edad : 44,
        colorDePelo : "Violeta",
        
    }
])

console.log(personas[3])


const board = [
    ["O", "O", " "],
    [" ", "X", "O"],
    ["X", "X", " "]
];

let isOutOfJail = false;
let contador = 0;

while(!isOutOfJail)
{
    let tirada = Math.floor(Math.random() * 6 + 1);

    //Esta es la manera elegante
    isOutOfJail = tirada > 4;

    //Esta es correcta, pero menos elegante
    // if(tirada > 4)
    // {
    //     isOutOfJail = true;
    // }
    // else
    // {
    //     isOutOfJail = false;
    // }
    contador++;

}

for(let i = 0; i < personas.length; i++)
{

}

console.log(`He salido de la cárcel tras ${contador} tiradas.`)

alert("Hola, qué tal?");

//Funciones
function funcionSaludo()
{
    console.log("Saludos desde el IED");
}

funcionSaludo();
// funcionSaludo();
// funcionSaludo();
// funcionSaludo();
// funcionSaludo();

//Funcion con un parámetro
function funcionSaludoConNombre(nombre)
{
    console.log(`Saludos desde el IED, ${nombre}!`);
}
//Llamamos a la función
funcionSaludoConNombre("Renata");

//Función con dos parámetros
function funcionSaludoNombreApellido(nombre, apellido)
{
    console.log(`Nombre: ${nombre}\nApellido: ${apellido}`);
}
//LLamamos a la función
funcionSaludoNombreApellido("Renata", "Glask")

// //Funciones que devuelven valores
// function rollDie()
// {
//     return Math.floor(Math.random() * 6 + 1);
// }

// let roll = rollDie();

// console.log(roll);

// function rollDieWithFaces(faces)
// {
//     if(faces >= 4 && typeof(faces) === number)
//     {
//         return Math.floor(Math.random() * faces + 1);
//     }
//     else if(typeof(faces) !== number)
//     {
//         return "Introduce un número.";
//     }
//     else
//     {
//         return "Introduce un número mayor que 3";
//     }
    
// }

let rollDie = function() 
{
    return Math.floor(Math.random() * 6 + 1);
}

let roll = rollDie;

console.log(roll());

const rollDieWithFaces = function(faces)
{
    if(faces >= 4 && typeof(faces) == 'number')
    {
        return Math.floor(Math.random() * faces + 1);
    }
    else if(typeof(faces) != 'number')
    {
        return "Introduce un número.";
    }
    else
    {
        return "Introduce un número mayor que 3";
    }
}

const rollDieXTimes = function(times, faces, func)
{
    for(let i = 0; i < times; i++)
    {
        console.log(func(faces));
    }
}

rollDieXTimes(6, 20, rollDieWithFaces);

const personaje = 
{
    nombre : "Pablo",
    clase : "Rogue",
    atacar : function(func)
    {
        func(2, 8, rollDieWithFaces);
    },
    defender(func)
    {
        func(1, 12, rollDieWithFaces);
    },
    printPersonaje()
    {
        return `Soy ${this.nombre}, y soy ${this.clase}.`
    }
}

const personaje2 =
{
    nombre : "Rebeca",
    clase : "Paladín",
    atacar : function(func)
    {
        func(2, 8, rollDieWithFaces);
    },
    defender(func)
    {
        func(1, 12, rollDieWithFaces);
    },
    printPersonaje : personaje.printPersonaje
}
personaje.atacar(rollDieXTimes);

console.log(personaje.printPersonaje());

personaje.nombre = "Abigail";

console.log(personaje.printPersonaje());

console.log(personaje2.printPersonaje());

const print = personaje.printPersonaje;
/*
n = Math.Random();

n *= 7;

console.log(n);

n += 1;

console.log(n);

n = Math.floor(n);

console.log(n);
*/