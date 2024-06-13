console.info('Inicio del módulo consola.js');
console.error('Hubo un error');
console.warn('Este es un aviso');

var tabla = [
    {
        a: 1,
        b: 'Z',
    },
    {
        a: 2,
        b: 'Otra',
    },
    ];

console.table(tabla); //Muestra en forma de modulos

//Para verificar datos y logs

console.group('Conversation');
console.log('Hola');
console.log('Bla bla bla');
console.log('Adios');
console.groupEnd('Conversation');