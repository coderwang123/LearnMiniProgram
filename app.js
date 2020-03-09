// 注册一个小程序示例
App({
  // 小程序初始化完成时
  onLaunch:function () {
    // 获取用户信息
  },
  // 小程序显示出来时
  onShow:function (options) {
    console.log(options)
    // 1.判断小程序进入的场景
    switch(options.scene){
      case 1001:
      break;
      case 1005:
      break;
    }
    // 2.获取用户的信息，并且获取到用户信息之后，将用户的信息传递给服务器
    wx.getUserInfo({
      success:(res)=>{
        console.log(res)
      }
    })
  },
  // 小程序隐藏时
  // 定义全局信息
  globalData:{
    name:"张三",
    age:18
  }
})