//index.js
var qcloud = require('../../vendor/wafer2-client-sdk/index')
var config = require('../../config')
// var util = require('../../utils/util.js')

Page({
    data: {
        requestResult: '',
        canIUseClipboard: wx.canIUse('setClipboardData')
    },

    testCgi: function () {
        // util.showBusy('请求中...')
        var that = this
        wx.request({
          // url: "http://op.juhe.cn/onebox/weather/query",
          url: "http://localhost:5000",
          header: {
            "Content-Type": "application/x-www-form-urlencoded"
          },
          method: "get",
          data: { cityname: "上海", key: "1430ec127e097e1113259c5e1be1ba70" },
          // data: Util.json2Form({ cityname: "上海", key: "1430ec127e097e1113259c5e1be1ba70" }),
          complete: function (res) {
            console.log(res, 'test11111')
            if (res == null || res.data == null) {
              console.error('网络请求失败');
              return;
            }
          }
        }),


    //     qcloud.login({
    //         success: res => {
    //             this.setData({ userInfo: res, logged: true })
    //             // util.showSuccess('登录成功')
    //             console.log('login success')
                
    //         },
    //         fail: err => {
    //             console.error(err)
    //             // util.showModel('登录错误', err.message)
    //         }
    //     })
    // ,
        wx.request({
            url: `${config.service.host}/weapp/products`,
            // login: true,
            success (result) {
              console.log('request success', result);
              
                // util.showSuccess('请求成功完成')
                that.setData({
                    requestResult: JSON.stringify(result.data)
                })
            },
            fail (error) {
                // util.showModel('请求失败', error);
                console.log('request fail', error);
            }
        })
    },

    copyCode: function (e) {
        var codeId = e.target.dataset.codeId
        wx.setClipboardData({
            data: code[codeId - 1],
            success: function () {
                util.showSuccess('复制成功')
            }
        })
    }
})

var code = [
`router.get('/demo', controllers.demo)`,
`module.exports = ctx => {
    ctx.state.data = {
        msg: 'Hello World'
    }
}`
]
