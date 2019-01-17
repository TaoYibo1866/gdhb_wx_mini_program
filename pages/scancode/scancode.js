// datain.js

// 获取全局数据
var app = getApp()
Page({
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    var that = this
    var domain = app.globalData.domain
    var data = {}
    data['content'] = options.res
    wx.request({
      url: domain + 'scanhandler/',
      method: 'POST',
      data: Util.json2Form(data),
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      success: function (res) {
        var info = res['data']
        if (typeof info == 'string') {
          info = JSON.parse(info)
        }
        if (info.ret == 'success') {
          var success = '验证码：' + info.str
          wx.navigateTo({
            url: '../success/success?res=' + success
          })
        } else {
          var error = info.str
          wx.navigateTo({
            url: '../error/error?res=' + error
          })
        }
      },
      fail: function (res) {
        var error = '上传失败'
        wx.navigateTo({
          url: '../error/error?res=' + error,
        })
      }
    })


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

// 导入 utils
var Util = require('../../utils/util.js')