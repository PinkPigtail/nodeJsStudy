var a:any = 1;
console.log(a);

var msg:string = 'hello'
console.log(msg);

var n:number = 1.2;
console.log(n);

var arr:number[] = [1,2];
console.log(arr);
var arr2:Array<number> = [3,4];
console.log(arr2);


var b:boolean = false;
console.log(b);

var x:[number, string] = [1, 'a'];
console.log(x[0]);

enum Color {Red, Green, Blue}
var c:Color = Color.Red;
console.log(c);

var n1:number | null | undefined = 1;
n1 = null;
n1 = undefined;

var str = '1' 
var str2:number = <number> <any> str   //str、str2 是 string 类型
console.log(str2)


var  aa = x=>x+1;
console.log(aa(1));
