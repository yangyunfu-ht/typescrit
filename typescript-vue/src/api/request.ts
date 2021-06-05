import axios from 'axios'

const request = (config: any):any => {
  const service = axios.create({
    baseURL: 'http://localhost:3000',
    timeout: 5000,
    withCredentials: true
  })

  // 请求拦截器
  service.interceptors.request.use(data => {
    return Promise.resolve(data)
  }, error => {
    return Promise.reject(error)
  })

  // 响应拦截器
  service.interceptors.response.use(data => {
    return Promise.resolve(data)
  }, error => {
    return Promise.reject(error)
  })

  return service(config)
}

export default request