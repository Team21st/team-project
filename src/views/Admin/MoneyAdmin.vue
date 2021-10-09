<template>
  <div class="container">
    <el-table :data="userList" style="width: 100%">
      <el-table-column prop="userBean.userName" label="用户名"></el-table-column>
      <el-table-column prop="userBean.userEmail" label="邮箱"></el-table-column>
      <el-table-column prop="userBean.userNo" label="UUID" width="250"></el-table-column>
      <el-table-column prop="userBean.userRealName" label="真实姓名"></el-table-column>
      <el-table-column prop="userBean.cardName" label="户名"></el-table-column>
      <el-table-column prop="userBean.cardNo" label="银行卡号"></el-table-column>
      <el-table-column prop="userBean.money" label="提现金额"></el-table-column>
      <el-table-column label="账号操作">
        <el-button type="success">批准
        </el-button>
        <el-button type="danger">驳回
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
                userRealName: '玛丽拉姆',
                cardName: '玛丽拉姆',
                cardNo: '6462564851622',
                money: 1000
              }
            },
            {
              userBean: {
                userName: '水水大',
                userEmail: '13112356@qq.com',
                userNo: '123123123',
                userRealName: '马冬梅',
                cardName: '马冬梅',
                cardNo: '25645612564',
                money: 200
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
