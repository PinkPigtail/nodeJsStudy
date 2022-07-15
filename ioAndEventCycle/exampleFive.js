var fs = require("fs");
var debug = require('debug')('example5');
 
debug("begin");
 
fs.readFile('package.json','utf-8',function(err,data){
    if(err)  
        debug(err);
    else
        debug("get file content");
});
 
setTimeout(function(){
    debug("timeout2");
});
 
debug('end');
/** 运行结果
Sat, 21 May 2016 08:59:14 GMT example5 begin
Sat, 21 May 2016 08:59:14 GMT example5 end
Sat, 21 May 2016 08:59:14 GMT example5 timeout2
Sat, 21 May 2016 08:59:14 GMT example5 get file content
*/