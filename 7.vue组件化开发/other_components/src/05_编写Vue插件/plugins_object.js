/**
 * 对象类型编写插件：
 * 必须要有 install() 函数，该函数会在安装插件的时候自动调用
 * */
export default {
  install(app) {
    console.log(app)
    // 添加全局的property
    app.config.globalProperties.$name = 'jzh'
  }
}