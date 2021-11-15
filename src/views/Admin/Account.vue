<template>
  <div class="container">
    <el-table :data="userList"
              style="width: 100%">
      <el-table-column prop="lastLoginTime" label="Last Login Time" width
                       :show-overflow-tooltip="true"></el-table-column>
      <el-table-column prop="userName" label="userName" :show-overflow-tooltip="true"></el-table-column>
      <el-table-column prop="userEmail" label="userEmail" :show-overflow-tooltip="true"></el-table-column>
      <el-table-column prop="userNo" label="userNo" width="100" :show-overflow-tooltip="true"></el-table-column>
      <el-table-column prop="unquaComm" label="unquaComm number"></el-table-column>
      <el-table-column prop="isBan" label="Status">
        <div slot-scope="scope">
          <div v-if="scope.row.isBan === 0">
            <el-tag type="success">Normal</el-tag>
          </div>
          <div v-else>
            <el-tag type="danger">Banned</el-tag>
          </div>
        </div>
      </el-table-column>
      <el-table-column label="Account Operation">
        <template slot-scope="scope">
          <el-button type="danger"
                     size="mini"
                     @click=setUserStatus(1,scope.row.userNo)
                     v-if="scope.row.isBan===0">Ban
          </el-button>
          <el-button type="success"
                     size="mini"
                     @click=setUserStatus(0,scope.row.userNo)
                     v-if="scope.row.isBan===1">unBan
          </el-button>
          <el-button type="success"
                     size="mini"
                     @click=setAuthorizeUser(2,scope.row.userNo)
                     v-if="scope.row.authentication!==2">Approve
          </el-button>
          <el-button type="danger"
                     size="mini"
                     @click=setAuthorizeUser(3,scope.row.userNo)
                     v-else>Reject
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
import {queryAllUsers, banUser, authorizeUser} from "@/api/admin";

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
    setUserStatus(status, userNo) {
      banUser({
        //封禁状态(0 正常, 1 封禁)
        isBan: status,
        userNo: userNo
      }).then(res => {
        this.$message.success(res.body)
        this.getUserList()
      })
    },
    setAuthorizeUser(authentication, userNo) {
      authorizeUser({
        // 认证状态(0 未认证, 1 认证中, 2 认证通过 , 3 认证失败)
        authentication: authentication,
        userNo: userNo
      }).then(res=>{
        this.$message.success(res.body)
        this.getUserList()
      })
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
