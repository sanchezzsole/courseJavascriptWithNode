/**
 * FUNCIONES DE JAVASCRIPT
 * 
 * fx mutalbes: modifican directamente el arreglo y x ende lo q hay en el espacio en memoria
 * ejemplo: push, shift, pop.
 *  
 * fx inmutalbes
 */

 var letras = ["a", "b", "c", "d", "e"];

 letras.push("f");
 console.log(letras);

 //letras.shift(); // NO necesita parametros, al ejecutar retorna el 
 // PRIMER elemento y lo borra del arreglo. 
// entonces ese elemento se podria almacenar en una variable, ej:
var primerElemento = letras.shift(); 
 console.log(letras);
 console.log(primerElemento);
 letras.shift();
 console.log(letras); // lo imprime directamente ya sin el primer elemento

 letras.pop(); //NO necesita parametros, al ejecutar retorna el 
 // ULTIMO elemento y lo borra del arreglo. 
// entonces ese elemento se podria almacenar en una variable
console.log(letras);

/**
 * var ultElemento = letras.pop(); 
 console.log(letras);
 console.log(ultElemento);
 */