export default defineAppConfig({
  pages: [
    'pages/task/index',
    'pages/self/index',
  ],
  tabBar:{
    color: "#000000",
    selectedColor:"#000000",
    list:[{
      selectedIconPath: "image/taskActive.png",
      iconPath:'image/task.png',
      pagePath:'pages/task/index',
      text:'任务'
    },
      {
        pagePath:'pages/self/index',
        text:'我的'
      }]
  },
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  }
})
