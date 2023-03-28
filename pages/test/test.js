// pages/test/test.js
Page({
  data: {
  },
  onLoad(){
    this.animate('.avatar', [{
      opacity: '0',
      width: '0%',
    }, {
      opacity: '1',
      width: '100%',
    }], 1000, {
      scrollSource: '#scroller',
      timeRange: 1000,
      startScrollOffset: 120,
      endScrollOffset: 252
    })
  }
})

 