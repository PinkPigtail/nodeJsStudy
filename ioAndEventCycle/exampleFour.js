var debug = require('debug')('example4');
 
debug("begin");
 
setTimeout(function(){
    debug("timeout1");
    /**
     * 模拟计算密集
     */
    for(var i = 0 ; i < 1000000 ; ++i){
        for(var j = 0 ; j < 100000 ; ++j);
    }
});
 
setTimeout(function(){
    debug("timeout2");
});
 
debug('end');
/**
Sat, 21 May 2016 08:53:27 GMT example4 begin
Sat, 21 May 2016 08:53:27 GMT example4 end
Sat, 21 May 2016 08:53:27 GMT example4 timeout1
Sat, 21 May 2016 08:54:09 GMT example4 timeout2  //注意这里的时间晚了好久
*/