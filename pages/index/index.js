//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    userInfo: {},
    status:'正在连接服务器',
    hidden: false,
    loadtext: '加载中...'
  },
  
  onLoad: function () {
    var that = this

    app.login_u(function(globaldata){
      // console.log('globaldt_index',globaldata)
      if (globaldata.cur_dir !== 'undefined'){
        that.setData({
          userInfo: globaldata.userInfo,
          hidden: true

        })
      } else {
        that.setData({

          loadtext: '加载失败，请稍后重试'
        })
      }

    })
  
    // console.log('indexdata',this.data)
    // 状态

    
  },
  


  // 扫码入库
  scan: function(){
    wx.scanCode({
      success: function(res){
        console.log('data', res.result)
        // 跳转页面
        wx.navigateTo({
          url: '../scancode/scancode?res='+res['result']
    })
      },
      fail: function(res){
        var error = '扫码失败'
        wx.navigateTo({
          url: '../error/error?error='+error,
        })
      }
    })
  },


  // 扫码出库
  chooseimg: function(){
    
    var that = this;
    wx.chooseImage({
      count: 1, 
      sourceType: ['album','camera'],
      sizeType: ['original', 'compressed'],
      success: function (res) {
        var tempFilePaths = res.tempFilePaths;
        console.log('imgpath', tempFilePaths)
        wx.navigateTo({
          url: '../uploadfile/uploadfile?res=' + tempFilePaths
        })
      }
    })
  },

})
