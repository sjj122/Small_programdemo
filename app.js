//app.js  注册小程序示例
App({
  onLaunch () {
    // 一般我们在这里作比较多的事就是
    // 网络请求
    // 获取用户的信息 wx.getUserInfo 这个接口估计要废弃
  },
  onShow (options) {
    // 页面显示出来的回调
    // 显示打开场景
    // console.log(options.scene)
  },
  onHide () {
    // 页面隐藏的回调
  },
  onError (msg) {

  },
  globalData: {
    name: 'sjj'
  }
})