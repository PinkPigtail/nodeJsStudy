var debug = require('debug')('example3');
 
debug("begin");
 
setTimeout(function(){
    debug("timeout1");
    while (true);
});
 
setTimeout(function(){
    debug("timeout2");
});
 
debug('end');
/**  运行结果
Sat, 21 May 2016 08:49:12 GMT example3 begin
Sat, 21 May 2016 08:49:12 GMT example3 end
Sat, 21 May 2016 08:49:12 GMT example3 timeout1
*/