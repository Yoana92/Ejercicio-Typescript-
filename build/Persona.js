"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Persona = void 0;
var Persona = /** @class */ (function () {
    function Persona(nombre, apellidos, edad, dni, cumpleanos, colorFavorito, sexo, notas) {
        if (notas === void 0) { notas = ''; }
        this.direcciones = [];
        this.telefonos = [];
        this.mails = [];
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.edad = edad;
        this.dni = dni;
        this.cumpleanos = cumpleanos;
        this.colorFavorito = colorFavorito;
        this.sexo = sexo;
        this.notas = notas;
    }
    Persona.prototype.agregarDireccion = function (direccion) {
        this.direcciones.push(direccion);
    };
    Persona.prototype.agregarTelefono = function (telefono) {
        this.telefonos.push(telefono);
    };
    Persona.prototype.agregarMail = function (mail) {
        this.mails.push(mail);
    };
    Persona.prototype.modificarDatos = function (dni, nuevaDireccion, nuevoMail, nuevoTelefono) {
        if (this.dni === dni) {
            if (nuevaDireccion) {
                this.direcciones.push(nuevaDireccion);
            }
            if (nuevoMail) {
                this.mails.push(nuevoMail);
            }
            if (nuevoTelefono) {
                this.telefonos.push(nuevoTelefono);
            }
        }
        return this;
    };
    return Persona;
}());
exports.Persona = Persona;
