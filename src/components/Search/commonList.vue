<template>
  <div id="commonList">
    <div style="text-align: left;padding: 10px"
         v-for="item in commodityList"
         :key="item">
      <div style="display: flex">
        <el-avatar
          style="margin: 10px"
          :size="60"
          :src="item.sellerPic?item.sellerPic:'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png'"
          @error="true">
        </el-avatar>
        <h2 style="line-height: 80px">{{ item.sellerName }}</h2>
      </div>
      <div style="display: flex">
        <el-image
          @click="toCommodity(item.bookNo)"
          :src="item.picUrlBackList[0]"
          style="width: 200px;height: 200px;margin: 10px;cursor: pointer">
        </el-image>
        <div style="margin: 20px;position: relative">
          <div>
            <h2 style="cursor: pointer"
                @click="toCommodity(item.bookNo)">
              {{ item.bookName }}
            </h2>
            <h3>Introduction:{{ item.bookDesc }}</h3>
          </div>
          <div style="position: absolute;bottom: 10px">
            <h3>Assess:{{ item.newOldDegree }}%</h3>
            <h3>Price:{{ item.truePrice }}</h3>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "commonList",
  props: {
    commodityList: Array
  },
  data() {
    return {
      commList: []
    }
  },
  methods: {
    toCommodity(id) {
      this.$router.push({
        path: '/commodity',
        query: {
          id: id
        }
      })
    }
  }
}
</script>

<style scoped lang="less">
#commonList {
  width: 1000px;
  background-color: white;
  margin: 0 auto;
}
</style>
