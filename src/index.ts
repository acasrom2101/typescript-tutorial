//Declaración de variables
const z = "Fran";
if(true){
    var x="Maria";
    let y="Jose"; //y tiene ámbito de bloque
}

x="Pepito"; //x tiene un ámbito global, podemos modificar el valor del if
console.log(x);

var y;

//const z=1; Deben estar inicializadas si o si y no se pueden cambiar

/**
 * Primitivos
 * 
 * string
 * number (incluye decimales)
 * boolean
 * 
 */

let nombre:string = "Jose Antonio";
let edad:number = 18;
let mayorEdad:boolean = true; //También vale mayor_edad

/**
 * Datos especiales
 * 
 * any
 * unknown
 * void
 * 
 */

//Any provocaría un error en tiempo de compilación
let cualquierCosa:any = "Hola";
cualquierCosa=2;
cualquierCosa=true;

//Uso del tipo unknown
let tipoDatoDesconocido:unknown;

tipoDatoDesconocido = "Nombre";
tipoDatoDesconocido = 18;

if (typeof(tipoDatoDesconocido) == "string"){
    console.log(tipoDatoDesconocido.toUpperCase());
}

console.log("Tu nombre es "+nombre);
console.log(`Your next line is ${nombre}`)