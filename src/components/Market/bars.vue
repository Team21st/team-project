<template>
  <!--  顶栏设计-->
  <div id="bars">
    <a v-for="(item,index) in linkList"
       @click="pathTo(item.path)"
       href="#"
       :key="index">
      {{ item.label }}
    </a>
    <div class="header-right">
      <el-avatar :size="40" style="display: block;margin-top: 5px" :src="userInfo.profileUrl">
        User
      </el-avatar>
      <a href="#" @click="pathTo('/login')" style="line-height: 50px;display: block"
         v-if="userName==null||userName===''">Login/Register</a>
      <el-dropdown class="user-name" trigger="click" @command="handleCommand" v-else>
          <span class="el-dropdown-link">
            {{ userName }}
            <i class="el-icon-caret-bottom"></i>
          </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item divided command="logout">Log Out</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex/dist/vuex.mjs";

export default {
  name: "bars",
  data() {
    return {
      linkList: [
        {
          label: 'Home',
          path: '/'
        },
        {
          label: 'Authentication',
          path: '/authentication'
        },
        {
          label: 'Cart',
          path: '/cart'
        },
        {
          label: 'Search',
          path: '/search'
        }
      ]
    }
  },
  mounted() {
    this.getUser()
  },
  methods: {
    ...mapActions(['getUserInfo', 'Logout']),
    pathTo(path) {
      this.$router.push(path)
    },
    // 下拉菜单选择
    handleCommand(commond) {
      if (commond === "logout") {
        this.Logout().then(() => {
          this.$message.error('Log Out')
        })
        this.$router.push("/login");
      }
    },
    getUser() {
      this.getUserInfo()
    }
  },
  computed: {
    ...mapGetters(['userInfo', 'userName'])
  }
}
</script>

<style scoped lang="less">
#bars {
  height: 50px;
  background-color: #733200;

  a {
    margin-left: 20px;
    color: white;
    text-decoration: none;
    line-height: 50px;
  }

  .header-right {
    line-height: 50px;
    float: right;
    margin: 0 20px;
    display: flex;

    a:hover {
      text-decoration: 1px white;
    }

    .el-dropdown-link {
      color: white;
      margin-left: 5px;
    }
  }
}
</style>
