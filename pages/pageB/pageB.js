//引入通知
var WxNotificationCenter = require('../../vendors/WxNotificationCenter.js')

Page({
    data: {
        motto: '',
    },
    onLoad: function (options) {
        // 生命周期函数--监听页面加载

    },
    //事件处理函数
    bindViewTap: function () {
        this.setData({
            motto: '已发送通知，退回A页面可以接受导数据“来自B页面“'
        })
        //发送通知（所有注册过'NotificationName'的页面都会接收到通知）
        WxNotificationCenter.postNotificationName('NotificationName', '来自B页面')
    },

})