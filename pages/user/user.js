//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    oneChecked : false,
        tags : [
            {
                name : '标签一',
                checked : false,
                color : 'default'
            },
            {
                name : '标签二',
                checked : false,
                color: 'default'
            },
            {
                name : '标签三',
                checked : true,
                color: 'default'
            },
            {
                name : '标签4️',
                checked : true,
                color: 'default'
            },
            {
              name : "二逼青年",
              checked: false,
              color:"default"
            }
        ]
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
  },
  toEditView:function(){
    wx.navigateTo({
      url: '/pages/user/edit/edit',
      success: function () { }        //成功后的回调；
    })
  },

  toOtherPageIndex:function(){
    console.log('跳转到他人动态详情页')
  },

  toMySend: function () {
    console.log('跳转到我的发布页')
  },
  toMyCollect: function () {
    console.log('跳转到我的收藏页')
  },
  toMyFocus: function () {
    console.log('跳转到我的关注页')
  },
  toMyFans: function () {
    console.log('跳转到我的粉丝页')
  },
})
