
process.on('beforeExit', () => {
    console.log('El proceso va a terminar');
});

process.on('exit', () => {
    console.log('El proceso ha terminado');
});

process.on('uncaughtException', () => {
    console.error('Oops, se nos ha olvidado capturar un error');
});
process.on('uncaughtRejection', (err, origen) => {
    console.error('Oops, se nos ha olvidado capturar un error');
});

function ThatDoesNotExist() {
    // Function body
}

funcionQueNoExiste();

//Cada uno se dispara de acuerdo a la situación. Por ejemplo, si se dispara un error, se ejecuta el evento uncaughtException. Si se dispara una promesa no capturada, se ejecuta el evento uncaughtRejection. Si el proceso va a terminar, se ejecuta el evento beforeExit y, finalmente, si el proceso termina, se ejecuta el evento exit.
//Sirve para correr pruebas a la aplicación y ver si hay errores que no se han capturado.

