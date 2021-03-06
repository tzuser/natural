const Router = require('koa-router');
const path = require('path');
const staticServer = require('koa-static');
const staticCache = require('koa-static-cache');
const Koa = require('koa');
const graphql = require('./graphql/main.js');
const { setUser } = require('./graphql/user.js');
const bodyParser = require('koa-bodyparser');
const cors = require('koa2-cors');
const gzip = require('koa-gzip');
//解决视频播放
const range = require('koa-range');
const app = new Koa();
app.keys = ['abcdefg123']; //签名
app.use(gzip());
app.use(bodyParser()); //解析Json或者form
app.use(range);
app.use(cors({ credentials: true })); //跨域
app.use(setUser); //设置用户
//接口
app.use(graphql.routes()).use(graphql.allowedMethods());

const router = new Router();

app.use(router.routes()).use(router.allowedMethods());
app.use(
  staticServer(path.resolve(__dirname, '../files'), {
    maxAge: 365 * 24 * 60 * 60,
  })
);
app.use(
  staticCache(path.resolve(__dirname, '../build'), {
    maxAge: 365 * 24 * 60 * 60,
  })
);

//获取局域网ip 方便手机测试
function getIPAdress() {
  var interfaces = require('os').networkInterfaces();
  for (var devName in interfaces) {
    var iface = interfaces[devName];
    for (var i = 0; i < iface.length; i++) {
      var alias = iface[i];
      if (
        alias.family === 'IPv4' &&
        alias.address !== '127.0.0.1' &&
        !alias.internal
      ) {
        return alias.address;
      }
    }
  }
}

app.listen(8181, () => {
  console.log(`http://${getIPAdress()}:8181`);
  console.log('服务启动');
});
