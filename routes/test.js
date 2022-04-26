var express = require('express');
var router = express.Router();


router.post('/test', async function(req, res) {
  let {a,b} = req.body;  //用变量接收请求体里面的数据
  console.log();
  res.json({
    res_code: "200",
            res_msg: "请求成功",
            data: {
                first_param: a,
                second_param: b
            },
  });
});

module.exports = router;
