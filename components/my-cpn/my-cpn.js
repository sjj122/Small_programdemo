// components/my-cpn/my-cpn.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    title: '我是标题',
    counter: 0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleIncrement () {
      this.triggerEvent('increment', {})
    },
    // 组件给页面暴露一个接口来修改自己的数据。避免页面直接操作组件内数据。
    changeCounter (num) {
      this.setData({
        counter: this.data.counter + num
      })
    }
  }
})
