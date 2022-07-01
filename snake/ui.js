const {fullWall} = require('./wall')

var xy;  //存放界面图案的二位数组
const {airChar, maxX, maxY} = require('./configParam');  

function init(maxX, maxY){
  xy = new Array();
  for(let i=0; i<=maxX; i++){
    xy[i] = new Array();
  }
  for(let i=0; i<=maxX; i++){
    for(let j=0; j<=maxY; j++){
      xy[i][j] = airChar;
    }
  }
}

init(maxX, maxY);  //初始化数组
fullWall(xy, maxX, maxY) //填充墙体

//打印ui界面
function printUI(xy, maxX, maxY){
  let lineInfo = '';
  for(let i=0; i<=maxX; i++){
    for(let j=0; j<=maxY; j++){
      lineInfo = `${lineInfo}${xy[i][j]}`;
    }
    lineInfo=`${lineInfo}\n`;
  }
  process.stdout.write(lineInfo);
}


module.exports = {printUI, xy}