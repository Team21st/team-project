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
        <el-button @click="dialogVisible = false">Cancel</el-button>
        <el-button type="primary" @click="changePassword">Apply</el-button>
      </span>
    </el-dialog>

    <el-form label-width="80px" :model="userInfo">
      <el-upload
        class="avatar-uploader"
        action="https://jsonplaceholder.typicode.com/posts/"
        :show-file-list="false"
        :on-success="handleAvatarSuccess"
        :before-upload="beforeAvatarUpload">
        <img v-if="imageUrl" :src="imageUrl" class="avatar">
        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
      </el-upload>
      <el-form-item label="College">
        <el-input v-model="userInfo.college"></el-input>
      </el-form-item>
      <el-form-item label="Student ID">
        <el-input v-model="userInfo.sno"></el-input>
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
      <el-form-item label="userInfo">
        <el-input v-model="userInfo.userInfo"></el-input>
      </el-form-item>
    </el-form>
    <div>
      <el-button type="primary" @click="changeUserInfo">Edit Info</el-button>
      <el-button type="danger" @click="dialogVisible=true">Change Password</el-button>
    </div>
  </div>
</template>

<script>
import {changeUserPassword,queryUserPrivateInfo,updateUserPrivateInfo} from "@/api/user";

import {mapGetters} from "vuex";

export default {
  name: "info",
  mounted() {
    this.showUserInfo()
  },
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
      },
      imgUrl:''
    }
  },
  methods: {
    changePassword() {
      changeUserPassword(this.passwordForm).then(res => {
        this.$message.success(res.body)
        this.dialogVisible = false
      })
    },
    showUserInfo(){
      queryUserPrivateInfo({}).then(res => {
        console.log(res)
        this.userInfo.birthday=res.body.birthday
        this.userInfo.college=res.body.college
        this.userInfo.sno=res.body.sno
        this.userInfo.userInfo=res.body.userInfo
        this.userInfo.userName=res.body.userName
        this.userInfo.userRealName=res.body.userRealName
      })
    },
    changeUserInfo(){
      updateUserPrivateInfo(this.userInfo).then(res=>{
        console.log(res)
        this.$message.success(res.body)
        this.showUserInfo()
      })
    },
    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw);
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === 'image/jpeg';
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error('only accept JPG file!');
      }
      if (!isLt2M) {
        this.$message.error('no more than 2MB!');
      }
      return isJPG && isLt2M;
    }
  }, computed: {
    ...mapGetters(['userInfo'])
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
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409EFF;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>
