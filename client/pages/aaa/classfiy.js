// pages/classfiy/classfiy.js
Page({
  data: {
    id: 0,
    classfiyNav: [
      {
        "text": "1"
      },
      {
        "text": "2"
      },
      {
        "text": "3"
      },
      {
        "text": "4"
      },
      {
        "text": "5"
      },
      {
        "text": "6"
      },
      {
        "text": "7"
      },
      {
        "text": "8"
      },
           {
        "text": "7"
      },
      {
        "text": "8"
      },
           {
        "text": "7"
      },
      {
        "text": "8"
      },
           {
        "text": "7"
      },
      {
        "text": "8"
      },
           {
        "text": "7"
      },
      {
        "text": "8"
      }
    ],
    classfiyList: [
      {
        "text": "进入1频道 >",
        // 示例格式
        "list": [
          {
            "img": "xxxxxx",
            "text": "xxxxxx"
          }
        ]
      }
    ]
  },
  tabClassfiy: function (e) {
    var that = this;
    var index = e.currentTarget.id.slice(4);
    that.setData({
      id: index
    })
  },
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
  },
  onReady: function () {
    // 页面渲染完成
  },
  onShow: function () {
    // 页面显示

  },
  onHide: function () {
    // 页面隐藏
  },
  onUnload: function () {
    // 页面关闭
  }
})