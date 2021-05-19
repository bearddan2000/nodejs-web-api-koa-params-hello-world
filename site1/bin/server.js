'use strict';

const Koa = require('koa');
const json = require('koa-json');
const Router = require('@koa/router');
var bodyParser = require('koa-body');
const app = new Koa();
const router = new Router();

router.get('/', (ctx) => {
  ctx.body = { message: 'Hello World' }
});

router.post('/:name', (ctx) => {
  ctx.body = { message: 'Hello ' + ctx.params.name }
});

app
  .use(json())
  .use(router.routes())
  .use(router.allowedMethods())
  .use(bodyParser({
     multipart: true,
     urlencoded: true
  }));

app.listen(8000);
