import axios from 'axios'
import {Message} from 'element-ui'
import storage from 'store'
import router from '@/router'
import getters from "@/store/getters";

// create an axios instance
const service = axios.create({
  // eslint-disable-next-line no-undef
  baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 5000 // request timeout
})

// request interceptor
service.interceptors.request.use(
  config => {
    if (config.requestServer) {
      config.requestServer === 'StoreService'
        // eslint-disable-next-line no-undef
        ? config.baseURL = process.env.VUE_APP_BASE_API
        // eslint-disable-next-line no-undef
        : config.baseURL = process.env.VUE_APP_BASE_API_PY
    }
    if (storage.get('token')) {
      // let each request carry token
      // ['X-Token'] is a custom headers key
      // please modify it according to the actual situation
      config.headers['Authorization'] = storage.get('token')
    }
    return config
  },
  error => {
    // do something with request error
    return Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(
  response => {
    if (response.data.head.respCode === -1
      || response.data.head.respCode === -2) {
      Message.error(response.data.head.respMsg)
      return Promise.reject(response.data.head.respMsg)
    }
    return response.data
  },
  error => {
    {
      console.log('err' + error) // for debug
      Message({
        message: error.message,
        type: 'error',
        duration: 5 * 1000
      })
      return Promise.reject(error)
    }
  }
)

export default service
