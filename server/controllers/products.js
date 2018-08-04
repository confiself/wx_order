
const { mysql } = require('../qcloud')
console.log('enter..')
var res = mysql('txt').select('*').where({aa:1}) // => { id:1, name: 'leo', age: 20 }
console.log(res)
module.exports = function(ctx, next){
  ctx.state.data = {msg: 'teste ok'}
}

// module.exports = async (ctx, next) => {

//   if (ctx.state.$wxInfo.loginState === 1) {

//     const { mysql: config } = require('../config');
//     var knex = require('knex')({
//       client: 'mysql',
//       connection: {
//         host: config.host,
//         port: config.port,
//         user: config.user,
//         password: config.pass,
//         database: 'db_order',
//         charset: config.char,
//         multipleStatements: true
//       }
//     });
//     await knex('category_products').select('name').then(res => {
//        console.log(res)
//       ctx.state.data = res;
//     })
//   }
// }