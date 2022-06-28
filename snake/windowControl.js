function clearWindow(){
    //函数功能：清空控制台
    process.stdout.cursorTo(0,0);
    process.stdout.clearScreenDown();
}

module.exports = {clearWindow,}