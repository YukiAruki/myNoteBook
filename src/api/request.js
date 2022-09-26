import instance from './interceptor'

function request(url, params, method) {
  return new Promise((resolve, reject) => {
    let data = {}
    // get请求使用params字段
    if (method == 'get') data = { params }
    // post请求使用data字段
    if (method == 'post') data = { data: params }
    // 通过mock平台可对局部接口进行mock设置
    // if(options.mock)url='http://www.mock.com/mock/xxxx/api';
    instance({
      url,
      method,
      ...data
    }).then((res) => {
      // 此处作用很大，可以扩展很多功能。
      // 比如对接多个后台，数据结构不一致，可做接口适配器
      // 也可对返回日期/金额/数字等统一做集中处理
      if (res.status === 0) {
        resolve(res);
      } else {
        // 通过配置可关闭错误提示
        reject(res);
      }
    }).catch((error) => {
      console.log(error)
    })
  })
}

// 封装GET请求
function get(url, params, options) {
  return request(url, params, options, 'get')
}
// 封装POST请求
function post(url, params, options) {
  return request(url, params, options, 'post')
}
export default {
  get, post
}