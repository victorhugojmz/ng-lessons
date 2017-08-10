"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var Pokemon = (function () {
    function Pokemon(id, nombre, puntos, tipo) {
        this.id = id;
        this.nombre = nombre;
        this.puntos = puntos;
        this.tipo = tipo;
    }
    Pokemon.prototype.atacar = function () {
        if (this.puntos > 500)
            return this.ataque = 1000;
        else
            return this.ataque = 200;
    };
    return Pokemon;
}());
exports.Pokemon = Pokemon;
var Cliente = (function () {
    function Cliente(id, nombre, rfc, curp, email) {
        this.id = id;
        this.nombre = nombre;
        this.rfc = rfc;
        this.curp = curp;
        this.email = email;
    }
    return Cliente;
}());
exports.Cliente = Cliente;
var cliente = new Cliente(1, "Juan", "OK0110101", "BAVJ02022MMC010M110", "vhbj149601@gmail.com");
var Empleado = (function () {
    function Empleado(id, nombre, sueldo) {
        this.id = id;
    }
    Object.defineProperty(Empleado.prototype, "_id", {
        get: function () {
            return this.id;
        },
        set: function (id) {
            id < 999 ? this.id = id : console.log("Numero Ilegal");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Empleado.prototype, "_nombre", {
        get: function () {
            return this.nombre;
        },
        set: function (nombre) {
            this.nombre = nombre;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Empleado.prototype, "_sueldo", {
        get: function () {
            return this.sueldo;
        },
        set: function (sueldo) {
            this.sueldo = sueldo;
        },
        enumerable: true,
        configurable: true
    });
    return Empleado;
}());
exports.Empleado = Empleado;
var Gerente = (function (_super) {
    __extends(Gerente, _super);
    function Gerente(id, nombre, sueldo, departamento) {
        var _this = _super.call(this, id, nombre, sueldo) || this;
        _this.departamento = departamento;
        return _this;
    }
    return Gerente;
}(Empleado));
var gerente = new Gerente(12922, "Victor Hugo Barrios", 1500, "Ventas");
