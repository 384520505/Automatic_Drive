const { putWorkPath, putCommandPath, updateEquipmentPath } = require('../js/common');
const { find } = require('./tools');

const putWorkPathFun = (router)=>{
    router.post(putWorkPath , async (ctx, next) =>{
        await next();
        console.log(putWorkPath, ctx.request.query);
        if(!ctx.request.query.path){
            ctx.body = {error:'参数不正确'};
            return;
        }
        // const { path } = ctx.request.body;
        ctx.body = {data:'success'};
    })
}

const putCommandFun = (router)=>{
    router.post(putCommandPath , async (ctx, next) =>{
        await next();
        console.log(putCommandPath, ctx.request.query);
        if(!ctx.request.query.cmd){
            ctx.body = {error:'参数不正确'};
            return;
        }
        // const { cmd } = ctx.request.body;
        ctx.body = {data:'success'};
    })
}

const updateEquipmentFun = (router)=>{
    router.post(updateEquipmentPath , async (ctx, next) =>{
        await next();
        console.log(updateEquipmentPath, ctx.request.query);
        if(!ctx.request.query.name){
            ctx.body = {error:'参数不正确'};
            return;
        }
        if(!find(ctx.request.query.name)){
            ctx.body = {
                latitude:100.0, //纬度
                longitude:30.0, //经度
                altitude:50.0, //海拔高度
                direction:45.5, //方向
                speed:50.0,     //速度
                rudderAngle:15.0, //舵角
                name:"测试车辆-上次车辆的状态"   //名称
            };
            return;
        }
        ctx.body = {data:'success'};
    })
}

module.exports = {
    putWorkPathFun,
    putCommandFun,
    updateEquipmentFun
};