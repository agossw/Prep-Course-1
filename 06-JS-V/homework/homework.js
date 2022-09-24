// No cambies los nombres de las funciones.

function crearUsuario() {
  // Crea una Clase de ES6 o una función constructor llamada "Usuario"
  // Debe aceptar un objeto "opciones" con las propiedades "usuario", "nombre", "email" y "password"
  // En el `contructor`, define el usuario, el nombre, el email y la contraseña
  // El `contructor` debe tener un método llamado "saludar" en su `prototype` que devuelva una string 'Hola, mi nombre es {{nombre}}'
  // {{nombre}} debe ser el nombre definido en cada instancia
  // Devuelve la clase
  // Tu código:
  class Usuario {
    constructor (opciones) { // (usuario. nombre, email, password)
      this.usuario = opciones.usuario;
      this.nombre = opciones.nombre;
      this.email = opciones.email;
      this.password = opciones.password;
    //  this.saludar = function () {
     //   return `Hola, mi nombre es ${this.nombre}`;
    //  } el signo $ nos permite concatenar texto con variables en una sola línea.
    }
  }
  Usuario.prototype.saludar = function () {
    return `Hola, mi nombre es ${this.nombre}`; // o return 'Hola, mi nombre es ' + this.nombre;
  }

  return Usuario;
}

function agregarMetodoPrototype(Constructor) {
  // Agrega un método al Constructor del `prototype`
  // El método debe llamarse "saludar" y debe devolver la string "Hello World!"
  // Tu código:
  Constructor.prototype.saludar = function () {
    return "Hello World!";
  }
}

function agregarStringInvertida() {
  // Agrega un método al prototype de String que devuelva la misma cadena de caracteres, pero invertida.
  // El método debe llamarse "reverse"
  // Ej: 'menem'.reverse() => menem
  // 'toni'.reverse() => 'inot'
  // Pista: Necesitarás usar "this" dentro de "reverse"
  // ponele que recibimos Tomate => e t a m o T
  String.prototype.reverse = function () { //prototype nos permite agregar metodos a clases ya creadas.
  //  var palabraInvertida = '';
  //   i = 0? no, quiero que i = largo de la palabra -1.
  //  for (var i = this.length -1; i >= 0; i--) {
  //    palabraInvertida += this[i]
  //  }
  //  return palabraInvertida;
  return this.split('').reverse().join('');
  }
}

// ---------------------------------------------------------------------------//
  //Crea el constructor de la clase "Persona"
  //Debe tener las propiedades: "nombre", "apellido", "edad" y "domicilio"
  //Debe tener un método llamado "detalle" que nos devuelve un objeto con las propiedades de la persona y sus valores.
  //Ej: { 
    //   Nombre: 'Juan',
    //   Apellido: 'Perez',
    //   Edad: 22,
    //   Domicilio: 'Saavedra 123'
    //  }

  class Persona {
    constructor(nombre, apellido, edad, domicilio) {
      // Crea el constructor
      this.nombre = nombre;
      this. apellido = apellido;
      this.edad = edad;
      this.domicilio = domicilio;
      // this.detalle = function () {
      //   return {
      //     Nombre: this.nombre,
      //     Apellido: this.apellido,
      //     Edad: this.edad,
      //     Domicilio: this.domicilio
      //   }
      // }
    } // o se puede hacer de la siguiente manera:
  detalle(){
    return {
      Nombre: this.nombre,
      Apellido: this.apellido,
      Edad: this.edad,
      Domicilio: this.domicilio
        }
  }
    
  }


function crearInstanciaPersona(nombre, apellido, edad, dir) {
  //Con esta función vamos a crear una nueva persona a partir de nuestro constructor de persona (creado en el ejercicio anterior)
  //Recibirá los valores "Juan", "Perez", 22, "Saavedra 123" para sus respectivas propiedades
  //Devolver la nueva persona creada
  var nuevaPersona = new Persona (nombre, apellido, edad, dir); // tambien puedo poner directamente return en vez de var
  return nuevaPersona;
}
  
function agregarMetodo() {
  //La función agrega un método "datos" a la clase Persona que toma el nombre y la edad de la persona y devuelve: 
  //Ej: "Juan, 22 años"
  Persona.prototype.datos = function () { // de esta manera accedemos al prototype de la clase, que es Persona
   // return (`${this.nombre}, ${this.edad}, años`);
   return this.nombre + ', ' + this.edad + ' años';
  }
}
  

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  crearUsuario,
  agregarMetodoPrototype,
  agregarStringInvertida,
  crearInstanciaPersona,
  agregarMetodo, 
  Persona
};
