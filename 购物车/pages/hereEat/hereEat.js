// pages/hereEat/hereEat.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    listLeft:['热销产品','热菜','冷菜','套餐'],
    menu:[
      {name:"红烧肉",price:"￥38",id:1},
      { name: "宫保鸡丁", price: "￥58", id: 2},
      { name: "水煮鱼", price: "￥88", id: 3 },
      { name: "砂锅牛蹄", price: "￥12/个", id: 4 },
      { name: "水湘草鱼", pricesd: "￥45", id: 5 },
      { name: "平锅牛肉", price: "￥68", id: 6 },
      { name: "土家排骨", price: "￥68", id: 7 },
      { name: "香辣基尾虾", price: "￥68", id: 8 },
    ],
    priceTotle:0
  },
  checkPrice(e){
    let checkId = e.currentTarget.dataset.id
    let check = this.data.menu.find(item => item.id == checkId)
    console.log(check)
    this.setData({
      priceTotle: check.price
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