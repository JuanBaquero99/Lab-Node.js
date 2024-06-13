//let bufer = Buffer.alloc(1); // Crea un buffer de 1 byte. Un espacio de memoria reservado para almacenar datos.
let bufer = Buffer.from([1, 2, 3]); // Crea un buffer a partir de un arreglo. Tres espacios reservados para el buffer
let bufer2 = Buffer.from('Hola'); // Crea un buffer a partir de un string. Cuatro espacios reservados para el buffer

console.log(bufer); // <Buffer 00> // Muestra el contenido del buffer en hexadecimal.


let abc = Buffer.alloc(26); // Crea un buffer de 26 bytes. Un espacio de memoria reservado para almacenar datos.
console.log(abc); // <Buffer

for (let i = 0; i < 26; i++) {
    abc[i] = i + 97; // Asigna el valor de la letra en ASCII al buffer.
} //Recorre el abecedario

console.log(abc); // <Buffer 61 62 63 64 65 66 67 68 69 6a 6b 6c 6d 6e 6f 70 71 72 73 74 75 76 77 78 79 7a> // Muestra el contenido del buffer en hexadecimal.
