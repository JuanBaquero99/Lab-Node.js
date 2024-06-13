function SoyCallback(callback) {
    console.log(nombre, 'Soy un callback')
    setTimeout(function () {
        console.log('Soy un callback asincrono')
        callback();
    }, 1000);
}


//El SoyCallback es una función que recibe un callback como parámetro.
//El callback es una función que se ejecuta después de un tiempo determinado.
//El setTimeout es una función que recibe dos parámetros, el primero es una función y el segundo es el tiempo en milisegundos.
//El setTimeout ejecuta la función después del tiempo determinado.
//El callback se ejecuta después de un segundo. 

console.log('Inicio');
SoyCallback(function () {
    console.log('He sido llamado desde el callback')
});

console.log('Fin');

//El console.log('Inicio') se ejecuta primero.
//El SoyCallback se ejecuta después.
//El console.log('Fin') se ejecuta después del SoyCallback.
//El soy callback recibe una función que se ejecuta después de un segundo.