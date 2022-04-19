/* CICLOS CON STRING */

/* le pido al usuario que ingrese datos*/
let entrada = prompt("Ingrese su nombre para recibir un turno\nDisponibilidad 10 turnos\npara salir del sistema escriba 'ESC'").toUpperCase();

/* repito el bucle hasta 10 veces a menos que se cumpla la condicion */
for (let i = 1; i <=10; i++) {
    if (entrada == "ESC") {
        alert ("Gracias por usar nuestro sistema")
        break;
    } else {
        alert (" Turno N° " + i + " para " + entrada)
        entrada = prompt("Ingrese su nombre para recibir un turno\nDisponibilidad 10 turnos\npara salir del sistema escriba 'ESC'").toUpperCase();
    }
}

/* (EXTRA) CICLOS CON NUMEROS */
/*
let entrada = parseInt(prompt("Ingresa la cantidad de veces que queres que se repita la palabra'hola'"))
let palabra = "hola"
for (let i = 0; i <= entrada; i++) {
    alert (palabra);
} 
*/
