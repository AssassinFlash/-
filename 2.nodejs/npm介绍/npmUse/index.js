// 使用第三方模块

let moment = require('moment')
moment.locale('zh-cn')

console.log(moment('20000220').format('YYYY-MM-DD HH:mm:ss'));