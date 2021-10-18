import request from '@/utils/request'

export function changeUserPassword(params) {
  return request({
    requestServer: 'StoreService',
    url: '/user/changeUserPassword',
    method: 'post',
    params: params
  })
}
