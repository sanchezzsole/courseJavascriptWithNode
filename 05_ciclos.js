
/**
 * // ciclo FOR....IN
 * 
 * sirve solo para iterar dentro de objetos.
 * 
 * estructura:
 * for(varible q toma valor de cada clave... operadorIN objeto){
 *  instrucciones
 * }
 * 
 * el operador IN devuelve un booleano si la clave se encuentra en el onjeto
 * para acceder a los valores se hace con los BRACKETS
 */

var persona = {
    nombre: "sole",
    apellido: "sanch",
    edad: 36,
}
for(let key in persona){
    console.log(key, persona[key]);
}


/**
 * // CICLO FOR... OF
 * dentro de objetos que sean iterables, permite obtener los datos internos de esa coleccion, NO sirve para
 * iterar dentro de un onjeto, para eso esta el for..in
 * es para iterar arreglos o Strings
 * Estructura:
 * * for(let valor of arreglo){
 *  instrucciones
 * }
 */

var arreglo = [1, 2, 3, 4, 5];
for (let valor of arreglo){
    console.log(valor);
}

var nombre = "Sole";
for (let valor of nombre){
    console.log(valor);
}