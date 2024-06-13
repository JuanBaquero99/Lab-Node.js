async function hola(nombre) {
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

async function main() {
    let nombre = await hola('Carlos');
    await hola('Carlos');
    await hablar();
    await adios('Carlos');
}

console.log('Iniciando proceso...');
main();

//Async lo que permite es crear una función que se va a comportar de manera asíncrona, es decir, que va a devolver una promesa.
//Await lo que hace es esperar a que la promesa se resuelva, es decir, a que se ejecute el resolve.
//En el ejemplo anterior, la función main se va a comportar de manera asíncrona, ya que se está utilizando la palabra async.
//Inicia el proceso, ejecuta la función main y espera a que se resuelva la promesa que se está ejecutando en la función main.