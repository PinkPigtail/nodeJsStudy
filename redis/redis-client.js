// 引用redisClient对象
const redisClient = require('./redis')

/**
 * redis setString
 * @param key
 * @param value
 * @param expire
 */
const setString = (key, value, expire) => {
  return new Promise((resolve, reject) => {
    redisClient.set(key, value, function (err, result) {
      if (err) {
        reject(err)
      }
      if (!isNaN(expire) && expire > 0) {
        client.expire(key, parseInt(expire))
      }
      resolve(result)
    })
  })
}

/**
 * redis getString
 * @param key
 */
const getString = (key) => {
    return new Promise((resolve, reject) => {
      redisClient.get(key, function (err, result) {
        if (err) {
          reject(err)
        }
        resolve(result)
      })
    })
  }
  
/**
 * redis removeString
 * @param key
*/
const removeString = (key) => {
    return new Promise((resolve, reject) => {
      redisClient.get(key, function (err, result) {
        if (err) {
          reject(err)
        }
        client.expire(key, parseInt(-1))
        resolve(result)
      })
    })
  }
  
// rpush 将给定值推入列表的右端 返回值 当前列表长度
const rpush = (key, token) => {
    return new Promise((resolve, reject) => {
      redisClient.rpush(key, [token], function (err, result) {
        if (err) {
          reject(err)
        }
        resolve(result)
      })
    })
  }

//查询list的值
const lrange = (key, startIndex = 0, stopIndex = -1) => {
    return new Promise((resolve, reject) => {
      redisClient.lrange(key, startIndex, stopIndex, function (err, result) {
        if (err) {
          reject(err)
        }
        resolve(result)
      })
    })
}

/**
 * 清除list中|n|个值为value的项
 * @param {*} key 
 * @param {*} n n > 0 : 从表头开始向表尾搜索，移除与 VALUE 相等的元素，数量为 n 
 *              n < 0 : 从表尾开始向表头搜索，移除与 VALUE 相等的元素，数量为 n 的绝对值
 *              n = 0 : 移除表中所有与 VALUE 相等的值
 * @param {*} value 
 * @returns 
 */
const lrem = (key, n = 1, value) => {
    return new Promise((resolve, reject) => {
      redisClient.lrem(key, n, value, function (err, result) {
        if (err) {
          reject(err)
        }
        resolve(result)
      })
    })
}
  

module.exports = {
    getString,
    setString,
    removeString,
    rpush,
    lrange,
    lrem,
}
  