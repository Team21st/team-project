<template>
  <el-dialog title="Change your Password" :visible.sync="show">
    <el-form :model="form" :rules="rules" ref="form">
      <el-form-item label="Email Address" prop="userEmail">
        <el-input placeholder="Input your email" v-model="form.userEmail">
          <el-button slot="append" @click="sendEmail" :disabled="sentEmailAble">Send</el-button>
        </el-input>
      </el-form-item>
      <el-form-item label="Security Code" prop="code">
        <el-input placeholder="Input your security code" v-model="form.code"></el-input>
      </el-form-item>
      <el-form-item label="New Password" prop="userPassword">
        <el-input placeholder="Input your New Password" type="password"
                  v-model="form.userPassword"></el-input>
      </el-form-item>
    </el-form>
  </el-dialog>
</template>

<script>
import {sendEmail} from "@/api/message";
import {forgetUserPassword} from "@/api/user";

export default {
  name: "forgetPassword",
  data() {
    return {
      form: {
        code: '',
        userPassword: '',
        userEmail: '',
      },
      sentEmailAble: false,
      show: false,
      rules: {
        userPassword: [
          {required: true, message: 'Please input your password', trigger: 'blur'}
        ],
        userEmail: [
          {required: true, type: 'email', trigger: 'blur'}
        ],
        code: [
          {required: true, message: 'Please enter your security code', trigger: 'blur'}
        ]
      }
    }
  },
  methods: {
    open() {
      this.show = true
    },
    sendEmail() {
      this.$refs['form'].validateField(['userEmail'], valid => {
        if (valid == null || valid === '') {
          sendEmail({userEmail: this.form.userEmail}).then((res) => {
            this.$message.success(res.head.respMsg)
            this.sentEmailAble = true
            setTimeout(() => {
              this.sentEmailAble = false
            }, 1200000)
          })
        } else {
          return false
        }
      })
    },
    changePassword() {
      forgetUserPassword(this.form).then(() => {
        this.$message.success(res.head.respMsg)
        this.show = false
      })
    }
  }
}
</script>

<style scoped>

</style>
