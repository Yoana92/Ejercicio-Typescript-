import { Persona } from './Persona';
import { Direccion } from './Direccion';
import { Telefono } from './Telefono';
import { Mail } from './Mail';


const direccion1 = new Direccion(
  'Calle Industria',
  1,
  '39610',
  'El Astillero',
  'Cantabria',
  'Principal',
  1,
  'A'
);

const direccion2 = new Direccion(
  'Avenida Constitucion',
  123,
  '39010',
  'Santander',
  'Cantabria',
  'Principal'
);

const direccion3 = new Direccion(
  'Calle Isaac Peral',
  101,
  '39012',
  'Santander',
  'Cantabria',
  'Principal'
);


const telefono1 = new Telefono('Móvil', '61234567', 'Personal');
const telefono2 = new Telefono('Fijo', '942000000', 'Trabajo');
const telefono3 = new Telefono('Trabajo', '666666666', 'Personal');


const mail1 = new Mail('correo1@gmail.com', 'Personal');
const mail2 = new Mail('correo2@hotmail.com', 'Trabajo');
const mail3 = new Mail('correo3@yahoo.es', 'Personal');


const persona1 = new Persona(
  'Juan',
  'Sanchez',
  25,
  '12345678A',
  new Date('1998-01-01'),
  'Azul',
  'Hombre'
);

persona1.agregarDireccion(direccion1);
persona1.agregarDireccion(direccion2);
persona1.agregarTelefono(telefono1);
persona1.agregarTelefono(telefono2);
persona1.agregarMail(mail1);
persona1.agregarMail(mail2);

const persona2 = new Persona(
  'Laura',
  'Sanchez',
  30,
  '87654321B',
  new Date('1991-05-23'),
  'Verde',
  'Mujer',
  'Alérgica a los frutos secos'
);

persona2.agregarDireccion(direccion3);
persona2.agregarTelefono(telefono3);
persona2.agregarMail(mail3);

const persona3 = new Persona(
  'Pedro',
  'Diaz',
  40,
  '56789012C',
  new Date('1983-05-12'),
  'Rojo',
  'Hombre'
);


persona3.agregarDireccion(direccion1);
persona3.agregarDireccion(direccion3);
persona3.agregarTelefono(telefono2);
persona3.agregarTelefono(telefono3);
persona3.agregarMail(mail1);
persona3.agregarMail(mail3);


console.log(persona1.toString());
console.log(persona2.toString());
console.log(persona3.toString());



const mailNuevo = new Mail('nuevo@mail.com', 'Personal');
const personaModificada = persona1.modificarDatos(
  '12345678A',
  new Direccion(
    'Calle Nueva',
    2,
    '39010',
    'Santander',
    'Cantabria',
    'Principal',
    2,
    'B'
  ),
  mailNuevo,
  new Telefono('Móvil', '123123123', 'Personal')
);



console.log(personaModificada.toString());
console.log(persona2.toString());
console.log(persona3.toString());
