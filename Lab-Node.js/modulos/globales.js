let i = 0;

let interval = setInterval(function() {
    if (i === 3) {
        clearInterval(interval);
    }
    i++;
    console.log('Hello world');
}, 1000);

setImmediate(function() {
    console.log('Hola');
});

//Setinteval se ejecuta cada cierto tiempo, en este caso cada segundo.
//En este caso depende de que se cumpla la condición if
//limpia el intervalo
//Este se va movimiendo de uno en uno (i++)