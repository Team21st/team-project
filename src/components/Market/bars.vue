<template>
  <!--  顶栏设计-->
  <div id="bars">
    <a v-for="(item,index) in linkList"
       @click="pathTo(item.path)"
       href="#"
       :key="index">
      {{ item.label }}
    </a>
    <el-avatar size="40">

    </el-avatar>
  </div>
</template>

<script>
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
  methods: {
    pathTo(path) {
      this.$router.push(path)
    }
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
}
</style>
