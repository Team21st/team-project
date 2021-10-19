<template>
  <!--  注册与登入同页面-->
  <div id="login">
    <div class="submit">
      <div class="submit-info" v-if="isLogin">
        <h1>Log in</h1>
        <el-form>
          <el-form-item label="Email Address">
            <el-input placeholder="Input your email"></el-input>
          </el-form-item>
          <el-form-item label="Password">
            <el-input placeholder="Input your password"></el-input>
          </el-form-item>
        </el-form>
        <div style="text-align: right;margin-top: 30px">
          <a href="#">forget password</a>
        </div>
        <el-button style="width: 100%;margin-top: 10px" type="primary">
          Log in
        </el-button>
        <el-button style="width: 100%;margin:10px 0" @click="isLogin=false">
          New Account
        </el-button>
      </div>
      <div class="submit-info" v-else>
        <h1>Sign up</h1>
        <el-form>
          <el-form-item label="Email Address">
            <el-input placeholder="Input your email">
              <el-button slot="append">Send Code</el-button>
            </el-input>
          </el-form-item>
          <el-form-item label="Security Code">
            <el-input placeholder="Input your security code"></el-input>
          </el-form-item>
          <el-form-item label="Name">
            <el-input placeholder="Input your password"></el-input>
          </el-form-item>
          <el-form-item label="Password">
            <el-input placeholder="Input your password"></el-input>
          </el-form-item>
        </el-form>
        <div style="margin-top: 30px">
          <el-button style="width: 100%;margin-top: 10px" type="primary">
            Sign up
          </el-button>
          <el-button style="width: 100%;margin:10px 0" @click="isLogin=true">
            Already Have An Account
          </el-button>
        </div>
      </div>
    </div>
    <div class="img">
      <div style="display: flex;justify-content: center;flex-direction: column;">
        <el-image
          style="height:500px;line-height: 500px"
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
import {userLogin, userRegister} from "@/api/user"

export default {
  name: "Login",
  data() {
    return {
      isLogin: false,
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
    }
  },
  methods: {
    login() {
      userLogin({}).then((res) => {
        console.log(res)
      })
    },
    register() {
      userRegister({})
    }
  }
}
</script>

<style scoped lang="less">
#login {
  display: flex;
  height: 100vh;

  .submit {
    width: 40%;
    flex: 1 1 auto;

    .submit-info {
      width: 60%;
      margin: 20vh auto;

      h1 {
        margin-bottom: 40px;
      }

      a {
        color: gray;
      }

      .el-form-item {
        margin: 0;
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
