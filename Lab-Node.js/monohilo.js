console.log('Inicio de programa'); //Se abre un proceso de node.js

let i = 0; //Se declara una variable i con valor 0
setInterval(function() {
    console.log(i);
    i++; //Esto muestra que va avanzando

    if (i === 5) { //Si i es igual a 5, se detiene el proceso
        console.log('Forzamos error');
        var a = 3 + z; //Aquí se genera un error
    }
}, 1000); //Aquí se ejecuta un proceso de node.js con un intervalo de tiempo (1000)
//Equivalente a 1 segundo. Un ciclo por cada segundo.

//El proceso se detiene en el ciclo 5, ya que se genera un error en la línea 10

console.log('segunda instrucción') //Ejecuta esta instrucción después de que se detiene el proceso
//Pero en todo caso se sigue ejecutando el programa del conteo de números