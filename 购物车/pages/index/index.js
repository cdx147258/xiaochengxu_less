//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    imgUrls: [
      'http://img4.imgtn.bdimg.com/it/u=2145116977,3742188763&fm=26&gp=0.jpg',
      'http://img4.imgtn.bdimg.com/it/u=1603855332,142360630&fm=26&gp=0.jpg',
      'http://img1.imgtn.bdimg.com/it/u=3318218181,2383653854&fm=26&gp=0.jpg'
    ],
    list: [
      { name: "堂吃", url: "hereEat" }, 
      { name: "外卖", url: "take-out" }, 
      { name: "外带", url: "besides" }, 
      { name: "订单", url: "indent" }, 
      { name: "账单", url: "bill" }, 
      { name: "报表", url: "statement" }]
  },
  hereEat() {
    console.log(this.data.list)
    wx.navigateTo({

      url: '../hereEat/hereEat'
    })
  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
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
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
