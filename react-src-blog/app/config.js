export default (() => {
  window.$GLOBALCONFIG = {};
  +function (global) {
    // 本地开发打开的路径以及端口
    global.$ctx = 'http://localhost:8080';

    // 用户登录信息
    global.STAFF = {
      code: 'admin',
      name: '黄焖鸡',
    };

    // 系统一二级菜单
    global.NAVIGATION = [
      {
        id: 600110130,
        name: '文章列表',
        icon: 'book',
        url: '',
        children: [
            { id: 600110132, name: '前端editor', url: '/article/editor', icon: 'book' },
        ],
      },
    ];
  }(window.$GLOBALCONFIG);
})()

