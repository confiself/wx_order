//index.js
var qcloud = require('../../vendor/wafer2-client-sdk/index')
var config = require('../../config')
var util = require('../../utils/util.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    //购物车数据
    orderNums:0,
    orderFee:52,
    message: 'Hello MINA!',
    // background: ['green', 'red', 'yellow'],
    //左右滑动数据
    menus: [
      {
        category: '超值套餐', data: [{ price: 53, name: '能量套餐', status: '已售罄', detail: '320卡路里', imagePath:'/images/banner1.png', orderNums: 0}, 
          { price: 53, name: '营养满分套餐', status: '', isNew: 'true', imagePath: '/images/banner1.png' }]
      }, 
      {category: '主食沙拉', data: [
        { price: 53, name: '库斯米蜜桃沙拉', status: '已售罄', imagePath: '/images/banner1.png' },
        { price: 53, name: '肌肉沙拉', status: '', imagePath: '/images/banner1.png' }]
      },
      {
        category: '谷物', data: [{ price: 53, name: '小米', status: '已售罄', imagePath: '/images/banner1.png' },
          { price: 53, name: '大豆', status: '', imagePath: '/images/banner1.png' }]
      }, 
      {
        category: '三明治', data: [{ price: 53, name: '鸡蛋三明治', status: '已售罄', imagePath: '/images/banner1.png' },
          { price: 53, name: '牛肉三明治', status: '', imagePath: '/images/banner1.png' }]
      }
      ]
  },
  changeIndicatorDots: function (e) {
    this.setData({
      indicatorDots: !this.data.indicatorDots
    })
  },
  changeVertical: function (e) {
    this.setData({
      vertical: !this.data.vertical
    })
  },
  changeAutoplay: function (e) {
    this.setData({
      autoplay: !this.data.autoplay
    })
  },
  intervalChange: function (e) {
    this.setData({
      interval: e.detail.value
    })
  },
  durationChange: function (e) {
    this.setData({
      duration: e.detail.value
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})