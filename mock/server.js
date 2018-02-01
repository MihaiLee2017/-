const Koa = require('koa');
const app = new Koa();
const router = require('koa-router')();
const koaBody = require('koa-body');

var homeAdData = require('./home/ad.js')
router.get('/api/homead',
    (ctx) => {
        console.log(ctx.request.body);
        ctx.body = homeAdData
    }
)
var homeListData = require('./home/list.js')
router.get('/api/homelist/:city/:page',
    (ctx) => {
        const params = ctx.params
        const paramsCity = params.city
        const parmasPage = params.page
        console.log('params:', ctx.params)
        ctx.body = homeListData
    }
)

var searchListData = require('./search/list.js')
router.get('/api/searclist/:page/:city/:category',
    (ctx) => {
        // const params = ctx.params
        // const paramsCity = params.city
        // const parmasPage = params.page
        console.log('params:', ctx.params)
        ctx.body = searchListData
    }
)
router.get('/api/searclist/:page/:city/:category/:keyword',
    (ctx) => {
        // const params = ctx.params
        // const paramsCity = params.city
        // const parmasPage = params.page
        console.log('params:', ctx.params)
        ctx.body = searchListData
    }
)

var detailInfo = require("./detail/info.js")
router.get('/api/detail/info/:id',
    (ctx) => {
        console.log('params:', ctx.params)
        ctx.body = detailInfo
    }
)
var detailCommont = require('./detail/comment.js')
router.get('/api/detail/comment/:page/:id',
    (ctx) => {
        console.log('params:', ctx.params)
        ctx.body = detailCommont
    }
)

var orderList = require('./orderList/orderList.js')
router.get('/api/orderlist/:username/:page',
    (ctx) => {
        console.log('params:', ctx.params)
        ctx.body = orderList
    }
)

router.post('/api/submitComment',
    (ctx) => {
        ctx.body = {
            errno: 0,
            msg: 'ok'
        }
    }
)


app.use(router.routes())
    .use(router.allowedMethods());

app.listen(3000);
console.log('curl -i http://localhost:3000/users -d "name=test"');