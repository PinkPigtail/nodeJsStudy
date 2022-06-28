var {maxX, maxY, foodShapeChar} = require('./configParam')

/**
 * 蛇食物
 * @param {*} x 食物x坐标值
 * @param {*} y 食物y坐标值
 * @param {*} foodChar 食物图案符号
 */
function Food(x, y, foodChar){
    //生成[min, max)之间的随机整数
    this.randomXY = function(min, max) { // min最小值，max最大值
        return Math.floor(Math.random() * (max - min)) + min;
    }
    this.x = x==null ? this.randomXY(1, maxX) : x;
    this.y = y==null ? this.randomXY(1, maxY) : y;
    this.shape = foodChar==null ? foodShapeChar : foodChar;
    
    //随机更新food的x、y值(不能与原来的xy均相同)
    this.randomUpdateXY = function(){
        let oldX = this.x;
        let oldY = this.y;
        this.x = this.randomXY(1, maxX);
        this.y = this.randomXY(1, maxY);
        if(this.x==oldX && this.y==oldY){
            //如果产生的随机新坐标与原来的相同则修改为不同
            this.x = this.x+1>=maxX ? this.x-1 : this.x+1;
        }
    }
}

module.exports = {Food,}

