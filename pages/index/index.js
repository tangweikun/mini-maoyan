//index.js
//获取应用实例
const app = getApp();

Page({
  data: {
    movies: [],
  },

  //事件处理函数
  goDetail: function(event) {
    console.log(event.currentTarget.dataset);
    app.globalData.detail = event.currentTarget.dataset.detail;
    wx.navigateTo({
      url: '../detail/index',
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

  onShow: function() {
    const that = this;
    app.globalData.timeId = setInterval(() => {
      wx.request({
        url: 'http://piaofang.maoyan.com/second-box',
        success(res) {
          that.setData({ movies: res.data.data.list });
        },
      });
    }, 5000);
  },

  onHide: function() {
    clearInterval(app.globalData.timeId);
  },

  onPullDownRefresh: function() {
    const that = this;
    wx.request({
      url: 'http://piaofang.maoyan.com/second-box',
      success(res) {
        that.setData({ movies: res.data.data.list });
      },
    });
  },
});
