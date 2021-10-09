import request from '@/utils/request'

export function login(params) {
  return request({
    requestServer: 'StoreService',
    url: '/users/login',
    method: 'post',
    params: params
  })
}
