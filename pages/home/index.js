// pages/home/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    homeArr: [
      {
        icon: "icon-anniu",
        name: "按钮",
        path: ""
      },
      {
        icon: "icon-qiapian",
        name: "卡片",
        path: ""
      },
      {
        icon: "icon-query1",
        name: "查找",
        path: ""
      },
      {
        icon: "icon-jisuanqi",
        name: "计算器",
        path: ""
      },
      {
        icon: "icon-checkboxoutline",
        name: "单选框",
        path: ""
      },
      {
        icon: "icon-checkbox-multiple-marked-outline",
        name: "多选框",
        path: ""
      },
      {
        icon: "icon-Toast",
        name: "面包屑",
        path: ""
      },
      {
        icon: "icon-icon-",
        name: "输入框",
        path: ""
      },
      {
        icon: "icon-loading-v",
        name: "加载",
        path: ""
      },
      {
        icon: "icon-ditu",
        name: "地图",
        path: ""
      },
      {
        icon: "icon-shuzishunxu",
        name: "步骤条",
        path: ""
      },
      {
        icon: "icon-shuzi",
        name: "数升值",
        path: ""
      },
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  longTap: function (e) {
    console.log(e.currentTarget.dataset.index);
    // 展示icon
  }

})