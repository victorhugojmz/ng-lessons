/* Mismo ejemplo en TS */ 
 let mensaje: string;
 mensaje = "Esta es un mensaje en ES5";
 /*mensaje = 5; */
/* Tipos de datos */
/*     Strings  o cadenas de caracteres    */
let usuario: string;
/*          Arreglos de strings     */
let usuarios: string[];
let imagenes: Array <string>; 
/*         Number para numeros      */
let puntaje: number;
/*         Arreglos de numeros      */
let puntajes: number[];
let precios: Array <number>;
/*       Vartiables tipo Objeto    */
let cliente: Object; 
/*    Arreglo de variables tipo objeto   */ 
/*let clientes: Object[];*/
let Objetos: Array <Object>;
/* usuario = 10; Devuelve un error : "Type 10 is not assignable to type string" */
 let nombre_completo: string;
 let edad: number;
 nombre_completo = "Leonardo Sanchez";
 edad = 25;
 let presentacion: string = `
     Hola! mi nombre completo es: ${ nombre_completo }. 
     Mi edad es ${ edad } anios.  
  `;
 /* Arreglo de variables de tipo number */
 let numeros: number[ ];
 let _numeros: Array <number>;
 numeros = [233,1223,1020,122,220];
 _numeros = [0b0111,Math.PI,6,124];
 /* Arreglos de valores de tipo string */
 let nombres: string[];
 let _nombres: Array <string>;
 nombres = [ ]; /* Arreglo vacío */
 _nombres = ["Guadalupe","Laura","Michelle"]; 
 /* Arreglos de valores de tipo any */
 let aleatorios: any[];
 let _aleatorios: Array <any>;
 aleatorios = [false,0b0111,"Hola Mundo"];
 _aleatorios = [115,"mensaje ennviados",{'name': "Michelle Marquez"}];
 /* Arreglos de valores de tipo Object  */
 let clientes: Object[];
 let _clientes: Array <Object>;
 clientes = [ ];
 _clientes = [{'name':"Juan", 'age': 15},{'name':"Silvia",'age':25}]; 
 let arreglos: string =  `
	Arreglo de numeros: ${ _numeros }
	Arreglo de nombres: ${ _nombres }
	Arreglo de aleatorios: ${ aleatorios }
	Arreglo de clientes ${ _clientes }
 `;
 console.log(arreglos);