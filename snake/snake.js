
function Node(x, y, pre, next){
    this.x = x;
    this.y = y;
    this.pre = pre;
    this.next = next;
}

function snake(initNode, initDirection){
    this.head = initNode;  //蛇头
    this.tail = initNode;  //蛇尾
    this.direction = initDirection; //1上、2下、3左、4右
    this.length = 1;  //蛇长

    //添加蛇节点（在蛇头加）
    this.add = function(node){
        //todo 可优化点：校验新加的节点node是不是蛇自身上已有的节点，是则不能添加
        this.head.pre = node;
        node.next = this.head;
        this.head = node;
        ++this.length; //蛇长加一
    }

    //丢掉蛇尾
    this.lostTail = function(){
        if(this.length==1){
            //不能丢掉唯一的一节
            return;
        }
        let newTail = this.tail.pre;
        newTail.next = null;
        this.tail.pre = null;
        this.tail = newTail;
        --this.length; //蛇长减一
    }

    //修改蛇前进方向(不能修改成反方向)
    this.updateDirection = function(d){
        this.direction = (this.direction+d)==3||(this.direction+d)==7 ? this.direction : d;
    }

}

module.exports = {snake, Node}

