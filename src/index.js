const Koa = require('koa');
const Router = require('koa-router');
const { getWorkPathFun,getCommandFun, getVehicleStatusFun } = require('../js/method_Get');
const { putWorkPathFun,putCommandFun, updateEquipmentFun } = require('../js/method_Post');

const server = new Koa();
const router = new Router();

// get method
getWorkPathFun(router);
getCommandFun(router);
getVehicleStatusFun(router);

// post method
putWorkPathFun(router);
putCommandFun(router);
updateEquipmentFun(router);


server
  .use(router.routes())
  .use(router.allowedMethods());

server.listen(3000);
console.log("server run in http://localhost:3000");