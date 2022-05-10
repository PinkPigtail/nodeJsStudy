/**
 * 参考资料：https://blog.csdn.net/weixin_45828332/article/details/114120710
 * 
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
// 对于没有创建的数据库，会自动创建一个数据库
mongoose.connect("mongodb://localhost:27017/student", {useNewUrlParser: true });

mongoose.connection.on('error', console.error.bind(console, '连接mongodb失败:'));
mongoose.connection.once('open', ()=>{console.log("mongodb数据库连接成功...");});

//mongoose.disconnect(); 断开连接会使得下面的触发，一般不会用到
mongoose.connection.once('close', ()=>{console.log("mongodb数据库连接断开...")});

//创建Schema对象（约束）,相当于mysql的表结构
var schema = new Schema({
    name: String,
    age: Number,    
    gender: {
        type: String,
        default: 'male'
    },
    addr: String,
    // createDate: {
    //     type: Date,
    //     default: Date.now
    // }
}, {timestamps:true});  //{timestamps:true}参数[可选]会使得自动给集合添加 createdAt 和 updatedAt这两个字段

//student是model名称，students映射的mongodb集合名称，如果没有students集合就会创建
var stuModel = mongoose.model('student', schema, 'students');
//插入数据
stuModel.create(
    {
        name: 'jiangxiao2',
        age: 18,
        gender: 'male',
        addr: '地球',
    },(err, doc)=>{
        if(err){
            console.log(err);
        }else{
            //console.log("插入文档："+doc);
        }
    }
);

var gradesSchema = new mongoose.Schema({
        name: String,
        grades: Number
});

var gradesModel = mongoose.model('grades', gradesSchema);

// //插入一条文档数据
// new gradesModel({name: 'xiaoming', grades: 100}).save((err, docs)=>{
//     if(!err){
//         console.log('保存的文档：');
//         console.log(docs);
//     }
// });

// //插入多个文档数据
// gradesModel.insertMany({name:'a', grades: 98},{name:'b', grades:97}, (err, docArray)=>{
//     if(!err){
//         //打印插入的文档数据
//         console.log('插入的文档');
//         console.log(docArray);
//     }
// });

//查找
gradesModel.find((err, docArray)=>{
    if(!err){
        console.log("grades集合中的所有文档：");
        console.log(docArray);
    }
})

gradesModel.find({name:/x/, grades:{$gte:100}}, (err, docArray)=>{
    if(!err){
        console.log("name中存在x, grands>=100分的文档：");
        console.log(docArray)
    }
})

gradesModel.findOne({$where:function (){return this.grades==100;}}
                    ,function(error,doc){
                        if(!error){
                            console.log("findOne查询到的文档：");
                            console.log(doc);     
                        }
                    }
)

// 跳过第1个后，只显示2个数据，按照grades由大到小排序，且只显示grades字段
gradesModel.find().skip(1).limit(2).sort('-grades').select('grades').exec((err,docs)=>{
    if(!err){
        console.log("跳过第1个后，只显示2个数据，按照grades由大到小排序，且只显示grades字段:");
        console.log(docs);
    }
})

//显示集合中的文档数量
gradesModel.find().count((err,count)=>{
    console.log('文档数量：');
    console.log(count)
})

// 返回集合中的grades的值
gradesModel.find().distinct('grades',(err,distinct)=>{
    console.log('grades去重后的值数组：');
    console.log(distinct)
})


//更新匹配的一条数据
gradesModel.updateOne({name:'xiaoming'}, {$set:{grades:90}},(err, rows)=>{console.log(rows);});

//更新匹配的所有数据
gradesModel.updateMany({name:'a'}, {$set:{grades:90}},(err, rows)=>{console.log(rows);});

