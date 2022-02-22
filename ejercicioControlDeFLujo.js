// 1. Escribir un programa que según el día de la semana ingresado proporcione el día en inglés.

var dia = "domingo";

if (dia === "lunes"){
    console.log("Monday");
} else if (dia === "martes"){
    console.log("Tuesday");
} else if (dia === "miercoles"){
    console.log("Wensday");
} else if (dia === "jueves"){
    console.log("Thursday");
} else if (dia === "viernes"){
    console.log("Friday");
} else if (dia === "sabado"){
    console.log("Saturday");
} else if (dia === "domingo"){
    console.log("Sunday");
}

// 1 - b

var dia = "sabado";

switch(dia){
    case "lunes": 
        console.log("Monday");
        break;
    case "martes": 
        console.log("Tuesday");
        break;
    case "miercoles": 
        console.log("Wensday");
        break;
    case "jueves": 
        console.log("Thursday");
        break;
    case "viernes": 
        console.log("Driday");
        break;
    case "sabado": 
        console.log("Saturday");
        break;
    case "domingo": 
        console.log("Sunday");
        break;
}

// 2.Escribir un programa que según el total de la compra, se agregue un valor de envio.

var costoCompra = 60;

if (costoCompra  <= 10){
    costoCompra += 3;
} else if (costoCompra  <= 20 && costoCompra > 10){
    costoCompra += 5;
} else if (costoCompra  <= 50 && costoCompra > 20){
    costoCompra += 7;
} 

console.log("El costo total con envio es: " + costoCompra);

// 2 .b

var costoCompra = 25;

switch (true) {
    case  (costoCompra  <= 10):
        costoCompra += 3;
        break;
    case  (costoCompra  <= 20 && costoCompra > 10):
        costoCompra += 5;
        break;
    case  (costoCompra  <= 50 && costoCompra > 20):
        costoCompra += 7;
        break;
}

console.log("El costo total con envio es: " + costoCompra);