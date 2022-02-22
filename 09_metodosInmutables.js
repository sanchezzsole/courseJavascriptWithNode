/**
 * METODOS INMUTABLES:
 * MAP();
 * devuelve un nuevo arreglo, NO modifica el origen
 * map recibe una fx como parametro, REQUIERE UNA ARROW FUNCTION!!!. por cada iteracion retona el elemento modificado. MAP DEBE RETURN EL ELMENENTO MODIFICADO
 */

var estudiantes = ["Fer", "Sole", "Fran", "Vale"];
// por ej para modificar este arreglo x uno de objetos.
// map trae un nuevo arreglo, entonces almacenamos en una variable:
// map tb recibe una fx omo parametro!
var asistencia = estudiantes.map((nombre) => {
    //hay q retornar x cada iteracion el elemento modificado
    // en este caso retorno un objeto con dos propiedades: nombre y asistencia
    // antes de eso, en la fx q le pasamos como paramentro a map,
    // mar inyecya cada elemento del array q recorre
    return objeto = {
        nombre: nombre,
        asistencia: false
    };
})
console.log(estudiantes);
console.log(asistencia);
console.log(estudiantes);
// usamos estudiantes, recorremos con map cada elemento y lo transofrmamos.
// en este caso los transofmramos cada uno a un objeto
// para eso en la fx q le pasamos a map, map inyecta el elemento en cada iteracion,
// en este caso el elemento es un nombre x eso el parametro es nombre
// y map debe retornar el elemento modificado, x eso agragamos el return y el oj q vamos a devolver

// por ej si quisieramos agregar un punto en cada nombre:
var nombreConPunto = estudiantes.map((nombre) => `${nombre}.`);
console.log(nombreConPunto);
console.log(estudiantes);

var productos = [
    {nombre: "camisetas", precio: 15},
    {nombre: "zapatillas", precio: 20},
    {nombre: "pantalón", precio: 25}
];

var productosConImpuesto = productos.map((producto) => {

return {
    /**
     * ES6: spret operator: ...nombreObjeto(de cada objeto, no del arreglo objetos)
     * ayuda a expandir al objeto producto dentro del nuevo objeto, agarra las propiedades
     * y las incluye en el nuevo objeto. Especie de copia de las propiedades de producto y agregandolas
     * en el nuevo objeto.
     */
    ...producto, //uso las propiedades de producto
    impuesto: .12 // agrego el impuesto
    // asi me aseguro de retornar un nuevo objeto y no el mismo.
}});

console.log(productos);
console.log(productosConImpuesto);

var precios = productos.map((producto) => producto.precio);
console.log(precios);

//productos.forEach((producto) => console.log(producto.precio)); //asi tambien me los traeria los precios..

/**
 * FILTER:
 * no modifica el arreglo de origen, AYUDA A FILTRAR ELEMENTOS DENTRO DE UN ARREGLO, EN BASE A UNA CONDICION
 * QUE DEVUELVE UN VALOR LOGICO
 * filter recibe como parametro OTRA FX que filtra cada elemento del array y RETORNA LA CONDICIONAL ESTA FX
 *  
 */
var estudiantes = [
    {nombre: "Fran", edad: 6, matriculado: true},
    {nombre: "Fer", edad: 38, matriculado: true},
    {nombre: "Sole", edad: 36, matriculado: false},
    {nombre: "Dan", edad: 16, matriculado: true},
    {nombre: "Fitti", edad: 83, matriculado: false},
];

//var mayoresDeEdad = estudiantes.filter((estudiante) => estudiante.edad >= 21);
var mayoresDeEdad = estudiantes.filter((estudiante) => estudiante.edad >= 21 && estudiante.matriculado);

console.log(estudiantes);
console.log(mayoresDeEdad);

/**
 * REDUCE:
 * REDUCE TODO EL ARREGLO A UN SOLO VALOR
 * puede ser cualquier valor: num, String, boleano, array, objeto
 * RECIBE DOS PARAMETROS (la fx y un estado inicial del acumulador): 
 * - el primero es una FX que recibe 2 parametros (acumulador, cadaItemDelArray)
 * en el acumulador se va acumulando toda la suma..
 * - un ESTADO INICIAL DEL ACUMULADOR (en este caso 0)
 */

var calificaciones = [3, 5, 9, 10, 10]; // calificaciones de un estudiante
// si x ej hay q obtener el promedio:

var suma = calificaciones.reduce((acumulador, calificacion) => acumulador + calificacion, 0);

console.log(calificaciones);
console.log(suma);

console.log(suma / calificaciones.length);

// OTRO EJEMPLO CON REDUCE:

var edades = [21, 21, 23, 43, 21, 43, 18, 18, 23, 23];
// si por ej hay q retorar UN OBJETO con propiedades, cada propiedad la clave tendra EDAD
// LA SALUDA DEBERIA SER ALGO ASI: 
//{   
//     21: 3,
//     43: 2
// }

var resultado = edades.reduce((acumulador, edad) =>{
    if(!acumulador[edad]){ // si no existe la clave en cuestion x ej 21
        acumulador[edad] = 1; // que la inicialice en 1
    } else {
        acumulador[edad]++;
    }
    return acumulador;
}, {})

console.log(edades);
console.log(resultado);
/**
 * var resultado = edades.reduce(() =>{}, {})
 * en donde (() =>{}, en vez de un nro como valor inicial va {} q es un objeto vacío, porque voy a 
 * retornar un objeto)
 */



    // La funcion llamada 'sumarElTipo' recibe un array de strings como argumento
    // que contiene tipos de vehiculos y debe devolver un objeto con la cantidad
    // de veces que se repita cada tipo.
    // El objeto que devuelve tiene como propiedades el nombre de cada vehiculo y su valor es la cantidad de veces que se repite.
    // Ej:
    // sumarElTipo(['auto', 'moto', 'auto']); debe retornar {auto: 2, moto: 1}
    // Tip: podes usar el ciclo for o el metodo de Array 'reduce'
var vehiculos = ['auto', 'moto', 'bici', 'auto', 'bici', 'bus', 'bus', 'bici', 'moto'];

 var sumarElTipo = vehiculos.reduce((acumulador, vehiculo) => {
     if(!acumulador[vehiculo]){
        acumulador[vehiculo] = 1;
     } else {
         acumulador[vehiculo]++;
     }
     return acumulador;
 }, {})

 console.log(sumarElTipo);


 // OTRO EJEMPLO CON REDUCE
// un arreglo de ventas q tiene objetos, cada uno con tres propiedades

 var ventas = [
     {nombre: "camiseta", precio: 15, totalVendido: 10},
     {nombre: "zapatilla", precio: 150, totalVendido: 8},
     {nombre: "pantalón", precio: 20, totalVendido: 30},
 ];

 // queremos obtener el total de plata q se vendió de CADA PRODUCTO (mult entre precio y cant prod)

 var resultado = ventas.reduce((acumulador, producto) => {
     let totalVentas = producto.precio * producto.totalVendido;
     // agregamos una propiedad q devuelva ese total,
     // la propiedad tendra como key el nombre del producto, ej camiseta: totalVentas
     acumulador[producto.nombre] = `el total es: $${totalVentas}`;
     return acumulador;
 }, {})
 console.log(ventas);
 console.log(resultado);

 // OTRO EJEMPLO:

 var estudiantes = [
    {nombre: "Fran", edad: 6, matriculado: true},
    {nombre: "Fer", edad: 38, matriculado: true},
    {nombre: "Sole", edad: 36, matriculado: false},
    {nombre: "Dan", edad: 16, matriculado: true},
    {nombre: "Fitti", edad: 83, matriculado: false},
];

// si tenemos q obtener por ej la cantidad de estudiantes q han sido 
// matriculados y los que NO han sido maticulados.

// PRIMERO vamos a hacer con map() que nos devuelva solo la propiedad matriculado

var resultado = estudiantes
// podemos ENCADENAR LOS METODOS, ej seguido de todo el map poner .reduce y todo lo del reduce
// siempre que el valor q devuelva map sea iterable tambien
.map((estudiante) => estudiante.matriculado)
.reduce((acumulador, item) => {
    if(item){
        acumulador.matriculado++;
    } else {
        acumulador.noMatriculado++;
    }

    return acumulador;
}, {matriculado: 0, noMatriculado: 0})

console.log(estudiantes);
console.log(resultado);

