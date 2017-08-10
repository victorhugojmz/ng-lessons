/* Mismo ejemplo en TS */
var mensaje;
mensaje = "Esta es un mensaje en ES5";
/*mensaje = 5; */
/* Tipos de datos */
/*     Strings  o cadenas de caracteres    */
var usuario;
/*          Arreglos de strings     */
var usuarios;
var imagenes;
/*         Number para numeros      */
var puntaje;
/*         Arreglos de numeros      */
var puntajes;
var precios;
/*       Vartiables tipo Objeto    */
var cliente;
/*    Arreglo de variables tipo objeto   */
/*let clientes: Object[];*/
var Objetos;
/* usuario = 10; Devuelve un error : "Type 10 is not assignable to type string" */
var nombre_completo;,
var edad;
nombre_completo = "Leonardo Sanchez";
edad = 25;
var presentacion = "\n     Hola! mi nombre completo es: " + nombre_completo + ". \n     Mi edad es " + edad + " anios.  \n  ";
/* Arreglo de variables de tipo number */
var numeros;
var _numeros;
numeros = [233, 1223, 1020, 122, 220];
_numeros = [7, Math.PI, 6, 124];
/* Arreglos de valores de tipo string */
var nombres;
var _nombres;
nombres = []; /* Arreglo vacío */
_nombres = ["Guadalupe", "Laura", "Michelle"];
/* Arreglos de valores de tipo any */
var aleatorios;
var _aleatorios;
aleatorios = [false, 7, "Hola Mundo"];
_aleatorios = [115, "mensaje ennviados", { 'name': "Michelle Marquez" }];
/* Arreglos de valores de tipo Object  */
var clientes;
var _clientes;
clientes = [];
_clientes = [{ 'name': "Juan", 'age': 15 }, { 'name': "Silvia", 'age': 25 }];
var arreglos = "\n\tArreglo de numeros: " + _numeros + "\n\tArreglo de nombres: " + _nombres + "\n\tArreglo de aleatorios: " + aleatorios + "\n\tArreglo de clientes " + _clientes + "\n ";
console.log(arreglos);
