<template>
  <!--  注册与登入同页面-->
  <div id="login">
    <forget-password ref="forgetPassword"></forget-password>
    <!--    弹窗-->
    <el-button type="primary"
               @click="back"
               size="mini"
               style="position: fixed;top: 10px;left: 10px">
      <i class="el-icon-back"></i>
      Back
    </el-button>
    <div class="submit">
      <div class="submit-info" v-if="isLogin">
        <h1>Log in</h1>
        <el-form :model="loginForm" :rules="rules1" ref="loginForm">
          <el-form-item label="Email Address" prop="userEmail">
            <el-input placeholder="Input your email" v-model="loginForm.userEmail"></el-input>
          </el-form-item>
          <el-form-item label="Password" prop="userPassword">
            <el-input placeholder="Input your password" v-model="loginForm.userPassword" type="password"></el-input>
          </el-form-item>
        </el-form>
        <div style="text-align: right;margin-top: 30px">
          <a href="#" @click="forgetPassword">forget password</a>
        </div>
        <el-button style="width: 100%;margin-top: 10px" type="primary" @click="login">
          Log in
        </el-button>
        <el-button style="width: 100%;margin:10px 0" @click="isLogin=false">
          New Account
        </el-button>
      </div>
      <div class="submit-info" v-else>
        <h1>Sign up</h1>
        <el-form :model="registerForm" :rules="rules2" ref="registerForm">
          <el-form-item label="Email Address" prop="userEmail">
            <el-input placeholder="Input your email" v-model="registerForm.userEmail">
              <el-button slot="append" @click="sendEmail" :disabled="sentEmailAble">Send</el-button>
            </el-input>
          </el-form-item>
          <el-form-item label="Security Code" prop="code">
            <el-input placeholder="Input your security code" v-model="registerForm.code"></el-input>
          </el-form-item>
          <el-form-item label="userName" prop="userName">
            <el-input placeholder="Input your userName" v-model="registerForm.userName"></el-input>
          </el-form-item>
          <el-form-item label="Password" prop="userPassword">
            <el-input placeholder="Input your userPassword" type="password"
                      v-model="registerForm.userPassword"></el-input>
          </el-form-item>
        </el-form>
        <div style="margin-top: 30px">
          <el-button style="width: 100%;margin-top: 10px" type="primary" @click="register">
            Sign up
          </el-button>
          <el-button style="width: 100%;margin:10px 0" @click="isLogin=true">
            Already Have An Account
          </el-button>
        </div>
      </div>
    </div>
    <div class="img hidden-md-and-down">
      <div style="display: flex;justify-content: center;flex-direction: column;">
        <el-image
          style="height:450px;line-height: 450px"
          :src="require('../assets/图书义卖.svg')" alt="">
        </el-image>
        <el-image
          style="height:80px;margin-top: 10px"
          :src="require('../assets/LineText.png')" alt="">
        </el-image>
      </div>
    </div>
  </div>
</template>

<script>
import {userRegister, judgeUserName} from "@/api/user"
import {sendEmail} from "@/api/message";
import {mapActions, mapGetters} from "vuex/dist/vuex.mjs";
import ForgetPassword from "@/components/Market/forgetPassword";

export default {
  name: "Login",
  components: {ForgetPassword},
  data() {
    const checkUserName = async (rule, value, callback) => {
      if (await judgeUserName({
        userName: value
      }).then(res => {
        return res.head.respCode = 0
      })) {
        callback(new Error('Already be used'))
      } else {
        callback()
      }
    }
    return {
      isLogin: true,
      loginForm: {
        userEmail: '',
        userPassword: ''
      },
      registerForm: {
        code: '',
        userPassword: '',
        userEmail: '',
        userName: ''
      },
      sentEmailAble: false,
      rules1: {
        userEmail: [
          {required: true, type: 'email', trigger: 'blur'}
        ],
        userPassword: [
          {required: true, message: 'Please input your password', trigger: 'blur'}
        ],
      },
      rules2: {
        userPassword: [
          {required: true, message: 'Please input your password', trigger: 'blur'}
        ],
        userEmail: [
          {required: true, type: 'email', trigger: 'blur'}
        ],
        code: [
          {required: true, message: 'Please enter your security code', trigger: 'blur'}
        ],
        userName: [
          {required: true, message: 'Please enter your userName', trigger: 'blur'},
          {min: 4, max: 10, message: 'The length is 4 to 10 characters', trigger: 'blur'},
          {validator: checkUserName, trigger: 'blur'}
        ]
      }
    }
  },
  methods: {
    ...mapActions(['Login']),
    login() {
      this.$refs['loginForm'].validate((valid) => {
        if (valid) {
          this.Login(this.loginForm).then(res => {
            if (res.body.userBean.userRoot === 0) {
              this.$router.push('/')
            } else {
              this.$router.push('/admin/dashboard')
            }
          })
        } else {
          return false
        }
      })
    },
    register() {
      this.$refs['registerForm'].validate((valid) => {
        console.log(valid)
        if (valid) {
          userRegister({...this.registerForm}).then((res) => {
            this.$message.success(res.head.respMsg)
            this.isLogin = true
            console.log(res)
          })
        } else {
          return false
        }
      })
    },
    sendEmail() {
      this.$refs['registerForm'].validateField(['userEmail'], valid => {
        if (valid == null || valid === '') {
          sendEmail({userEmail: this.registerForm.userEmail}).then((res) => {
            console.log(res)
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
    back() {
      this.$router.push('/')
    },
    forgetPassword() {
      this.$refs.forgetPassword.open()
    }
  },
  computed: {
    ...mapGetters(['token', 'userInfo'])
  }
}
</script>

<style scoped lang="less">
#login {
  display: flex;
  height: 100vh;

  .submit {
    background-color: white;
    width: 40%;
    flex: 1 1 auto;

    .submit-info {
      width: 60%;
      margin: 15vh auto;


      h1 {
        margin-bottom: 20px;
      }

      a {
        color: gray;
      }

      .el-form-item {
        margin: 10px 0;
      }
    }
  }

  .img {
    width: 60%;
    display: flex;
    justify-content: center;
    background-color: #f2efe8;
  }
}
</style>
