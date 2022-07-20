var fs = require('fs');
//fs.readFileSync方法为阻塞式读取文件数据,读完了数据才会往下执行
var data = fs.readFileSync('./README.md');  //注意这里的文件地址./README.md是索引到项目下的，而不是当前文件目录下
console.log(data.toString());
console.log('fs.readFileSync阻塞式读取了文件数据\n');

//fs.readFile是非阻塞读取文件
fs.readFile('./README.md', function(err, data){
    if(err){
        return console.error(err);
    }
    console.log(data.toString());
})
console.log('fs.readFile还在读取文件数据中......');