let nombre = process.env.NOMBRE || 'Sin nombre' //Accedemos a las variables de entorno
let web = process.env.WEB || 'No tengo web'; //Accedemos a las variables de entorno
console.log('hola' + nombre); //Se abre un proceso de node.js}
console.log('hola' + web) //Cuando no se ha modificado en el terminal, se muestra el valor por defecto
//El valor por defecto es el definido luego de ||

//Se puede usar nodemon que ayuda a verificar los cambios que vayan teniendo los archivos y se actualizan automáticamente