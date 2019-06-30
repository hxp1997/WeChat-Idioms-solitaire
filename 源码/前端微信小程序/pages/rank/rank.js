Page({

  /**
   * 页面的初始数据
   */
  data: {
    rank_data: []
    
  },


  

  getRecord: function () {
    var that = this
    wx.request({
      url: 'http://127.0.0.1:8001/rank/',
      method: 'GET',
      success: function (res) {
        
        that.data.rank_data = res.data.user_list;
    
        that.data.rank_data.forEach((item, index, arr)=>{
          console.log(arr[index][2])
          if (arr[index][2]=='1') {
            arr[index][2] = '刘备'
          }
          if (arr[index][2] == '2') {
            arr[index][2] = '关羽'
          }
          if (arr[index][2] == '3') {
            arr[index][2] = '张飞'
          }
        })
        console.log(res)
        that.setData({
          rank_data: that.data.rank_data
        })
        
      },
      
      fail: function (error) {
        console.log(error)
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
    this.getRecord()
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