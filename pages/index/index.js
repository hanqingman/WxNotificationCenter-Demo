//index.js

//引入通知
var WxNotificationCenter = require('../../vendors/WxNotificationCenter.js')

//获取应用实例
var app = getApp()
Page({
  data: {
    motto: ' ',
    userInfo: {}
  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../pageB/pageB'
    })
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function (userInfo) {
      //更新数据
      that.setData({
        userInfo: userInfo
      })
    })

    //注册通知
    var that = this
    WxNotificationCenter.addNotification('NotificationName', that.didNotification, that)
  },

  onUnload: function () {
    //移除通知
    var that = this
    WxNotificationCenter.removeNotification('NotificationName', that)
  },

  //通知处理
  didNotification: function (info) {
    //更新数据
    this.setData({
      motto: info
    })
  },

})
