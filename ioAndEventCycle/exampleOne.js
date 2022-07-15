//参考资料：https://blog.csdn.net/u010285974/article/details/84383557
var debug = require('debug')('example1');
 
debug("begin");
 
setTimeout(function(){
    debug("timeout1");
});
 
setTimeout(function(){
    debug("timeout2");
});

debug('end');
//运行命令：DEBUG="example1" node ./io/exampleOne.js
/** 运行结果
Sat, 21 May 2016 08:41:09 GMT example1 begin
Sat, 21 May 2016 08:41:09 GMT example1 end
Sat, 21 May 2016 08:41:09 GMT example1 timeout1
Sat, 21 May 2016 08:41:09 GMT example1 timeout2
*/