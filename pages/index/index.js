//index.js
//获取应用实例
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    griddata:[
      {
        name: "校园导航", url: "/pages/index/navigation/navigation", img:"/pages/index/image/1.png"
      }, {
        name: "我的位置", url: "/pages/index/position/position", img: "/pages/index/image/2.png"
      }, {
        name: "逛景点", url: "/pages/index/index/feature/feature", img: "/pages/index/image/3.png"
      }, {
        name: "语音讲解", url: "/pages/index/index/voice/voice", img: "/pages/index/image/4.png"
      }, {
        name: "美食推荐", url: "/pages/index/index/delicacy/delicacy", img: "/pages/index/image/5.png"
      }, {
        name: "新生导航", url: "/pages/index/index/newNavigation/newNavigation", img: "/pages/index/image/6.png"
      }, {
        name: "新闻导览", url: "/pages/index/index/news/new", img: "/pages/index/image/7.png"
      }, {
        name: "实时公交", url: "/pages/index/index/bus/bus", img: "/pages/index/image/8.png"
      }, {
        name: "三维地图", url: "/pages/index/index/maps/maps", img: "/pages/index/image/9.png"
      }, {
        name: "论坛", url: "/pages/index/index/forum/forum", img: "/pages/index/image/10.png"
      }, {
        name: "课表查询", url: "/pages/index/index/schoolTimetable/schoolTimetable", img: "/pages/index/image/11.png"
      }, {
        name: "无课教室", url: "/pages/index/emotyClassroom/emotyClassroom", img: "/pages/index/image/12.png"
      }



    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})