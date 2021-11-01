import request from '@/utils/request'

export function bookOnShelve(params) {
  return request({
    requestServer: 'StoreService',
    url: '/trade/bookOnShelve',
    method: 'post',
    params: params
  })
}

export function deleteBookOnShelve(params) {
  return request({
    requestServer: 'StoreService',
    url: '/trade/deleteBookOnShelve',
    method: 'post',
    params: params
  })
}

export function editBookOnShelve(params) {
  return request({
    requestServer: 'StoreService',
    url: '/trade/editBookOnShelve',
    method: 'post',
    params: params
  })
}
