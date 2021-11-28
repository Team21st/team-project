<template>
  <div class="container">
    <el-table :data="userList" style="width: 100%">
      <el-table-column prop="userBean.userName" label="UserName"></el-table-column>
      <el-table-column prop="userBean.userEmail" label="Email"></el-table-column>
      <el-table-column prop="userBean.userNo" label="UUID" width="250"></el-table-column>
      <el-table-column prop="userBean.userRealName" label="UserRealName"></el-table-column>
      <el-table-column prop="userBean.cardName" label="cardName"></el-table-column>
      <el-table-column prop="userBean.cardNo" label="cardNo"></el-table-column>
      <el-table-column prop="userBean.money" label="money"></el-table-column>
      <el-table-column label="Operation">
        <el-button type="success">Approved
        </el-button>
        <el-button type="danger">Rejected
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
    getUserList() {

    },
    banUser() {
    },
    unBanUser() {
    }
  }
}
</script>

<style lang="less">
</style>
