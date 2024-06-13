const { exec, spawn } = require('child_process');


exec('dir', (error, stdout, stderr) => {
    if (error) {
        console.error('Error: ' + error);
        return false; // If there is an error, the following console.log is not executed
    }
    if (stderr) {
        console.error('stderr: ' + stderr);
        return false;
    }
    console.log('stdout: ' + stdout);
});

let proceso = spawn('dir', ['-la']);

console.log(proceso.pid);