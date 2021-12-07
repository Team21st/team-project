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
      <el-carousel indicator-position="outside" class="center" height="400px">
        <el-carousel-item>
          <el-image
            style="position: absolute;height: 100%"
            :src="require('../../assets/images/carousel1.png')">
          </el-image>
        </el-carousel-item>
        <el-carousel-item>
          <el-image
            style="position: absolute;height: 100%"
            :src="require('../../assets/images/carousel2.png')">
          </el-image>
        </el-carousel-item>
        <el-carousel-item>
          <el-image
            style="position: absolute;height: 100%"
            :src="require('../../assets/images/carousel3.png')">
          </el-image>
        </el-carousel-item>
        <el-carousel-item>
          <el-image
            style="position: absolute;height: 100%"
            :src="require('../../assets/images/carousel4.png')">
          </el-image>
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
          <div v-for="(item,index) in bookList.slice(0,5)"
               :key="index"
               class="project">
            <el-image
              style="height: 110px;width: 80px"
              @click="toCommodity(item.bookNo)"
              :src="item.bookPicUrl">
            </el-image>
            <p @click="toCommodity(item.bookNo)">{{item.bookName}}</p>
          </div>
        </div>
      </div>
    </el-row>
    <el-row>
      <div class="center list-project">
        <div class="list-head">
          <h2>HOT SELLERS</h2>
          <el-button type="text">more >>></el-button>
        </div>
        <div style="display: flex;justify-content: space-around;flex-wrap: wrap">
          <div v-for="(item,index) in userList.slice(0,5)"
               :key="index"
               class="project">
            <el-image
              style="height: 110px;width: 80px"
              :src="item.profileUrl">
            </el-image>
            <p>{{item.userName}}</p>
          </div>
        </div>
      </div>
    </el-row>
  </div>
</template>

<script>
import {queryCommodities,queryBusiness} from "@/api/trade";

export default {
  name: 'Home',
  data() {
    return {
      bookList:[],
      showBookForm:{
        imgUrl: '',
        bookName: '',
      },
      userList: [],
      showUserForm:{
        imgUrl: '',
        userName: '',
      }
    }
  },
  components: {},
  mounted() {
    this.showCommodities()
    this.showSells()
  },
  methods:{
    showCommodities() {
      queryCommodities(this.showBookForm).then(res => {
        console.log(res)
        this.bookList = res.body.records
      })
    },
    showSells(){
      queryBusiness(this.showUserForm).then(res =>{
        console.log(res)
        this.userList = res.body.records
      })
    },
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
  .el-carousel{
    width: 1000px;
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
    cursor: pointer;
    padding: 10px;
  }
}
</style>
