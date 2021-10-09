<template>
  <div class="container">
    <el-table :data="userList" style="width: 100%">
      <el-table-column prop="userBean.lastLoginTime" label="最后登入日期" width></el-table-column>
      <el-table-column prop="userBean.userName" label="用户名" ></el-table-column>
      <el-table-column prop="userBean.userEmail" label="邮箱" ></el-table-column>
      <el-table-column prop="userBean.userNo" label="UUID" width="250"></el-table-column>
      <el-table-column prop="userBean.unquaComm" label="不合格商品数" ></el-table-column>
      <el-table-column prop="userBean.isBan" label="账号状态">
        <div slot-scope="scope">
          <div v-if="scope.row.userBean.isBan === 0"><el-tag type="success">正常</el-tag></div>
          <div v-else><el-tag type="danger">封禁</el-tag></div>
        </div>
      </el-table-column>
      <el-table-column label="账号操作">
        <template slot-scope="scope">
          <el-button type="danger" @click="banUser(scope.row.userBean.userNo)"
                     v-if="scope.row.userBean.isBan===0">封禁
          </el-button>
          <el-button type="success" @click="unBanUser(scope.row.userBean.userNo)"
                     v-if="scope.row.userBean.isBan===1">解封
          </el-button>
        </template>
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
  name: "Account",
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
    },
    banUser(userNo) {
    },
    unBanUser(userNo) {
    },
    rTime: function (date) {
      var date1 = new Date(date).toJSON();
      return new Date(+new Date(date1) + 8 * 3600 * 1000).toISOString().replace(/T/g, ' ').replace(/\.[\d]{3}Z/, '')
    },
  }
}
</script>
<style lang="scss">
</style>
