// pages/wxml/wxml.js
Page({
  data: {
    nowTime: new Date().toLocaleString(),
    timeStamp: 1560598106
  },
  onLoad: function (options) {
    setInterval(() => {
      this.setData({
        nowTime: new Date().toLocaleString()
      })
    }, 1000)
  },
  handleClick (e) {
    console.log(e.currentTarget.dataset.value)
  }
})