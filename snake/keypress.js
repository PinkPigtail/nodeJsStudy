const readline = require('readline');
 
/**
 * objArray：该参数(数组类型)用来记录按压的键 及 按压时的时间戳
*  str是用户键盘输入
*  key是用户输入key的对象，str === key.name
*  key.ctrl和key.shift默认都是false
*  只有当key.ctrl为true，才会达到组合效果  
*/
function signKeypress(objArray){
    readline.emitKeypressEvents(process.stdin);
    process.stdin.setRawMode(true);  //禁用控制台功能
    
    process.stdin.on('keypress', (str, key) => {
        //console.log(str)
        let pressInfo = {key: key.name, time: Date.now()}
        objArray.push(pressInfo);
        //按住ctrl+c退出
        if(key.ctrl === true && key.name === 'c'){
            process.exit(0)
        }
    })
}
module.exports = {signKeypress}

// var objArray = new Array();
// signKeypress(objArray)

