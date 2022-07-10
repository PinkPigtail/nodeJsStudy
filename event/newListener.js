var EventEmitter = require('events').EventEmitter;

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
// 只做一次，这样就不会永远循环(每新增一个事件监听器都会触发一次newListener事件)
myEmitter.once('newListener', (event, listener) => {
  console.log('first');
  if (event === 'event') {
    // 在前面插入新的监听器
    myEmitter.on('event', () => {
      console.log('B');
    });
  }
});
myEmitter.on('event', () => {
  console.log('A');
});
myEmitter.emit('event');