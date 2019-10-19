//index.js
//获取应用实例
const app = getApp();

Page({
  data: {
    detail: {},
  },

  onLoad: function() {
    this.setData({ detail: app.globalData.detail });
    console.log(app.globalData.detail, 'k');
  },
});
