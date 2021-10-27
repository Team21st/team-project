import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import settings from './modules/settings'
import user from './modules/user'
import {Message} from 'element-ui'

import storage from 'store'
import {queryUserPrivateInfo, userLogin} from '@/api/user'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    token: '',
    userInfo: '',
  },
  mutations: {
    setToken: (state, token) => {
      state.token = token
    },
    setUserInfo: (state, userInfo) => {
      state.userInfo = userInfo
    },
    signOut(state) {
      state.uuid = ''
      state.userInfo = ''
    }
  },
  actions: {
    Login({commit}, userInfo) {
      return new Promise((resolve, reject) => {
        userLogin(userInfo).then(res => {
          console.log(res)
          commit('setToken', res.body.token)
          commit('setUserInfo',res.body.userBean)
          Message.success("登入成功")
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },
    // 登出
    Logout({commit}) {
      return new Promise((resolve) => {
        commit('signOut')
        storage.remove('token')
        resolve()
      })
    },
    getUserInfo({commit}) {
      return new Promise((resolve, reject) => {
        try {
          queryUserPrivateInfo({}).then(res => {
            if (res) {
              commit('setUserInfo', res.userInfo)
              resolve(res)
            } else {
              commit('Logout')
              storage.remove('token')
              reject('获取用户信息失败')
            }
          }).catch(err => {
            reject(err)
          })
        } catch (error) {
          reject(error)
        }
      })
    }
  },
  modules: {
    settings,
    user
  },
  getters
})

export default store
