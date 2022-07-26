var redis = require('redis')
var client = redis.createClient(6379, '127.0.0.1') //端口号、主机

/*
配置redis的一些监听事件
*/
// 准备连接redis-server事件
client.on('ready', function () {
  console.log('Redis client: ready')
})

// 连接到redis-server回调事件
client.on('connect', function () {
  console.log('redis is now connected!')
})

client.on('reconnecting', function () {
  console.log('redis reconnecting')
})

client.on('end', function () {
  console.log('Redis Closed!')
})

client.on('warning', function () {
  console.log('Redis client: warning')
})

client.on('error', function (err) {
    console.error('Redis Error ' + err)
})

module.exports = client;

