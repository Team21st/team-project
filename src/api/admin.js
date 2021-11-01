import request from '@/utils/request'

export function adminRegister(params) {
  return request({
    requestServer: 'StoreService',
    url: '/admin/adminRegister',
    method: 'post',
    params: params
  })
}

export function queryAuditRecords(params) {
  return request({
    requestServer: 'StoreService',
    url: '/manage/queryAuditRecords',
    method: 'post',
    params: params
  })
}
