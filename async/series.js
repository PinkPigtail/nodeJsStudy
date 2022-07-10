/**
sync.series：串⾏⽆关联：
多个函数或⽅法要依次执⾏，但是他们之间并没有什么联系，只有先后的顺序，⽐如我要写⼀个⽂件，写完之后像⽤户发送邮
件，这两者之间没有必然的联系，但是发邮件必须在写⽂件完成之后。
*/

//参考文档：http://t.zoukankan.com/lilight-p-7512244.html

var async = require('async');
console.time('series');

function a(callback) {
    console.log('log1');
    callback(null, 'one'); //callback('i am err','one');异常处理
}

function b(callback) {
    console.log('log2');
    if(1>2){
        callback(null, 1);
        return;
    }
    callback('err', null);
}

async.series([a,b], function(error, result) {
  //最后结果
  console.log('error: ' + error);
  console.log(result);
  console.timeEnd('series');
});

