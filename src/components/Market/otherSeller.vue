<template>
  <div id="sellers">
    <el-card style="margin-top: 10px" v-for="item in otherSeller" :key="item.sellerName">
      <div slot="header" style="display: flex;justify-content: space-between">
        <div style="display: flex">
          <el-avatar :size="40" style="margin: 0;padding: 0">User</el-avatar>
          <div style="line-height: 40px;margin: 0 10px">User Name</div>
        </div>
        <el-button style="float: right;margin: 0;" size="mini" icon="el-icon-d-arrow-right" @click="goTo"
                   type="primary">Purchase
        </el-button>
      </div>
      <div>
        书本信息
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  name: "otherSeller",
  props: ['otherSeller'],
  data() {
    return {}
  },
  methods: {
    goTo() {
      this.$router.push('/')
    }
  }
}
</script>

<style scoped lang="less">
#sellers {

}
</style>
