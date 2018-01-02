import koa from 'koa';
import cors from 'koa-cors';
import koaRouter from 'koa-router';
import languages from './languages';

const app = koa();
const router = koaRouter();

router.get('/', function *(next) {
  this.body = 'API server for redux-saga-autocomplete-example';
});

router.get('/suggest', function *(next) {
  const q = this.request.query.q;
  console.log('query', q);
  const qVal = q.trim().toUpperCase();
  const qLen = qVal.length;
  const list = qLen === 0 ? [] : languages.filter(item =>
    item.name.toLowerCase().slice(0, qLen) === qVal
  );
  this.body = list;
});

app
  .use(cors())
  .use(router.routes())
  .use(router.allowedMethods())
  .listen(3000);
