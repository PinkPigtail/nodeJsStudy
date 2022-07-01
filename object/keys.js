let a = {a:1, b:2, c:1}
let c = Object.keys(a);  //获取对象的所有属性名
console.log(c);

Object.keys(a).map((key, item)=>{
    console.log('order:', item); //当前遍历到第几个（从0开始）
    console.log(key, a[key]);//key=>属性名    data[key]=>属性值
});

