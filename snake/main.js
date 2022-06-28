var {maxX, maxY, airChar, snakeNodeChar, snakeHeadChar, speed, foodShapeChar, finishMsg} = require('./configParam')
const {xy, printUI} = require('./ui')
const {Node, snake} = require('./snake')
const {signKeypress} = require('./keypress')
const {Food} = require('./food')
const {GameData} = require('./gameData')
const {clearWindow} = require('./windowControl')
var s = new snake(new Node(Math.floor(maxX/2), Math.floor(maxY/2), null, null), 4);  //蛇
var food = new Food(null, null, null);


function startGame(){
    let keyArray = new Array();  //用来记录键盘按压信息 {key: key.name, time: Date.now()}
    //1.初始化游戏信息
    initGame();
    //2.启动键盘监听
    signKeypress(keyArray);  
    let gameData = new GameData();  //游戏数据(暂停状态等)
    setInterval(()=>{
        if(gameData.isOver){
            return;
        }
        //判断游戏是否结束
        let isOver = judgeGameOver(s.head, maxX, maxY);
        if(isOver){
            gameData.isOver = true;
            gameOver();  //游戏结束处理界面信息
            clearWindow();  //清屏
            printUI(xy, maxX, maxY);  //打印最新界面信息
            return;
        }
        //更新游戏暂停状态
        updateGamePauseStatus(gameData, keyArray, speed)
        if(gameData.isPause){
            return;  //游戏已暂停，直接return
        }
        //获取蛇前进方向
        let direction = getEffectiveDirectionNumber(keyArray, speed, s.direction);
        //更新蛇、蛇食物、界面信息
        updateSnakeInfoAndUiInfoAndFoodInfo(direction, s, xy, food);
        clearWindow();  //清屏
        printUI(xy, maxX, maxY);  //打印最新界面
    }, speed)
}

startGame()  //启动游戏

function updateGamePauseStatus(gameData, keyArray, speedMill){
    if(gameData==null || speedMill==null || keyArray==null){
        return;
    }
    let now = Date.now();
    for(let i=keyArray.length-1; i>=0; i--){
        let keyInfo = keyArray[i];
        if(keyInfo.time<now-speedMill){
            break;
        }
        if(keyInfo.key=='space'){
            gameData.isPause = (!gameData.isPause);
            return;
        }
    }
}

//根据最新蛇的方向更新蛇信息和ui信息和蛇食信息
function updateSnakeInfoAndUiInfoAndFoodInfo(newDirection, s, xy, snakeFood){
    s.direction = newDirection;
    let oldSnakeHead = s.head;
    let newHeadNode = getNewSnakeHeadNode(s.head, newDirection); //新的头节点坐标信息
    let isTouchFood = (newHeadNode.x==snakeFood.x && newHeadNode.y==snakeFood.y); //是否吃到蛇食
    s.add(newHeadNode); //添加新蛇头
    xy[newHeadNode.x][newHeadNode.y] = snakeHeadChar;  //界面中填充新的蛇头图案
    xy[oldSnakeHead.x][oldSnakeHead.y] = snakeNodeChar; //将旧蛇头替换成蛇身图案
    if(isTouchFood){
        //碰到蛇食
        snakeFood.randomUpdateXY();  //更新食物新坐标
        xy[snakeFood.x][snakeFood.y] = foodShapeChar; //将新的蛇食物图案放进去
    }else{
        //未碰到蛇食
        let snakeOldTail = s.tail;  //老蛇尾
        if(snakeOldTail.x!=snakeFood.x || snakeOldTail.y!=snakeFood.y){
            xy[snakeOldTail.x][snakeOldTail.y] = airChar;  //将即将丢弃的蛇尾图案从界面中去掉
        }
        s.lostTail();  //蛇尾前进一（更新蛇尾）
    }
}

//生产新的蛇头
function getNewSnakeHeadNode(snakeHead, newDirection){
    switch(newDirection){
        case 1: return new Node(snakeHead.x-1, snakeHead.y, null, null);
        case 2: return new Node(snakeHead.x+1, snakeHead.y, null, null);
        case 3: return new Node(snakeHead.x, snakeHead.y-1, null, null);
        case 4: return new Node(snakeHead.x, snakeHead.y+1, null, null);
    }
}



//获取蛇最新的方向控制(1.上 2.下 3.左 4.右)  
//keyArray：键盘输入信息  speedMill：游戏的刷新间隔时间  snakeDirection：蛇当前的方向
function getEffectiveDirectionNumber(keyArray, speedMill, snakeDirection){
    if(keyArray.length==0 || speedMill==null || snakeDirection==null){
        return snakeDirection;
    }
    let now = Date.now();
    for(let i=keyArray.length-1; i>=0; i--){
        let keyInfo = keyArray[i];
        if(keyInfo.time<now-speedMill){
            break;
        }
        let direction = directionKeyNameToNumber(keyInfo.key);
        if(direction==0){
            continue;
        }
        if(direction==snakeDirection || (direction+snakeDirection)==3 || (direction+snakeDirection)==7){
            return snakeDirection;
        }
        return direction;
    }
    return snakeDirection;
}

//方向转化(0.无方向 1.上 2.下 3.左 4.右)
function directionKeyNameToNumber(keyName){
    switch(keyName){
        case 'up': return 1;
        case 'down': return 2;
        case 'left': return 3;
        case 'right': return 4;
        default: return 0;
    }
}

function initGame(){
    //xy填入蛇食物
    xy[food.x][food.y] = food.shape;
    printInitGameUi(); //打印界面
}

//判断游戏是否结束
function judgeGameOver(snakeHead, maxX, maxY){
    if(snakeHead.x==0 || snakeHead.x==maxX || snakeHead.y==0 || snakeHead.y==maxY){
        //撞墙，游戏结束
        return true;
    }
    let p = snakeHead.next;
    while(p!=null){
        //蛇头撞蛇身，游戏结束
        if(p.x==snakeHead.x && p.y==snakeHead.y){
            return true;
        }
        p = p.next;
    }
    return false;
}

//游戏结束处理
function gameOver(){
    let x = Math.floor(maxX/2);
    let startY = Math.floor((maxY-finishMsg.length)/2);
    for(let i=0;i<finishMsg.length;i++){
        xy[x][startY+i] = finishMsg.charAt(i);
    }
}


//xy二维数组，s蛇对象
function fillSnakeToUi(xy, s){
    for(let h=s.head; h!=null; h=h.next){
        xy[h.x][h.y] = snakeNodeChar;
    }
    xy[s.head.x][s.head.y] = snakeHeadChar; 
}

function printInitGameUi(){
    fillSnakeToUi(xy, s);
    printUI(xy, maxX, maxY);
}


