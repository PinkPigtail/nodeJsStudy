/**
async.waterfall：串⾏有关联
瀑布流函数,串⾏执⾏数组中的每⼀个函数最后执⾏回调。语法：async.waterfall(tasks,callback) 第⼀个参数tasks是⼀个数
组，数组包含的是需要依次执⾏的函数。
第⼆个参数为回调函数，当瀑布流函数（即tasks数组中的函数）执⾏出现错误时会执⾏这个回调函数并将错误信息返回,当瀑
布流函数⽆错误时，会在执⾏完tasks数组中包含的函数后执⾏这个回调函数。
*/

async.waterfall([
    myFirstFun,
    mySecondFun,
    myLastFun
  ],function(err,result) { // result回调函数
    // result 相当于tasks数组中最后⼀个函数（myLastFun）的返回值done
    console.log(result);  // myLastFun
  })

  function myFirstFun(callback) {
    callback(null,'one','two');
  }

  function mySecondFun(arg1,arg2,callback) {
    // arg1 相当于 'one' ,arg2 相当于 'two'
    callback(null,'three');
  }
  
  function myLastFun(arg1,callback) {
    // arg1 相当于 'three'
    callback(null,'done');
  }