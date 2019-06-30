//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: '欢迎来到成语接龙之旅',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    yanse: "#e9accd",
  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../figure/figure',
    })
  },
  onLoad: function () {
   
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
      console.log('sdgsgsgss')
      
    } else if (this.data.canIUse) {
      console.log('11111sdgsgsgss')
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
       
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      console.log('2222sdgsgsgss')
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function (e) {
    console.log('fewgwgrwgerger')
    console.log(e.detail.userInfo)
    wx.setStorageSync('name', e.detail.userInfo.nickName);
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
   
  },
  


})
