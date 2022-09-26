import axios from 'axios'
// import router from "@/router"

// 创建axios的实例
const instance = axios.create({
  baseURL: 'http://127.0.0.1:8000',
  headers: {
    "content-type": "application/json;charset=UTF-8"
  },
  timeout: 10000
})

// 请求拦截器，请求发出时的处理
instance.interceptors.request.use(config => {
  // config.headers.Authorization = window.sessionStorage.getItem('token')
  console.log('发送请求成功！')
  return config
}, error => {
  console.log('发送请求失败！')
  console.log(error)
  return Promise.error(error)
}
)

// 响应拦截器配置，服务器响应时的反应
instance.interceptors.response.use(response => {
  console.log("服务器响应成功！")
  return Promise.resolve(response.data)
}, error => {
  console.log("服务器响应失败！")
  console.log(error)
  // switch (error.response.status) {
  //   case 401:
  //     console.log("401无权访问")
  //     // router.push({path: '/login'})
  //     break
  //   case 403:
  //     console.log("403:token过期啦")
  //     // router.push({path: '/login'})
  //     break
  //   case 404:
  //     console.log("404啦")
  //     // router.push({path: '/404'})
  //     break
  //   default:
  //     return Promise.reject(error)
  // }
  return Promise.reject(error)
})

export default instance;