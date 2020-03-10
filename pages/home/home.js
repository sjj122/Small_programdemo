// pages/home.js
const app = getApp()
Page({
  data: {
    name: app.globalData.name,
    blog: {},
    counter: 0
  },
  handleGetUserInfo (event) {
    console.log(event.detail.userInfo)
  },
  // 监听组件发来的事件
  hanldeIncrement () {
    this.setData({
      counter: this.data.counter + 1
    })
  },
  // 监听tabcontrol点击
  tabControlClick (e) {
    console.log(e)
  },
  // 页面直接修改组件内数据
  handleComIncrement () {
    const my_cpn = this.selectComponent('#my-cpn')
    my_cpn.changeCounter(20)
  },
  onLoad () {
    wx.request({
      url: 'http://101.37.91.208:3000/getTopContent',
      success: (res) => {
        this.setData({
          blog: res.data.result
        })
      }
    })
  },
  onShow () {
    
  },
  onReady () {

  },
  onHide () {

  },
  // 页面滚动
  onPageScroll (obj) {
    // console.log(obj)
  },
  // 上拉加载更多
  onReachBottom () {
    console.log('到底了')
  },
  // 下拉刷新
  onPullDownRefresh () {
    console.log('用户下拉了')
  },
  // tabbar 页面回调函数
  onTabItemTap () {
    
  }
})