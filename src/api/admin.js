import request from '@/utils/request'

export function adminRegister(params) {
  return request({
    requestServer: 'StoreService',
    url: '/admin/adminRegister',
    method: 'post',
    data: params
  })
}

export function queryAuditRecords(params) {
  return request({
    requestServer: 'StoreService',
    url: '/manage/queryAuditRecords',
    method: 'post',
    data: params
  })
}

export function queryAllUsers(params) {
  return request({
    requestServer: 'StoreService',
    url: '/manage/queryAllUsers',
    method: 'post',
    data: params
  })
}

export function authorizeUser(params) {
  return request({
    requestServer: 'StoreService',
    url: '/manage/authorizeUser',
    method: 'post',
    data: params
  })
}

export function banUser(params) {
  return request({
    requestServer: 'StoreService',
    url: '/manage/banUser',
    method: 'post',
    data: params
  })
}

export function auditBooks(params) {
  return request({
    requestServer: 'StoreService',
    url: '/manage/auditBooks',
    method: 'post',
    data: params
  })
}

export function administratorHomepageDisplay(params) {
  return request({
    requestServer: 'StoreService',
    url: '/manage/administratorHomepageDisplay',
    method: 'post',
    data: params
  })
}
