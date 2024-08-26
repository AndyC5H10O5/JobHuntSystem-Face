/*
 * mock用于处理：前端需要数据而后端接口还没开发好的问题
 * 前端正常开发axios网络请求，用mock拦截URL请求，并返回模拟数据
 * 当后端接口开发完毕后，前端移除mock即可（mock是前端的工具）
 * 主要用于团队协作，单人开发可以不用
 */

// 引入mockjs
import Mock from "mockjs";

// 设置延迟时间(ms)
// Mock.setup({
//     timeout: 400
// })

// 使用mockjs模拟数据
Mock.mock("/job/mock", {
  "ret": 0, // 键值对的键
  "data": {
    "mtime": "@datetime",   //随机生成日期时间
    "score|1-800": 1,       //随机生成1-800的数字
    "rank|1-100": 1,        //随机生成1-100的数字
    "stars|1-5": 1,         //随机生成1-5的数字
    "nickname": "@cname",   //随机生成中文名字
    //生成图片
    "img": "@image('200x100','#ffcc33','#FFF','png','Fast Mock')",
  },
});
