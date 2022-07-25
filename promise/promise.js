//参考链接：https://www.runoob.com/js/js-promise.html

// var test = 'test', test2='test2';
// console.time(test)

// new Promise(function (resolve, reject) {
//     setTimeout(function () {
//         console.log("First");
//         resolve();
//     }, 1000);
// }).then(function () {
//     console.time(test2);
//     return new Promise(function (resolve, reject) {
//         setTimeout(function () {
//             console.log("Second");
//             resolve();
//         }, 4000);
//     });
// }).then(function () {
//     console.timeEnd(test2)
//     setTimeout(function () {
//         console.log("Third");
//         console.timeEnd(test);
//     }, 3000);
// });


function print(delay, message) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            console.log(message);
            resolve();
        }, delay);
    });
}

async function asyncFunc() {
    console.time('a')
    await print(1000, "First");
    await print(4000, "Second");
    await print(3000, "Third");
    console.timeEnd('a')
}
asyncFunc();


