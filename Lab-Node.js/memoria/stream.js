const fs = require('fs');
const stream = require('stream');

let data = '';

let readableStream = fs.createReadStream(__dirname + '/input.txt');
readableStream.setEncoding('UTF8');

readableStream.on('data', function(chunk) {
    console.log(chunk);
});

process.stdout.write('Hola');
process.stdout.write('que');
process.stdout.write('tal');

const Transform = stream.Transform;