"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mail = void 0;
var Mail = /** @class */ (function () {
    function Mail(direccion, tipo) {
        this.direccion = direccion;
        this.tipo = tipo;
    }
    Mail.prototype.getDireccion = function () {
        return this.direccion;
    };
    Mail.prototype.getTipo = function () {
        return this.tipo;
    };
    Mail.prototype.setDireccion = function (direccion) {
        this.direccion = direccion;
    };
    Mail.prototype.setTipo = function (tipo) {
        this.tipo = tipo;
    };
    return Mail;
}());
exports.Mail = Mail;
exports.default = Mail;
