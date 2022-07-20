/**
rss是resident set size的缩写，即进程的常驻内存部分，进程的内存总共分为三部分：一部分是srr常驻内存，其余是交换区swap或者文件系统中。
heapTotal和heapUsed对应的是v8的堆内存信息，heapTotal是总共申请的内存量，heapUsed表示目前堆中使用的内存量。
external是指绑定到v8管理的JavaScript对象的C/C++内存使用量，简单的理解就是nodejs的C/C++扩展使用的内存数据。
arrayBuffers通常被称为对外内存或者独立内存，是由ArrayBuffer 和 SharedArrayBuffer 分配的内存。
*/
//参考地址：https://www.cnblogs.com/ZheOneAndOnly/p/15961950.html
const showMem = function(){
    let mem = process.memoryUsage();  //获取nodejs程序内存信息
    let format = function(bytes){
        return (bytes / 1024 / 1024).toFixed(2) + 'MB';
    };
    console.log('rss:' + format(mem.rss) 
             + ' heapTotal: ' + format(mem.heapTotal) 
             + ' heapUsed: ' + format(mem.heapUsed) 
             + ' external: ' + format(mem.external) 
             + ' arrayBuffers: ' + format(mem.arrayBuffers));
    console.log('------------------------------------------------------');
};


let useMem = function(){
    let size = 20 * 1024 * 1024;
    let arr = new Array(size);
    for(let i = 0; i < size; i++){
      arr[i] = 0;
    }
    return arr;
};

let total = [];
for(let j = 0; j < 5; j++){
  showMem();
  total.push(useMem());
}
showMem();