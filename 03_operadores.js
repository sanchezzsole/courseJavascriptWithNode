/**
 * OPERADORES
 * 
 * - DE ASIGNACIÓN:
 * =
 * Ej: var x = 2;
 * 
 * - DE ADICION:
 * +=
 * 
 * - DE RESTA:
 * -=
 * 
 * - DE MULTIPLICACION
 * *=
 * 
 * - DE DIVISION
 * /=
 * 
 * - DE RESIDUO:
 * %=
 * x = x & y;  me da el residuo
 * 
 * - DE EXPONENCIACION
 * **=
 * x = x ** y;
 * 
 * 
 * 
 * - OPERADORES DE COMPARACION: compara los operandos y devuelve true o false
 * 
 * - EL IGUAL: 
 *      == compara el contenido sin importar el tipo de dato, ej 3 == "3" da true.
 *      === estrictamente igual.
 * - NO ES IGUAL
 *      != idem a == compara valor mas alla del tipo de dato
 *      !== estrictamente desigual
 * 
 * - MAYOR Y MENOR QUE..
 * <, <=, >, >=
 * 
 * - ARITMETICOS:
 * +, -, *, /, %, **
 * 
 *  - DE INCREMENTO Y DECREMENTO
 *      ++numero incrementa en el momento, en numero++ lo muestra incrementado en la siguiente vez q uso la variable.
 *      --numero
 * incrementa el valor de la variable numero en la unidad q se pida
 * 
 * - LOGICOS:
 *      AND: &&
 *      OR: ||
 *      
 * - DE CONCATENACION
 *      +  solo con Strings
 * 
 * - CONDICIONAL (condicion ? valor1 : valor2)
 * compuesto x una condicion seguido del operador q va a verificar si la condicion resuelve V o F
 * y después el valor a retornar en funcion de lo q resuelva esa condicion: el valor1 o el valor2
 * ej: console.log(2 > 3 ? 'el número es mayor' : 'el número es menor');
 * primero ejecuta la condicion, con el ? resuelve, si es V retorna el 1er valor, si es F, retorna el 2do valor
 * 
 * 
 * - DE DESESTRUCTURACION PARA OBJETOS:
 * obtiene alguna propiedad especifica de un objeto.
 * se obtiene asi:
 * var {nombreDeLaPropiedad} = nombreDelObjeto;
 * 
 * ej: 
 * var persona {
 *  nombre: "Sole",
 *  apellido: "Sanch"
 * }
 * var {nombre} = persona; // se pueden agregar x comas todas las propiedades del objeto q querramos
 * console.log(nombre) // imprime "Sole"
 * console.log(persona) // imprime el objeto completo
 * 
 * se puede cambiar el nombre de las key para desestructurar, asi:
 *      var {nombre: name} = persona;
 *      console.log(name); // imprime "Sole"
 * 
 * 
 * - DE DESESTRUCTURACION DE ARREGLOS:
 * var arreglo = [1, 2, 3, 4, 5];
 *  var[primeraPosicion] = arreglo;
 *      console.log(primeraPosicion); // imprime 1, porque al desestructurar un array toma por orden las posiciones
 * primero la cero, luego la uno, y asi sucesivamente, separado por comas, ej para imprimir el 1 y el dos:
 *      var[primeraPosicion, dos] = arreglo;
 *      console.log(primeraPosicion) // imprime 1
 *      console.log(dos) // imprime 2
 * 
 * 
 * - DE MIEMBRO O ACCESO DE PROPIEDAD:
 * 
 *  var persona {
 *  nombre: "Sole",
 *  apellido: "Sanch"
 * }
 * 
 * DOT NOTATION:
 * console.log(persona.nombreClave); // imprime el valor asociado a la clave q escribamos.
 * 
 * BRACKETS NOTATION:
 * console.log(persona["nombreClave"]); // imprime el valor asociado a la clave q escribamos.
 * 
 * 
 * - DE DETERMINACION DE TIPO (tipeof)
 *  Retorna el tipo de dato de un valor
 * ej;
 * console.log(tipeof "Sole"); // devuelve String
 */