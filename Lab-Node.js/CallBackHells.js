function hola(nombre, miCallback) {
  setTimeout(function() {
    console.log('Hola' + nombre);
    miCallback(nombre);
  }, 1500);
} 

//Function hola tiene un tiempo de ejecución
// Va a mostrar hola + nombre
//Pero ese nombre lo va a recibir de la función callback
//Por lo tanto luego de 1500 milisegundos
//Va a mostrar Hola + nombre

function hablar(callbackHablar) {
  setTimeout(function() {
    console.log('Bla bla bla bla...');
    callbackHablar();
  }, 1000);
}

//En este caso la función hablar tiene el tiempo definido
//Va a mostrar el mensaje bla bla bla bla
//Ese mensaje lo va a recibir de la función callback
//Se muestra cuando se invoca la función callbackHablar


function adios(nombre, otroCallback) {
  setTimeout(function() {
    console.log('Adios' + nombre);
    otroCallback();
  }, 1000);
}

//En este caso la función adios tiene el tiempo definido
//De nuevo tiene un tiempo donde ejecuta adios

function conversacion(nombre, veces, callback) {
  if (veces > 0) {
    hablar(function() {
      conversacion(nombre, --veces, callback);
    });
  } else {
    adios(nombre, callback);
  }
}

console.log('Iniciando proceso...');
hola('Carlos', function(nombre) {
  adios(nombre, function() {
    hablar(nombre, function() {
      console.log('Terminando proceso...');
    });
  });
});

//Finalmente la función principal que va a ejecutar todo
//Inicia el proceso
//Llama a la función hola con el nombre Carlos
//Luego llama a la función adios con el nombre Carlos
