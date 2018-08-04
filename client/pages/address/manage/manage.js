// pages/address/manage/manage.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    addressList: [{ 'address': '广东省深圳市南山区凯丽花园5栋3单元', 'userName': '胡峥辉', 'phone': '15521194577' }, { 'address': '广东省深圳市南山区凯丽花园5栋3单元111fdsfsdfadsfdasfasfdasfas', 'userName': '胡峥辉', 'phone': '15521194577' }]
  },
  addAddress: function(e){
    wx.navigateTo({
      url: '../add/add',
    })
  },
  deleteAddress: function(e){
    var index = e.currentTarget.dataset.index;
    console.log(index + 'index');
    var addressList = this.data.addressList;
    addressList.splice(index, 1)
    this.setData({
      addressList: addressList
    });
    console.log(addressList)
  },
  selectAddress: function(e){
    var index = e.currentTarget.dataset.index;
    var pages = getCurrentPages();
    var currentPage = pages[pages.length - 1];
    var prevPage = pages[pages.length - 2];
    var addressInfo = this.data.addressList[index];
    prevPage.setData({
      addressInfo: addressInfo
    });
    wx.navigateBack({
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