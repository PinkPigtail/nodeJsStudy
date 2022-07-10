var events = require('events');
//实例化EventEmitter
var emitter = new events.EventEmitter();


// 绑定sayHi事件 (可以绑定多个同名事件，触发时会顺序触发)
emitter.on('sayHi', function(someone){
  console.log('我是', someone);
})

//绑定sayHi事件，只能被触发一次，多次触发只有首次会执行function
emitter.once('sayHi', function(someone){
  console.log(someone, '首次触发了sayHi事件');
})


emitter.on('sayHi', function(someone){
  console.log('我就是', someone);
})


emitter.emit('sayHi', 'jack马');

//module.exports = emitter;

