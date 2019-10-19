//index.js
//获取应用实例
const app = getApp();

Page({
  data: {
    movies: [],
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs',
    });
  },
  onLoad: function() {
    const that = this;
    wx.request({
      url: 'http://piaofang.maoyan.com/second-box',
      success(res) {
        that.setData({ movies: res.data.data.list });
      },
    });
  },
});
