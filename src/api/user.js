import request from '@/utils/request'

// 用户相关接口
export function changeUserPassword(params) {
  return request({
    requestServer: 'StoreService',
    url: '/user/changeUserPassword',
    method: 'post',
    data: params
  })
}

export function userLogin(params) {
  return request({
    requestServer: 'StoreService',
    url: '/user/userLogin',
    method: 'post',
    data: params
  })
}

export function userRegister(params) {
  return request({
    requestServer: 'StoreService',
    url: '/user/userRegister',
    method: 'post',
    data: params
  })
}
