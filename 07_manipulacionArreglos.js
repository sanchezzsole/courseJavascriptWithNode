/**
 * FOR EACH
 * 
 */

var letras = ["a", "b", "c", "d", "e"];

console.log(letras.length);

for(let i = 0; i < letras.length; i++){
    const element = letras[i];
    console.log(element);
}

letras.forEach((elemento) => console.log(elemento));


// SOME
// verifica si al menos 1 de los elem cumple con una condicion especifica, devuelve V o F

var numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var resultados = numeros.some((numero) => numero % 2 == 0);
console.log(resultados);


// EVERY
// V o F si TODOS los elementos del arreglo cumplen la condicion

var numeros = [2, 4, 6];
var resultados = numeros.every((numero) => numero % 2 == 0);
console.log(resultados);

/**
 * FIND
 * busca elemento que cumpla cierta condicion y retorna el ELEMENTO
 * retorna el PRIMER elemento q coincida con la busqueda, SOLO uno..
 * si no encuentra el elemento retona UNDEFINED 
 * la diferencia entre FIND y FILTER es q find retorna el primer elemento que coincide
 * y SOLO ESE, filter retorna UN ARRAY con TODOS LOS ELEMENTOS que coincidan
*/

var clientes = [
    {id: 1, nombre: "sole"},
    {id: 2, nombre: "fer"},
    {id: 3, nombre: "fran"},
    {id: 4, nombre: "dante"},
    {id: 5, nombre: "fitti"},
]

var cliente = clientes.find((cliente) => cliente.id === 1);
var filter = clientes.filter((cliente) => cliente.id === 1);
console.log(clientes);
console.log(cliente);
console.log(filter);


/**
 * FINDINDEX
 * busca elemento que cumpla cierta condicion y retorna LA POSICION del elemento en el array
 * 
*/

var clientes = [
    {id: 1, nombre: "sole"},
    {id: 2, nombre: "fer"},
    {id: 3, nombre: "fran"},
    {id: 4, nombre: "dante"},
    {id: 5, nombre: "fitti"},
]

var posicion = clientes.findIndex((cliente) => cliente.id === 3);
console.log(posicion);
console.log(clientes[posicion]);

/**
 * INCLUDES
 * para determinar si en un array existe un elemento en especpifico
 * devuelve V o F!!!!
 * NO RECIBE UNA FX COMO PARAMETRO, sino el VALOR ESPECIFICO de lo q quiero buscar
 * TAMBIEN TRABAJA CON LOS STRINGS! 
 * se puede verificar si tiene cierto caracter o no
 */

var mascotas = ["perro", "gato", "conejo"];
var incluye = mascotas.includes("gato");
console.log(incluye);

// TAMBIEN TRABAJA CON LOS STRINGS! 
//  se puede verificar si tiene cierto caracter o no

console.log("perro".includes("i"));

// EJ INCLUDES COMBINADO CON FILTER

var buscador = (parametroDeBusqueda) => {
    let clientes = [
        {id: 1, nombre: "sole"},
        {id: 2, nombre: "fer"},
        {id: 3, nombre: "fran"},
        {id: 4, nombre: "dante"},
        {id: 5, nombre: "fitti"},
    ];
    return clientes.filter((cliente) => cliente.nombre.includes(parametroDeBusqueda))
} 

console.log(buscador("e"));
console.log(buscador("te"));
console.log(buscador("tt"));

/**
 * Esta fx recibe un parametroDeBusqueda (ejemplo "e" para saber si incluye elementos q contengan la letra e)
 * lo busca en el array clientes
 * lo primero q vemos es que vamos a RETORNAR el resultado de la búsqueda en clientes. eso se hace con el
 * FILTER.
 * Filter SI recibe una fx como parametro seguido de una condicion
 * va a inyectar cada elemn del arreglo, en este caso cada cliente
 * verificamos de cada cliente.nombre, q es un string en este caso, entonces seguimos con includes
 * cliente.nombre.includes(parametroDeBusqueda) en este caso parametroDeBusqueda es la "e".
 * la fx q se guarda en buscador está retornando lo q devuelve filter
 * entonces en el clg pongo el buscador, con el parametro q quiero buscar en el includes
 * 
 */

