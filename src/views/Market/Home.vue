<template>
  <div id="home">
    <div class="banner">
      <div class="top-bar">
        <div class="left-block">
          <el-image
            style="height: 200px;left: 100px;margin-top: 80px"
            :src="require('../../assets/images/h1.png')">
          </el-image>
          <el-image
            style="height: 100px;left: 100px;top:50px"
            :src="require('../../assets/images/h2.png')">
          </el-image>
        </div>
        <div class="right-block">
        </div>
        <el-image
          style="position: absolute;width: 500px;left: 700px;top: 60px"
          :src="require('../../assets/people.png')">
        </el-image>
      </div>
    </div>
    <el-row>
      <el-carousel indicator-position="outside" class="center">
        <el-carousel-item v-for="item in 4" :key="item">
          <h3>{{ item }}</h3>
        </el-carousel-item>
      </el-carousel>
    </el-row>
    <el-row>
      <div class="center list-project">
        <div class="list-head">
          <h2>HOT BOOKS</h2>
          <el-button type="text">more >>></el-button>
        </div>
        <div style="display: flex;justify-content: space-around;flex-wrap: wrap">
          <div v-for="(item,index) in 6"
               :key="index"
               class="project">
            <el-image
              style="height: 110px"
              :src="item.imgUrl">
            </el-image>
            <h3></h3>
            <p>$1</p>
          </div>
        </div>
      </div>
    </el-row>
    <el-row>
      <div class="center list-project">
        <div class="list-head">
          <h2>HOT BOOKS</h2>
          <el-button type="text">more >>></el-button>
        </div>
        <div style="display: flex;justify-content: space-around;flex-wrap: wrap">
          <div v-for="(item,index) in 6"
               :key="index"
               class="project">
            <el-image
              style="height: 110px"
              :src="item.imgUrl">
            </el-image>
            <h3></h3>
            <p>$1</p>
          </div>
        </div>
      </div>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      bookList: [
        {
          imgUrl: '',
          bookName: '',
          intro: '',
          linkList: []
        }
      ],
      userList: [],
    }
  },
  components: {}
}
</script>

<style scoped lang="less">
#home {
  min-height: 100vh;
  background-color: #f2efe8;

  .banner {
    position: relative;
    height: 768px;

    .top-bar {
      height: 600px;
      background-color: white;
      display: flex;
      position: relative;

      .left-block {
        background-color: white;
        width: 60%;
      }

      .right-block {
        background-color: #f0ede6;
        width: 40%;
      }
    }
  }
}

.list-project {
  background-color: white;
  flex-wrap: wrap;
  margin-top: 20px;
  margin-bottom: 20px;
  padding: 15px;

  .list-head {
    display: flex;
    justify-content: space-between;
    padding: 0 20px;
    border-bottom: 1px black solid;
  }

  a {
    text-decoration: none;

  }

  .project {
    height: 150px;
    flex: 1 1 auto;
    text-align: center;
    cursor: none;
    padding: 10px;
  }
}
</style>
