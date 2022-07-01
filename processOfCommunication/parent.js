
//参考链接：https://vimsky.com/examples/usage/node-js-process-send-method.html

// Require fork method from child_process 
// to spawn child process
const fork = require('child_process').fork;
  
// Child process file
const child_file = 'processOfCommunication/child.js';
  
// Spawn child process
const child = fork(child_file);
  
// Start listening to the child process
child.on('message', message => {
    // Message from the child process
    console.log('Message from child:', message);
});