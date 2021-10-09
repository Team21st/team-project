<template>
  <div class="container">
    <el-table :data="userList" style="width: 100%">
      <el-table-column prop="userBean.userName" label="用户名"></el-table-column>
      <el-table-column prop="userBean.userEmail" label="邮箱"></el-table-column>
      <el-table-column prop="userBean.userNo" label="UUID" width="180"></el-table-column>
      <el-table-column prop="userBean.comment" label="评论内容" width="400"></el-table-column>
      <el-table-column prop="userBean.reason" label="举报原因" width="300"></el-table-column>
      <el-table-column label="账号操作">
        <el-button type="danger">封禁用户
        </el-button>
        <el-button type="info">删除
        </el-button>
      </el-table-column>
    </el-table>
    <div class="footer">
      <el-pagination
        @current-change="getUserList"
        background
        :current-page="userListCurrent"
        :pager-count="5"
        layout="prev, pager, next"
        :page-count="userListPages">
      </el-pagination>
    </div>
  </div>
</template>

<script>

export default {
  name: "index",
  data() {
    return {
      userList: '',
      userListCurrent: 1,
      userListPages: '',
      token: ''
    }
  },
  mounted() {
    this.token = this.$store.state.token
    this.$nextTick(function () {
      this.initData()
    })
  },
  methods: {
    initData() {
      this.getUserList(1)
    },
    getUserList(val) {
      Server.userList({
        current: val,
        size: 15
      }, this.token).then(res => {
        if (res.code === 1) {
          this.userListPages = res.obj.pages
          this.userList = [
            {
              userBean: {
                userName: '工藤新一',
                userEmail: '1316s556@qq.com',
                userNo: '123123123',
                comment:'公使馆升格速度快决赛当晚送的显卡撒啊啊啊啊啊啊啊啊',
                reason:'垃圾评论'
              }
            },
            {
              userBean: {
                userName: '水水大',
                userEmail: '13112356@qq.com',
                userNo: '123123123',
                comment:'这个商品真的很垃圾，！@￥#%￥%&……%……&',
                reason:'脏话'
              }
            },
            {
              userBean: {
                userName: 'SSR',
                userEmail: '13112356@qq.com',
                userNo: '123123123',
                comment:'你好，+QQ1912378819',
                reason:'广告'
              }
            }
          ]
          for (let i = 0; i < this.userList.length; i++) {
            this.userList[i].userBean.money = this.userList[i].userBean.money.toFixed(2);
          }
        }
      })
    },
    banUser(userNo) {
    },
    unBanUser(userNo) {
    },
  }
}
</script>

<style lang="less">
</style>
