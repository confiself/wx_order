// pages/address/add/add.js
var util = require('../../../utils/util.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userName: '',
    phone: '',
    address: '',
    addressDetail: '',
    errorHint: '',
    addressBean: {},
    addressRegion: '',
  },

  save: function(e){
    console.log('enter save..')
    var hint = '';
    if (util.isBlank(this.data.userName) || util.isBlank(this.data.phone)){
      hint = '收货人姓名和联系电话不能为空'
    }
    else if (util.isBlank(this.data.addressRegion) || util.isBlank(this.data.addressDetail)) {
      hint = '收货地址不能为空'
    }
    console.log(hint);
    if (hint != ''){
      this.setData({
        errorHint: hint,
      });
      return;
    }
    //向上一级页面传递信息
    var pages = getCurrentPages();
    var currentPage = pages[pages.length - 1];
    var prevPage = pages[pages.length -2];
    var addressList = prevPage.data.addressList;
    addressList.push({'address': this.data.addressRegion + this.data.addressDetail, 
                      'userName': this.data.userName,
                      'phone': this.data.phone});
    prevPage.setData({
        addressList: addressList
    });
    wx.navigateBack({
      
    });



  },
  userNameInput: function(e){
    this.setData({
      userName: e.detail.value
    });
  },
  phoneInput: function (e) {
    this.setData({
      phone: e.detail.value
    });
  },
  addressRegionInput: function (e) {
    this.setData({
      addressRegion: e.detail.value
    });
  },
  addressDetailInput: function (e) {
    this.setData({
      addressDetail: e.detail.value
    });
  },

  //正则部分来自https://blog.csdn.net/Time888/article/details/72417527?locationNum=8&fps=1
  //修复部分异常情况
  chooseAddress: function () {
    var that = this;
    wx.chooseLocation({
      success: function (res) {
        console.log(res);
        var regex = /^(北京市|天津市|重庆市|上海市|香港特别行政区|澳门特别行政区)/;
        var REGION_PROVINCE = [];
        var addressBean = {
          REGION_PROVINCE: '',
          REGION_COUNTRY: '',
          REGION_CITY: '',
          ADDRESS: ''
        };
        function regexAddressBean(address, addressBean) {
          regex = /^(.*?[市州]|.*?地区|.*?特别行政区)(.*?[市区县])(.*?)$/g;
          var addxress = regex.exec(address);
          if (! addxress){
            return;
          }
          if (addxress.length >= 1){
            addressBean.REGION_CITY = addxress[1];            
          }
          if (addxress.length >= 2) {
            addressBean.REGION_COUNTRY = addxress[2];
          }
          if (addxress.length >= 3) {
            addressBean.ADDRESS = addxress[3] + "(" + res.name + ")";
          }
          console.log(addxress);
        }
        if (!(REGION_PROVINCE = regex.exec(res.address))) {
          regex = /^(.*?(省|自治区))(.*?)$/;
          REGION_PROVINCE = regex.exec(res.address);
          addressBean.REGION_PROVINCE = REGION_PROVINCE[1];
          regexAddressBean(REGION_PROVINCE[3], addressBean);
        } else {
          addressBean.REGION_PROVINCE = REGION_PROVINCE[1];
          regexAddressBean(res.address, addressBean);
        }
        that.setData({
          addressRegion:
          addressBean.REGION_PROVINCE + ""
          + addressBean.REGION_CITY + ""
          + addressBean.REGION_COUNTRY,
          addressDetail: addressBean.ADDRESS
        });
      }
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