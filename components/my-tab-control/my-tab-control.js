// components/my-tab-control.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    titles: {
      type: Array,
      value: ['流行', '精选', '新款']
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    currentIndex: 0,
  },

  /**
   * 组件的方法列表
   */
  methods: {
    hanldeClick (e) {
      this.setData({
        currentIndex: e.currentTarget.dataset.index
      })
      this.triggerEvent('tabControlClick', {
        currentIndex: this.data.currentIndex,
        title: this.properties.titles[this.data.currentIndex]}
      )
    }
  }
})
