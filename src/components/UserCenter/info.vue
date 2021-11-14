<template>
  <div id="user-info">
    // 密码修改弹窗
    <el-dialog
      title="Change Password"
      :visible.sync="dialogVisible"
      width="30%">
      <el-form>
        <el-form-item label="oldPassword">
          <el-input v-model="passwordForm.oldPassword" type="password"></el-input>
        </el-form-item>
        <el-form-item label="newPassword">
          <el-input v-model="passwordForm.newPassword" type="password"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="changePassword">确 定</el-button>
      </span>
    </el-dialog>

    <el-form label-width="80px" :model="userInfo">
      <el-form-item label="名称">
        <el-input v-model="userInfo.name"></el-input>
      </el-form-item>
      <el-form-item label="活动区域">
        <el-input v-model="userInfo.region"></el-input>
      </el-form-item>
      <el-form-item label="活动形式">
        <el-input v-model="userInfo.type"></el-input>
      </el-form-item>
    </el-form>
    <div>
      <el-button type="primary">Edit Info</el-button>
      <el-button type="danger" @click="dialogVisible=true">Change Password</el-button>
    </div>
  </div>
</template>

<script>
import {changeUserPassword} from "@/api/user";

export default {
  name: "info",
  data() {
    return {
      userInfo: {},
      dialogVisible: false,
      passwordForm: {
        newPassword: '',
        oldPassword: ''
      }
    }
  },
  methods: {
    changePassword() {
      changeUserPassword(this.passwordForm).then(res => {
        this.$message.success(res.body)
        this.dialogVisible = false
      })
    }
  }
}
</script>

<style scoped lang="less">
#user-info {
  width: 400px;
  margin: auto;
  text-align: center;
}
</style>
