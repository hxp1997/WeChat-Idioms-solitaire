Page({

  /**
   * 页面的初始数据
   */
  data: {
    ichoice: 0,
    rchoice:0
  },
  selectrole1: function () {
    wx.redirectTo({
      url: '../index/index?pointid=' + (this.data.rlevel+2),
    });
    
  },
  selectrole2: function () {
    wx.redirectTo({
      url: '../index/index?pointid=' + (this.data.rlevel + 1),
    });
  },
  selectrole3: function () {
    wx.redirectTo({
      url: '../index/index?pointid=' + (this.data.rlevel ),
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.data.rlevel = parseInt(options.pointid)
    this.data.rchoice = wx.getStorageSync('judge')
    console.log("测试测试测试测试测试测试##3#3##3")
    console.log(this.data.rlevel)
    console.log(this.data.rchoice)
    if (this.data.rchoice==1){
     if (isNaN(this.data.rlevel)) {
       var now_num1 = wx.getStorageSync('now_num1')  
       this.data.rlevel = now_num1 * 3
     }else{
       this.data.rlevel = this.data.rlevel*3
     }
     
   }
    if (this.data.rchoice == 2) {
      if (isNaN(this.data.rlevel)) {
        var now_num2 = wx.getStorageSync('now_num2')
        this.data.rlevel = now_num2 * 3
      } else {
        this.data.rlevel = this.data.rlevel * 3
      }
    }
    if (this.data.rchoice == 3) {
      if (isNaN(this.data.rlevel)) {
        var now_num3 = wx.getStorageSync('now_num3')
        this.data.rlevel = now_num3 * 3
      } else {
        this.data.rlevel = this.data.rlevel * 3
      }
    }
    console.log(this.data.rlevel)
   
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