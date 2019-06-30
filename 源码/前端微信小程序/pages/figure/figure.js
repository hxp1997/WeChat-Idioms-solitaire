Page({

  /**
   * 页面的初始数据
   */
  data: {
    
    
  },
  fselectrole1: function (event) {
    
    wx.navigateTo({
      url: '../main/main',
    });
    wx.setStorageSync('judge', 1);
    var now_num1 = wx.getStorageSync('now_num1');
    if (!now_num1) {
      console.log('建立缓存数据111。。。。。。')
      wx.setStorageSync('now_num1', 0);
    }

    var nickName1 = wx.getStorageSync('name')
    wx.request({
      url: 'http://127.0.0.1:8001/rank/',

      method: 'POST',
      data: {
        nickName: nickName1,
        level: now_num1+1,
        role: 1,
      },
      success: function (res) {

      },
      fail: function (error) {

      }
    })

    var Storage1 = wx.getStorageSync('Storage1')
    if (!Storage1) {
      var Storage1 = {};
      for (var i = 1; i <= 33; i++) {
        if (i == 1) {
          Storage1[i] = true;
        } else {
          Storage1[i] = true;
        }
      }
      wx.setStorageSync('Storage1', Storage1);
      var Storage1 = wx.getStorageSync('Storage1')
    }

   
    this.setData({
      Storage1: Storage1
    })

  },
  fselectrole2: function () {
    wx.setStorageSync('judge', 2);
    wx.navigateTo({
      url: '../main/main',
    });
    var now_num2 = wx.getStorageSync('now_num2');
    if (!now_num2) {
      console.log('建立缓存数据222。。。。。。')
      wx.setStorageSync('now_num2', 0);
    }
    var nickName1 = wx.getStorageSync('name')
    wx.request({
      url: 'http://127.0.0.1:8001/rank/',

      method: 'POST',
      data: {
        nickName: nickName1,
        level: now_num2 + 1,
        role: 2,
      },
      success: function (res) {

      },
      fail: function (error) {

      }
    })
    var Storage2 = wx.getStorageSync('Storage2')
    if (!Storage2) {
      var Storage2 = {};
      for (var i = 1; i <= 33; i++) {
        if (i == 1) {
          Storage2[i] = true;
        } else {
          Storage2[i] = true;
        }
      }
      wx.setStorageSync('Storage2', Storage2);
      var Storage2 = wx.getStorageSync('Storage2')
    }
    
    this.setData({
      Storage2: Storage2
    })
  },
  fselectrole3: function () {
    wx.setStorageSync('judge', 3);
    wx.navigateTo({
      url: '../main/main',
    });
    var now_num3 = wx.getStorageSync('now_num3');
    if (!now_num3) {
      console.log('建立缓存数据3333。。。。。。')
      wx.setStorageSync('now_num3', 0);
    }
    var nickName1 = wx.getStorageSync('name')
    wx.request({
      url: 'http://127.0.0.1:8001/rank/',

      method: 'POST',
      data: {
        nickName: nickName1,
        level: now_num3 + 1,
        role: 3,
      },
      success: function (res) {

      },
      fail: function (error) {

      }
    })
    var Storage3 = wx.getStorageSync('Storage3')
    if (!Storage3) {
      var Storage3 = {};
      for (var i = 1; i <= 33; i++) {
        if (i == 1) {
          Storage3[i] = true;
        } else {
          Storage3[i] = true;
        }
      }
      wx.setStorageSync('Storage3', Storage3);
      var Storage3 = wx.getStorageSync('Storage3')
    }
   
    this.setData({
      Storage3: Storage3
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