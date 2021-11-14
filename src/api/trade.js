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

// 商家查看订单
export function sellerQueryOrderList(params) {
  return request({
    requestServer: 'StoreService',
    url: '/trade/sellerQueryOrderList',
    method: 'post',
    params: params
  })
}

// 搜索商品
export function queryCommodities(params) {
  return request({
    requestServer: 'StoreService',
    url: '/trade/queryCommodities',
    method: 'post',
    params: params
  })
}

// 下单
export function placeOrder(params) {
  return request({
    requestServer: 'StoreService',
    url: '/trade/placeOrder',
    method: 'post',
    params: params
  })
}


// 购物车查询
export function queryShoppingCart(params) {
  return request({
    requestServer: 'StoreService',
    url: '/trade/queryShoppingCart',
    method: 'post',
    params: params
  })
}

// 购物车修改
export function editShoppingCart(params) {
  return request({
    requestServer: 'StoreService',
    url: '/trade/editShoppingCart',
    method: 'post',
    params: params
  })
}

// 购物车下单
export function palaceCartOrder(params) {
  return request({
    requestServer: 'StoreService',
    url: '/trade/palaceCartOrder',
    method: 'post',
    params: params
  })
}
