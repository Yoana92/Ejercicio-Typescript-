"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Telefono = void 0;
var Telefono = /** @class */ (function () {
    function Telefono(tipo, numero, extension) {
        this.tipo = tipo;
        this.numero = numero;
        this.extension = extension;
    }
    Telefono.prototype.getNumero = function () {
        return this.numero;
    };
    Telefono.prototype.setNumero = function (numero) {
        this.numero = numero;
    };
    Telefono.prototype.getTipo = function () {
        return this.tipo;
    };
    Telefono.prototype.setTipo = function (tipo) {
        this.tipo = tipo;
    };
    Telefono.prototype.getExtension = function () {
        return this.extension;
    };
    Telefono.prototype.setExtension = function (extension) {
        this.extension = extension;
    };
    Telefono.prototype.getDireccion = function () {
        return "".concat(this.tipo, " ").concat(this.numero).concat(this.extension ? ' ext. ' + this.extension : '');
    };
    return Telefono;
}());
exports.Telefono = Telefono;
