var util = require('util')
function person(firstname)
{
    this.firstname=firstname;
    function f(){
      return "ff";
    }
}
person.prototype.lastname = function(){return "aaaa"};
var p = new person("a");

function person2(t){
  this.t = t;
}


//00000   First  aaaaaa    second bbbbb   2222 Third
new Promise(function (resolve, reject) {
  setTimeout(function () {
      console.log(new Date().getSeconds);
      console.log("First");
      resolve();
  }, 1000);
  console.log('0000000');
}).then(function () {
  console.log('aaaaaaaaa');
  return new Promise(function (resolve, reject) {
      setTimeout(function () {
          console.log(new Date().getSeconds);
          console.log("Second");
          resolve();
      }, 4000);
  });
  console.log('11111111');
}).then(function () {
  console.log('bbbbbbbbbb');
  setTimeout(function () {
      console.log(new Date().getSeconds);
      console.log("Third");
  }, 3000);
  console.log('22222222');
});


function q(){
  (function (){console.log('i am into function')})();
}

q();

var myPromise = new Promise(function(resolve, reject){
  console.log(1, 'Do sth.')
  setTimeout(() => {
      console.log(2, '========');
      resolve('Ok.');
  }, 3000);
})

console.log(3, myPromise)

setInterval(() => {
  console.log(4, myPromise, '++++++++')
}, 1000)

let e
var b = {a:1}
console.log(e);
console.log(b.c);
