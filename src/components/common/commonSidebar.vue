<template>
  <div class="sidebar">
    <el-menu
        :default-active="onRoute"
        class="sidebar-el-menu"
        :collapse="collapse"
        background-color="#fff"
        text-color="#333"
        active-text-color="#6190e8"
        router
        unique-opened
    >
      <template v-for="item in items">
        <template v-if="item.subs">
          <el-submenu :index="item.index" :key="item.index">
            <template slot="title">
              <!-- 预留字体图标 -->
              <i :class="item.icon"></i>
              <span slot="title" class="title">{{ item.title }}</span>
            </template>
            <template v-for="subItem in item.subs">
              <el-submenu
                  v-if="subItem.subs"
                  :index="subItem.index"
                  :key="subItem.index"
                  class="title"
              >
                <template slot="title" class="title">{{ subItem.title }}</template>
                <el-menu-item
                    v-for="(threeItem,i) in subItem.subs"
                    :key="i"
                    :index="threeItem.index"
                    class="title"
                >{{ threeItem.title }}
                </el-menu-item>
              </el-submenu>
              <el-menu-item
                  v-else
                  :index="subItem.index"
                  :key="subItem.index"
                  class="title"
              >{{ subItem.title }}
              </el-menu-item>
            </template>
          </el-submenu>
        </template>
        <template v-else>
          <el-menu-item :index="item.index" :key="item.index" class="title">
            <!-- 预留字体图标 -->
            <i :class="item.icon"></i>
            <span slot="title" class="title">{{ item.title }}</span>
          </el-menu-item>
        </template>
      </template>
    </el-menu>
  </div>
</template>

<script>
import bus from "../../service/bus";

export default {
  name: "commonSidebar",
  data() {
    return {
      collapse: false,
      // 超管视角
      items: [
        {
          icon: "el-icon-location-outline",
          index: "dashboard",
          title: "系统首页"
        },
        {
          icon: "el-icon-user",
          index: "accounts",
          title: "账号管理"
        },
        {
          icon: "el-icon-shopping-cart-full",
          index: "commAdmin",
          title: "商品管理",
        },
        {
          icon: "el-icon-edit-outline",
          index: "comment",
          title: "被举报评论",
        },
        {
          icon: "el-icon-tickets",
          index: "identify",
          title: "认证审核",
        },
        {
          icon: "el-icon-bank-card",
          index: "money",
          title: "提现审核",
        },
      ],
      userBean: ''
    }
  },
  created() {
    // 控制折叠面板
    bus.$on("collapse", (msg) => {
      this.collapse = msg;
      bus.$emit("collapse-content", msg);
    });
  },
  mounted() {
    this.user = this.$store.state.user
    this.$nextTick(function () {
      this.initList()
    })
  },
  methods: {},
  computed: {
    // 路由配置
    onRoute() {
      return this.$route.path.replace("/", "");
    },
  },
};
</script>

<style>
.sidebar {
  display: block;
  position: absolute;
  left: 0;
  top: 70px;
  bottom: 0;
  overflow-y: scroll;
}

.sidebar::-webkit-scrollbar {
  width: 0;
}

.sidebar-el-menu:not(.el-menu--collapse) {
  width: 250px;
}

.sidebar > ul {
  height: 100%;
}

.title {
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.el-menu-item {
  border-left: #fff solid 6px;
}

/* 设置鼠标悬停时el-menu-item的样式 */
.el-menu-item:hover {
  border-left: #409EFF solid 6px !important;
  background-color: #e2eff9 !important;
  color: #409EFF !important;
}

.el-menu-item:hover i {
  color: #409EFF;
}

/* 设置选中el-menu-item时的样式 */
.el-menu-item.is-active {
  border-left: #409EFF solid 6px !important;
  background-color: #e2eff9 !important;
  color: #409EFF !important;
}
</style>
