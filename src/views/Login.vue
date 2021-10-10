<template>
  <!--  注册与登入同页面-->
  <div id="login">
    <div class="submit">
      <div class="submit-info" v-if="isLogin">
        <h1>Log in</h1>
        <el-form>
          <el-form-item>
            <el-input placeholder="Input your email"></el-input>
          </el-form-item>
          <el-form-item>
            <el-input placeholder="Input your password"></el-input>
          </el-form-item>
        </el-form>
        <div style="text-align: right;margin-top: 30px">
          <a href="#">forget password</a>
        </div>
        <el-button style="width: 100%;margin-top: 10px">
          Sign up
        </el-button>
      </div>
      <div class="submit-info">
        <h1>Sign up</h1>
        <el-form>
          <el-form-item label="Email Address">
            <el-input placeholder="Input your email"></el-input>
          </el-form-item>
          <el-form-item label="Name">
            <el-input placeholder="Input your password"></el-input>
          </el-form-item>
          <el-form-item label="Password">
            <el-input placeholder="Input your password"></el-input>
          </el-form-item>
        </el-form>
        <div style="text-align: right;margin-top: 30px">
          <a href="#">forget password</a>
        </div>
        <el-button style="width: 100%;margin-top: 10px">
          Sign up
        </el-button>
      </div>
    </div>
    <div class="img">
      <div style="margin: auto">
        <el-image
          style="width: 400px;left: 200px;top: 50vh"
          :src="require('../assets/图书义卖.png')" alt="">
        </el-image>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      isLogin: false,
      loginForm: {},
      registerForm: {},
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
    background-color: #f2efe8;
  }
}
</style>
