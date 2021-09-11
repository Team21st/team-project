import request from '@/utils/request'

export function login(params) {
  return request({
    url: '/users/login',
    method: 'post',
    params: params
  })
}
