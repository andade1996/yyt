export default defineAppConfig({
  pages: [
    'pages/task/index',
    'pages/self/index',
  ],
  tabBar:{
    list:[{
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
