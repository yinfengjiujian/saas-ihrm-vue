前端增加注册模块步骤：
1、新增模块--》找到工厂路径进入到项目的src目录，新增模块，直接拷贝module-demo文件夹，重命名自己的模块
2、注册模块---》找到src目录下的main.js文件
  例如企业管理模块
    import saasClients from '@/module-saas-clients/' // 企业管理
    Vue.use(saasClients,store)
3、配置路由菜单---》进入到新建立的模块下module-saas-clients，进入到router\index.js
   配置菜单路由等。
