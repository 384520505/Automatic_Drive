const { getWorkPath, getCommandPath, getVehicleStatusPath } = require('./common');
const { find } = require('./tools');

const getWorkPathFun = (router)=>{
    router.get(getWorkPath , async (ctx, next) =>{
        await next();
        console.log(getWorkPath, ctx.query);
        if(!ctx.query.vehicle){
            ctx.body = {data:'null'};
            return;
        }
        if(!find(ctx.query.vehicle)){
            ctx.body = {data:'null'};
            return;
        }
        const rel = ['/q/w/e/e/r', 'e/r/t/y', '/t/d/g/e'];
        ctx.body = rel;
    })
}

const getCommandFun = (router)=>{
    router.get(getCommandPath , async (ctx, next) =>{
        await next();
        console.log(getCommandPath, ctx.query);
        if(!ctx.query.target){
            ctx.body = {data:'null'};
            return;
        }
        if(!find(ctx.query.target)){
            ctx.body = {data:'null'};
            return;
        }
        const rel = {
            latitude:100.0, //纬度
            longitude:30.0, //经度
            altitude:50.0, //海拔高度
            direction:45.5, //方向
            speed:50.0,     //速度
            rudderAngle:15.0, //舵角
            name:"测试车辆-控制指令接口"   //名称
        };
        ctx.body = rel;
    })
}

const getVehicleStatusFun = (router)=>{
    router.get(getVehicleStatusPath , async (ctx, next) =>{
        await next();
        console.log(getVehicleStatusPath, ctx.query);
        if(!ctx.query.name){
            ctx.body = {data:'null'};
            return;
        }
        if(!find(ctx.query.name)){
            ctx.body = {data:'null'};
            return;
        }
        const rel = {
            latitude:100.0, //纬度
            longitude:30.0, //经度
            altitude:50.0, //海拔高度
            direction:45.5, //方向
            speed:50.0,     //速度
            rudderAngle:15.0, //舵角
            name:"测试车辆-车辆状态接口"   //名称
        };
        ctx.body = rel;
    })
}

module.exports = {
    getWorkPathFun,
    getCommandFun,
    getVehicleStatusFun
};