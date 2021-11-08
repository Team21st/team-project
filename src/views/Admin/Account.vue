<template>
  <div class="container">
    <el-table :data="userList"
              style="width: 100%">
      <el-table-column prop="lastLoginTime" label="最后登入日期" width :show-overflow-tooltip="true"></el-table-column>
      <el-table-column prop="userName" label="用户名" :show-overflow-tooltip="true"></el-table-column>
      <el-table-column prop="userEmail" label="邮箱" :show-overflow-tooltip="true"></el-table-column>
      <el-table-column prop="userNo" label="UUID" width="100" :show-overflow-tooltip="true"></el-table-column>
      <el-table-column prop="unquaComm" label="不合格商品数"></el-table-column>
      <el-table-column prop="isBan" label="账号状态">
        <div slot-scope="scope">
          <div v-if="scope.row.isBan === 1">
            <el-tag type="success">正常</el-tag>
          </div>
          <div v-else>
            <el-tag type="danger">封禁</el-tag>
          </div>
        </div>
      </el-table-column>
      <el-table-column label="账号操作">
        <template slot-scope="scope">
          <el-button type="danger"
                     size="mini"
                     v-if="scope.row.isBan===1">封禁
          </el-button>
          <el-button type="success"
                     size="mini"
                     v-if="scope.row.isBan===2">解封
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="footer">
      <el-pagination
        @current-change="getUserList"
        background
        :current-page="queryForm.queryPage"
        :pager-count="5"
        :total="queryForm.total"
        layout="prev, pager, next"
        :page-count="queryForm.querySize">
      </el-pagination>
    </div>
  </div>
</template>

<script>
import {queryAllUsers, banUser} from "@/api/admin";

export default {
  name: "Account",
  data() {
    return {
      userList: [],
      token: '',
      queryForm: {
        authentication: '',
        isBan: '',
        queryPage: 1,
        querySize: 10,
        userEmail: '',
        total: 0
      }
    }
  },
  mounted() {
    this.$nextTick(function () {
      this.initData()
    })
  },
  methods: {
    initData() {
      this.getUserList()
    },
    getUserList() {
      queryAllUsers(this.queryForm).then(res => {
        this.userList = res.body.records
        this.queryForm.queryPage = res.body.current
        this.queryForm.querySize = res.body.size
        this.queryForm.total = res.body.total
      })
    },
    // banUser(userNo) {
    // },
    // unBanUser(userNo) {
    // },
    rTime: function (date) {
      var date1 = new Date(date).toJSON();
      return new Date(+new Date(date1) + 8 * 3600 * 1000).toISOString().replace(/T/g, ' ').replace(/\.[\d]{3}Z/, '')
    },
  }
}
</script>
<style lang="scss">
</style>
