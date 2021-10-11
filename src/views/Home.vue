<template>
  <div id="home">
    <div class="banner">
      <div class="top-bar">
        <div>
          <el-image>

          </el-image>
          <div class="link-list">
            <a>sss</a>
          </div>
        </div>
        <el-input
          style="width: 200px;position: absolute;right: 20px"
          suffix-icon="el-icon-date"
          prefix-icon="el-icon-search"
        ></el-input>
      </div>
      <div class="left-block">

      </div>
      <div class="right-block">

      </div>
      <img src="" alt="">
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
        <div>
          <h2>Book List</h2>
          <a href="#">more</a>
        </div>
        <div>
          <div v-for="(item,index) in bookList"
               :key="index"
               class="project">
            <el-image :src="item.imgUrl"></el-image>
            <h3></h3>
            <p>$1</p>
          </div>
        </div>
      </div>
    </el-row>
    <el-row>
      <div class="center list-project">
        <div>
          <h2>User List</h2>
          <a href="#">more</a>
        </div>
        <div>
          <div v-for="(item,index) in bookList"
               :key="index"
               class="project">
            <el-image :src="item.imgUrl"></el-image>
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
          linkList:[]
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
      position: absolute;
    }
    .left-block {
      background-color: white;
      width: 60%;
    }

    .right-block {
      width: 40%;

    }
  }
}

.center {
  width: 1078px;
  margin: auto;
}

.list-project {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  a {
    text-decoration: none;

  }

  .project {
    cursor: none;
  }
}
</style>
