// pages/profile/profile.js
Page({
  data: {
    imageUrl: '',
  },
  handleChooseImage () {
    wx.chooseImage({
      success: (res) => {
        this.setData({
          imageUrl: res.tempFilePaths[0]
        })
      },
    })
  },
  handleImageLoad () {
    // console.log('图片加载完成')
  }
})