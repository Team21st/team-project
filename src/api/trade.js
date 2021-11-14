import request from '@/utils/request'

export function bookOnShelve(params) {
  return request({
    requestServer: 'StoreService',
    url: '/trade/bookOnShelve',
    method: 'post',
    data: params
  })
}

export function deleteBookOnShelve(params) {
  return request({
    requestServer: 'StoreService',
    url: '/trade/deleteBookOnShelve',
    method: 'post',
    data: params
  })
}

export function editBookOnShelve(params) {
  return request({
    requestServer: 'StoreService',
    url: '/trade/editBookOnShelve',
    method: 'post',
    data: params
  })
}

// 商家查看订单
export function sellerQueryOrderList(params) {
  return request({
    requestServer: 'StoreService',
    url: '/trade/sellerQueryOrderList',
    method: 'post',
    data: params
  })
}

// 搜索商品
export function queryCommodities(params) {
  return request({
    requestServer: 'StoreService',
    url: '/trade/queryCommodities',
    method: 'post',
    data: params
  })
}

// 下单
export function placeOrder(params) {
  return request({
    requestServer: 'StoreService',
    url: '/trade/placeOrder',
    method: 'post',
    data: params
  })
}


// 购物车查询
export function queryShoppingCart(params) {
  return request({
    requestServer: 'StoreService',
    url: '/trade/queryShoppingCart',
    method: 'post',
    data: params
  })
}

// 购物车修改
export function editShoppingCart(params) {
  return request({
    requestServer: 'StoreService',
    url: '/trade/editShoppingCart',
    method: 'post',
    data: params
  })
}

// 购物车下单
export function palaceCartOrder(params) {
  return request({
    requestServer: 'StoreService',
    url: '/trade/palaceCartOrder',
    method: 'post',
    data: params
  })
}
