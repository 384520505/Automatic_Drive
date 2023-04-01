// 服务器地址
const ServerIP = 'http://localhost:3000';
// 项目地址路径
const ProjectPath = '/UGVService';
/**
 * 获取车辆的工作路径
 * method: get
 * params:vehicle(车辆名称)
 * return: 返回最近10条工作路径
 *  format: [path1, path2, path3, ...]
 */
const getWorkPath = `${ProjectPath}/ugv/getWorkPath`;

/**
 * 上传工作路径
 * method: post
 * params: paths(路径)
 * return: 成功返回success， 失败返回上传的作业路径
 */
const putWorkPath = `${ProjectPath}/ugv/putWorkPath`;

/**
 * 上传控制指令
 * method: post
 * params: cmd(上传指令)
 * return: 成功返回success， 失败返回上传的指令
 */
const putCommandPath = `${ProjectPath}/ugv/putCommand`;

/**
 * 获取控制指令
 * method: get
 * params: target(车辆名称)
 * return: 返回控制指令，没查到返回null, 控制指令数据结构
 * {
 *      latitude:100.0, 纬度
 *      longitude:30.0, 经度
 *      altitude:50.0,  海拔高度
 *      direction:45.5, 方向
 *      speed:50.0,     速度
 *      rudderAngle:15.0, 舵角
 *      name:"测试车辆"   名称
 * }
 */
const getCommandPath = `${ProjectPath}/ugv/getCommand`;

/**
 * 获取车辆状态
 * method: get
 * params: name(车辆名称)
 * return: 返回车辆状态, 没查到返回null
 * {
 *      latitude:100.0, 纬度
 *      longitude:30.0, 经度
 *      altitude:50.0,  海拔高度
 *      direction:45.5, 方向
 *      speed:50.0,     速度
 *      rudderAngle:15.0, 舵角
 *      name:"测试车辆"   名称
 * }
 */
const getVehicleStatusPath = `${ProjectPath}/ugv/getVehicle`;

/**
 * 更新车辆状态
 * method: post
 * params: equipment(包含设备代码，和可自定义车辆状态字符串), { name:"test", id:1234, latitude:100.0, longitude:30.0, altitude:50.0, direction:45.5, speed:50.0, rudderAngle:15.0 }
 * return: 成功返回success, 失败返回车辆的上次状态
 *  {
 *      latitude:100.0, 纬度
 *      longitude:30.0, 经度
 *      altitude:50.0,  海拔高度
 *      direction:45.5, 方向
 *      speed:50.0,     速度
 *      rudderAngle:15.0, 舵角
 *      name:"测试车辆"   名称
 * }
 */
const updateEquipmentPath = `${ProjectPath}/ugv/updateEquipment`;

module.exports = {
    ServerIP,
    ProjectPath,
    getWorkPath,
    putWorkPath,
    putCommandPath,
    getCommandPath,
    getVehicleStatusPath,
    updateEquipmentPath
}