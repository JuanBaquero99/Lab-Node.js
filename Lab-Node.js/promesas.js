function hola(nombre) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            console.log('Hola ' + nombre);
            resolve(nombre);
        }, 1500);
    });
}

function hablar(nombre) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Hablando...');
            resolve(nombre);  // Devuelve el nombre
        }, 1000);
    });
}

function adios(nombre) {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            console.log('Adios ' + nombre);
            resolve();
        }, 1000);
    });
}

console.log('Iniciando proceso...');
hola('Carlos')
    .then(hablar)
    .then(adios)
    .then((nombre) => {
        console.log('Terminando proceso...');
    })
    .catch(error => {
        console.error('Ha habido un error:');
        console.error(error);
    });


//Hay que tener en cuenta la jerarquia de ejecución (Aunque sea asincrono)
//Es decir que hola (Una función que ha sido creada previamente) recibe un parametro que va a ser un nombre
//Este parametro sera igual para hablar, adios
//Es decir que el contexto que inicia el proceso define que el parametro de hola es Carlos (nombre)
//El then permitira continuar las promesas