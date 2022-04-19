/* 
STRING (CADENA):
"texto" 
'texto'

NUMERO:
1
2
3

BOOLEANOS:
True 
False
Null
Undefined 
*/

/* 
var (de alcance global) 
el valor de esa variable va a ser el ultimo declarado
*/

/*
PROBLEMAS DEL VAR (SE SOBRESCRIBE)
var nombre = 'Cristian';
nombre = 5;
console.log(nombre);
*/

/*
parseFloat = numero flotante con coma (,) para precios
parseInt = enteros, al entero mas proximo, borra todo despues de la coma
*/

const IVA = 1.21;
const ImpPais = 1.8;
const Ganancias = 1.35;

/*
CALCULAR IVA
let precio = parseFloat(prompt("Ingresa el valor del juego"))
console.log(precio)
console.log(precio * IVA)
*/

/* 
APLICAR DESCUENTO %
let precio = parseFloat(prompt("ingrese un precio"))
let porcentaje = parseInt (prompt("Ingrese un descuento"))

let descuento = precio * porcentaje / 100
console.log(precio - descuento)
*/

/*
CONDICIONALES
Sirven para marcar distintos caminos que va a tomar mi codigo
== para consultar si un valor es igual a algo
si consulto por algo verdadero no es necesario

else if anidados
y un else al final para salir si todas las condiciones son falsas
uso al final de prompt ".toLowerCase()" para minuscula y ".toUpperCase()" para Mayusculas.

EJEMPLO CONDICIONALES
let bebida = prompt("Ingrese la bebida a tomar").toLowerCase();

if(bebida == "cafe" || "café") {
    console.log("voy a tomar cafe")
} else if(bebida == "chocolatada") {
    console.log("voy a tomar chocolatada")
} else if(bebida == "te") {
    console.log("voy a tomar te")
} else {
    console.log("¿y que estas tomando?")
}
*/

/*
OPERADORES LOGICOS
|| operador OR significa "ó" una cosa ó la otra
&& operador AND significa "y" una cosa y la otra 

EJEMPLO AND
let num1 = 5;
let num2 = 10;

if (num1 == 5 && num2 == 10){
    console.log("v")
} else {
    console.log("f")
}

TABLA DE VERDAD AND
num1(v) && num2(v) = v
num1(v) && num2(f) = f
num1(f) && num2(v) = f
num1(f) && num2(f) = f

-------------------------------------------------

EJEMPLO OR
let num1 = 10;
let num2 = 20;

if (num1 == 10 || num2 == 20){
    console.log("v")
} else {
    console.log("f")
}

TABLA DE VERDAD ORD
num1(v) && num2(v) = v
num1(v) && num2(f) = v
num1(f) && num2(v) = v
num1(f) && num2(f) = f
*/


/*
CICLOS E ITERACIONES
> mayor estricto
< menor estricto
i++ es igual a decir  i= i+1

EJEMPLO FOR
En vez de hacer esto:
console.log(1)
console.log(2)
console.log(3)
console.log(4)
console.log(5)
console.log(6)
console.log(7)
console.log(8)
console.log(9)
console.log(10)

Hago esto:
for(let i = 1; i < 11;i++){
    console.log(i)
}


EJEMPLO INICIO Y FIN
Lo mas comun es que el usuario me indique el fin del ciclo.

let inicioCiclo = parseInt(prompt("Ingrese el inicio del ciclo"))
let finCiclo = parseInt(prompt("Ingrese la cantidad de numeros a mostrar desde 1 "))
for(let i = inicioCiclo; i <= finCiclo; i++){
    console.log(i)
}

----------------------------------------------------------

EJEMPLO WHILE
Si pongo while(true) crea un ciclo infinito 
o agrego una condicion que siempre va a ser verdadera
cualquier numero que no sea 0 me da verdadero. 
El 0 lo interpreta como falso (del binario compuerta logica cerrada)

if(0) {
    console.log("V")
} else {
    console.log("F")
}

Con isNan consulto si es un numero.

VALIDADOR DE NUMERO.
Una variable que comience "true" y termine "false" sino sera infinito

let continua = true;

while(continua) {
    let numero1 = parseFloat(prompt("Ingrese un numero")) 
    let numero2 = parseFloat(prompt("Ingrese un numero"))
    
    if (isNaN(numero1) || isNaN(numero2)) { 
        alert("ingrese un numero valido")
    } else {
        continua = false
    }
}

Condicion de exito,
isNaN (numero1) || isNaN (numero2) == false

EJEMPLO NEGANDO LA CONDICION
let continua = true;

while(continua) {
    let numero1 = parseFloat(prompt("Ingrese un numero")) 
    let numero2 = parseFloat(prompt("Ingrese un numero"))
    
    if (!(isNaN(numero1) || isNaN(numero2))) { 
        continua = false
    } else {
        alert("ingrese un numero valido")
    }
}

EJEMPLO VALIDANDO LA OPERACION
let continua = true;

while(continua) {
    let numero1 = parseFloat(prompt("Ingrese un numero")) 
    let numero2 = parseFloat(prompt("Ingrese un numero"))
    let operacion = prompt ("Ingrese una operacion (+,-,/,*)")
    
    if (!(isNaN(numero1) || isNaN(numero2)) && !(numero2 == 0 && operacion == "/")) { 
        continua = false
    } else {
        alert("ingrese un numero valido")
    }  

    if (operacion != "+") {

    }
}
*/

let continua = true;

while(continua) {
    let numero1 = parseFloat(prompt("Ingrese un numero")) 
    let numero2 = parseFloat(prompt("Ingrese un numero"))
    let operacion = prompt ("Ingrese una operacion (+,-,/,*)")
    
    if (!(isNaN(numero1) || isNaN(numero2)) && !(numero2 == 0 && operacion == "/")) { 
        continua = false
    } else {
        alert("ingrese un numero valido")
    }  

    if (operacion != "+") {

    }
}



