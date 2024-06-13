const http = require('http');

http.createServer(function (req, res) { // req: request, res: response
    console.log('Nueva petición!');
    console.log(req.url); //Requerimos la url del request

    res.writeHead('Hola, ¿qué tal?'); //Escribimos la respuesta del servidor

    res.end(); // Terminamos la respuesta
}).listen(3000); //Escucha el proceso del servidor

console.log('Escuchando http en el puerto 3000'); //Mensaje de que el servidor está escuchando


//No es buena idea usar node como administrador por seguridad
