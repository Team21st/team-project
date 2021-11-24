<template>
  <div id="release-book">
    <h2>Release Book</h2>
      <el-form label-width="80px" :model="releaseList">
        <el-form-item label="bookName">
          <el-input v-model="releaseList.bookName"></el-input>
        </el-form-item>
        <el-form-item label="bookPrice">
          <el-input v-model="releaseList.bookPrice"></el-input>
        </el-form-item>
        <el-form-item label="bookStock">
          <el-input v-model="releaseList.bookStock"></el-input>
        </el-form-item>
        <el-form-item label="bookTag">
          <el-input v-model="releaseList.bookTag"></el-input>
        </el-form-item>
        <el-form-item label="newOldDegree">
          <el-input v-model="releaseList.newOldDegree"></el-input>
        </el-form-item>
        <el-form-item label="bookDesc">
          <el-input v-model="releaseList.bookDesc"></el-input>
        </el-form-item>
      </el-form>
    <el-button type="primary" @click="bookOnShelve">Release</el-button>
  </div>
</template>

<script>
import {bookOnShelve} from "@/api/trade";
export default {
  name: "userComm",
  data() {
    return {
      releaseList:{
        bookName:'',
        bookPrice:'',
        bookStock:'',
        bookTag:'',
        newOldDegree:'',
        bookDesc:'',
      },
    }
  },
  methods:{
    bookOnShelve(){
      bookOnShelve().then(res =>{
        console.log(res)
      })
    }
  }
}
</script>

<style scoped lang="less">
#release-book{
  width: 600px;
  margin: auto;
  text-align: center;
  h2{
    margin-bottom: 20px;
  }
  .el-form-item{

  }
}
</style>
