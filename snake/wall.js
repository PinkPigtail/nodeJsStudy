const {wallChar} = require('./configParam')

//填充墙体
function fullWall(ui, maxX, maxY){
    for(let x=0; x<=maxX; x++){
        //竖方向
        ui[x][0] = wallChar;
        ui[x][maxY] = wallChar;
    }
    for(let y=0; y<=maxY; y++){
        //横方向
        ui[0][y] = wallChar;
        ui[maxX][y] = wallChar;
    }
}

module.exports = {fullWall, }