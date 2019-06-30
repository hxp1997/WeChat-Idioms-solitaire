// pages/begin/begin.js

Page({

  /**
   * 页面的初始数据
   */
  data: {
    checkpoint: [],
    checkpoint2: [],
    contianshow: true,
    cchoice:0
  },

  enter: function (event) {

    var id = event.currentTarget.dataset.postid
    console.log("choiceid")
    console.log(id)
    var isfinish = event.currentTarget.dataset.isfinish
    //此关卡已被成功解锁
    if (isfinish) {
      wx.redirectTo({
        url: '/pages/index/index?pointid=' + (id-1)
      })
    } else {
      wx.showToast({
        title: '未解锁',
        image: '/images/lock.png',
        duration: 2000
      }) //此关卡未被解锁 
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    for (var i = 1; i <= 33; i++) {
        this.data.checkpoint.push(i)
    }
    this.data.cchoice = this.data.ichoice = wx.getStorageSync('judge')
    console.log(this.data.checkpoint)
    
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
    if (this.data.cchoice==1){
      var Storage1 = wx.getStorageSync('Storage1')
      this.setData({
        Storage: Storage1,
        checkpoint: this.data.checkpoint,
      })
    }
    if (this.data.cchoice == 2) {
      var Storage2 = wx.getStorageSync('Storage2')
      this.setData({
        Storage: Storage2,
        checkpoint: this.data.checkpoint,
      })
    }
    if (this.data.cchoice == 3) {
      var Storage3 = wx.getStorageSync('Storage3')
      this.setData({
        Storage: Storage3,
        checkpoint: this.data.checkpoint,
      })
    }
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
   * 用户点击右上角分享
   */
  onShareAppMessage: function (res) {
    
  }
})