import { Direccion } from './Direccion';
import { Telefono } from './Telefono';
import { Mail } from './Mail';

export class Persona {
  nombre: string;
  apellidos: string;
  edad: number;
  dni: string;
  cumpleanos: Date;
  colorFavorito: string;
  sexo: string;
  direcciones: Direccion[] = [];
  telefonos: Telefono[] = [];
  mails: Mail[] = [];
  notas: string;

  constructor(
    nombre: string,
    apellidos: string,
    edad: number,
    dni: string,
    cumpleanos: Date,
    colorFavorito: string,
    sexo: string,
    notas: string = ''
  ) {
    this.nombre = nombre;
    this.apellidos = apellidos;
    this.edad = edad;
    this.dni = dni;
    this.cumpleanos = cumpleanos;
    this.colorFavorito = colorFavorito;
    this.sexo = sexo;
    this.notas = notas;
  }

  agregarDireccion(direccion: Direccion): void {
    this.direcciones.push(direccion);
  }

  agregarTelefono(telefono: Telefono): void {
    this.telefonos.push(telefono);
  }

  agregarMail(mail: Mail): void {
    this.mails.push(mail);
  }

  public modificarDatos(
    dni: string,
    nuevaDireccion?: Direccion,
    nuevoMail?: Mail,
    nuevoTelefono?: Telefono
  ): Persona {
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
  }
}
  
