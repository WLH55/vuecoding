import axios from 'axios'
const wlhrequest = axios.create({
  baseURL: 'https://smart-shop.itheima.net/index.php?s=/api/',
  timeout: 5000
})

//添加请求拦截器
wlhrequest.interceptors.request.use(function (config){
  //在发送请求之前做什么
  return config
},function (error){
  //对错误请求做什么
  return Promise.reject(error)
})

//添加响应拦截器
wlhrequest.interceptors.response.use(function (response){
  //对响应数据做什么
  return response.data
},function (error){
  //对响应错误做些什么
  return Promise.reject(error)
})

export default wlhrequest

