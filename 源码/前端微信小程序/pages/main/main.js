//index.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },
  
  login: function(){
    var that=this
    wx.getSetting({
      success(res) {
        if (!res.authSetting['scope.record']) {
          wx.authorize({
            scope: 'scope.record',
            success() {
              // 用户已经同意小程序使用录音功能，后续调用 wx.startRecord 接口不会弹窗询问
              wx.startRecord()
              
            }
            
          })
        }
      }
    })
 
  }, 

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  choice: function () {
    wx.navigateTo({
      url: '/pages/choice/choice'
    })
  },

  begin: function () {
    
      wx.navigateTo({
        url: '/pages/index/index'
      })
    
   
  },

  rank: function () {
    wx.navigateTo({
      url: '/pages/rank/rank'
    })
  },
  showguize:function(){
    wx.showModal({
      title: '规则',
      content: '在规定时间内，将下方文字填到上方空格中，使之成为完整正确的成语',
      showCancel:false,
      confirmText: '确定',
    })
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