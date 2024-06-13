
function serompe() {
    return 3 + z;
}

function seRompeAsincrona(cb) {
    setTimeout(function () {
        try {
            return 3 + z;
        } catch (err) {
            console.error('Error en mi función asíncrona');
            cb(err);
        }   
    });
}

try {
    serompe(); // ReferenceError: z is not defined
} catch (error) {
    console.error('Vaya, algo se ha roto...');
    console.error(error.message);
    console.log('Pero no pasa nada, el error está controlado');
}

//Esta es una forma de manejar errores
//Una forma de mostrar que está ocurriendo un error y que no se detenga el programa
