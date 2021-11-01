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

export function forgetUserPassword(params) {
  return request({
    requestServer: 'StoreService',
    url: '/user/forgetUserPassword',
    method: 'post',
    data: params
  })
}

export function queryUserPrivateInfo(params) {
  return request({
    requestServer: 'StoreService',
    url: '/user/queryUserPrivateInfo',
    method: 'post',
    data: params
  })
}

export function updateUserPrivateInfo(params) {
  return request({
    requestServer: 'StoreService',
    url: '/user/updateUserPrivateInfo',
    method: 'post',
    data: params
  })
}

export function uploadHeadPortrait(params) {
  return request({
    headers: {
      'Content-Type': 'multipart/form-data'
    },
    requestServer: 'StoreService',
    url: '/user/uploadHeadPortrait',
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

export function judgeUserName(params) {
  return request({
    requestServer: 'StoreService',
    url: '/user/judgeUserName',
    method: 'post',
    data: params
  })
}

//用户商品相关 查询我的上架商品记录（包括所有审核状态）
export function queryMyCommodity(params) {
  return request({
    requestServer: 'StoreService',
    url: '/user/queryMyCommodity',
    method: 'post',
    data: params
  })
}
