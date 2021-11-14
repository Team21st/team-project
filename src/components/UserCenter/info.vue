<template>
  <div id="user-info">
    <h2>Personal Info</h2>
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
      <el-form-item label="College">
        <el-input v-model="userInfo.name"></el-input>
      </el-form-item>
      <el-form-item label="Student ID">
        <el-input v-model="userInfo.region"></el-input>
      </el-form-item>
      <el-form-item label="Birthday">
        <el-input v-model="userInfo.birthday"></el-input>
      </el-form-item>
      <el-form-item label="userName">
        <el-input v-model="userInfo.userName"></el-input>
      </el-form-item>
      <el-form-item label="userRealName">
        <el-input v-model="userInfo.userRealName"></el-input>
      </el-form-item>
      <el-form-item label="Resume">
        <el-input v-model="userInfo.userInfo"></el-input>
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
      userInfo: {
        birthday: '',
        college: '',
        sno: '',
        userInfo: '',
        userName: '',
        userRealName: ''
      },
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

  h2{
    margin-bottom: 20px;
  }
}
</style>
