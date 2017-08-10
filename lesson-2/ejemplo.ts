export class Pokemon 
{
    id: number;
    nombre: number;
    puntos: number; 
    tipo: string;
    ataque:  number;
    constructor (id: number , nombre: number, puntos: number,  tipo: string)
    {
        this.id  =  id;
        this.nombre = nombre; 
        this.puntos = puntos;
        this.tipo = tipo;
    }        
    public atacar():any 
    {
        if(this.puntos > 500 ) 
           return  this.ataque = 1000; 
        else
           return this.ataque = 200; 
    }
 }

export class Cliente  
{
    id: number;
    nombre: string;
    rfc: string;
    curp: any; 
    email: string;

    constructor(id : number  , nombre : string, rfc: string , curp : any , email : string )
    {
        this.id  = id; 
        this.nombre = nombre;
        this.rfc = rfc;
        this.curp = curp;
        this.email  =  email;
    }
}
var cliente = new Cliente(1,"Juan", "OK0110101", "BAVJ02022MMC010M110", "vhbj149601@gmail.com");

export class Empleado 
{
    id: number;
    nombre: string;
    sueldo: number;
    constructor(id: number , nombre: string , sueldo: number )
    {
        this.id =  id;
    }
    get _id ( ): number 
    {
        return this.id;
    } 
    get _nombre ( ): string 
    {
        return this.nombre; 
    } 
    get _sueldo( ): number
    {
        return this.sueldo; 
    }
    set _id(id: number)
    {
        id < 999 ? this.id = id : console.log("Numero Ilegal");          
    }
    set _nombre( nombre: string ) 
    {
        this.nombre = nombre;
    }
    set _sueldo( sueldo: number )
    {
        this.sueldo = sueldo; 
    }
}
class Gerente extends Empleado 
{
    departamento: string;    
    constructor(id: number , nombre: string , sueldo: number, departamento: string)
    {
        super(id, nombre, sueldo);
        this.departamento = departamento;    
    }
}
var gerente =  new Gerente(12922, "Victor Hugo Barrios" , 1500 , "Ventas"); 