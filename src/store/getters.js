const getters = {
  token: state => state.token,
  userInfo: state => state.userInfo,
  userName: state => state.userInfo.userName
}
export default getters
