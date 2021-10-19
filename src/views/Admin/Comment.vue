<template>
  <div class="container">
    <el-table :data="userList" style="width: 100%">
      <el-table-column prop="userBean.userName" label="用户名"></el-table-column>
      <el-table-column prop="userBean.userEmail" label="邮箱"></el-table-column>
      <el-table-column prop="userBean.userNo" label="UUID" width="180"></el-table-column>
      <el-table-column prop="userBean.comment" label="Content" width="400"></el-table-column>
      <el-table-column prop="userBean.reason" label="Reason" width="300"></el-table-column>
      <el-table-column label="账号操作">
        <el-button type="danger">Ban
        </el-button>
        <el-button type="info">Delete
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
    },
  }
}
</script>

<style lang="less">
</style>
