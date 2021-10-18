import request from '@/utils/request'

export function sendEmail(params) {
  return request({
    requestServer: 'StoreService',
    url: '/message/sendEmail',
    method: 'get',
    query: params,
  })
}
