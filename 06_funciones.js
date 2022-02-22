/**
 *   FUNCIONES:
 * al igual q las variables se pueden guardar en memoria como un valor.
 * 
 * deben cumplir funciones especpificas!
 * 
 * 2 formas de escribir funciones: 
 * 
 * - Declarativa:
 * almacena un espacio en memoria con las tareas q debe cumplir
 * para ser utilizada, asi como una variable. 
 *
 * function nombreFuncion(){
 *      cuerpo de la fx
 * }
 */

function saludar(nombre){
    return "Hola " + nombre;
}

console.log(saludar("sole"));

// otra opcion es almacenar en una variable el resultado:

var saludo = saludar("sole");
console.log(saludo);


/**
 * -De expresión:
 * se puede usar una fx como un valor y almacenarlo en una variable.
 * 
 * var suma = function(); // fx anonima xq no tiene nombre, lo q tiene nombre es el espacio de memoria donde se almacena
 * 
 */

 var suma = function(a, b){
     return a + b;
 }
 console.log(suma(2,2));

 /**
  * - Flecha o arrow function: TIENEN UN RETURN IMPLICITO!
  * alternativa para compactar las gunciones
  * 
  * var resta = () => {
  * }
  */

 var resta = (a, b) => {
    return a - b;
 }
 console.log(resta(4,2));

 var multiplicar = (a, b) => a * b; //tiene implicito el return..
console.log(multiplicar(2,3));
