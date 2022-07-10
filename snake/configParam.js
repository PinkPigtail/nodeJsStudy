
//游戏静态配置数据
module.exports = {
    wallChar: '回',  //墙图案字符
    airChar: '  ',  //空白处字符
    snakeNodeChar: '蛇',  //蛇身节点图案字符
    snakeHeadChar: '🐸', //蛇头节点图案字符   windows建议使用：@@  macbook建议使用：🐸
    foodShapeChar: '🐟',  //食物  window建议使用：肉  macbook建议使用：🐟
    finishMsg: '游戏结束，江晓你太菜了',  //游戏结束提示信息
    maxX: 20,  //墙坐标的最大x值，竖方向为x轴，原点在左上角
    maxY: 20,  //墙坐标的最大y值，横方向为y轴，原点在左上角
    speed: 300,  //蛇前进的速度（本质含义是刷新界面的间隔毫秒数）
    
}