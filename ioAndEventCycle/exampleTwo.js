var debug = require('debug')('example2');
 
debug("begin");
 
setTimeout(function(){
    debug("timeout1");
});
 
setTimeout(function(){
    debug("timeout2");
});
 
debug('end');
 
while(true);
/**  运行结果
Sat, 21 May 2016 08:45:47 GMT example2 begin
Sat, 21 May 2016 08:45:47 GMT example2 end
*/