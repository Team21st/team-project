<template>
  <div id="release-book">
    <h2>Release Book</h2>
      <el-form label-width="120px" :model="releaseList" :rules="rules" size="large">
        <el-upload
          class="avatar-uploader"
          action=""
          :auto-upload="false"
          :on-change="uploadImg"
          :show-file-list="false">
          <img v-if="imgUrl" :src="imgUrl" class="avatar">
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
        <el-form-item label="bookName"  prop="bookName">
          <el-input v-model="releaseList.bookName"></el-input>
        </el-form-item>
        <el-form-item label="bookPrice" prop="bookPrice">
          <el-input v-model.number="releaseList.bookPrice"></el-input>
        </el-form-item>
        <el-form-item  label="bookStock" prop="bookStock">
          <el-input v-model.number="releaseList.bookStock"></el-input>
        </el-form-item>
        <el-form-item label="bookTag" prop="bookTag">
          <el-select v-model="releaseList.bookTag" placeholder=" ">
            <el-option label="literature" value="0"></el-option>
            <el-option label="essay" value="1"></el-option>
            <el-option label="history" value="2"></el-option>
            <el-option label="science fiction" value="3"></el-option>
            <el-option label="fantasy" value="4"></el-option>
            <el-option label="suspense" value="5"></el-option>
            <el-option label="reasoning" value="6"></el-option>
            <el-option label="philosophy" value="7"></el-option>
            <el-option label="tools" value="8"></el-option>
            <el-option label="professional knowledge" value="9"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="newOldDegree" prop="newOldDegree">
          <el-input v-model.number="releaseList.newOldDegree"></el-input>
        </el-form-item>
        <el-form-item label="bookDesc" prop="bookDesc">
          <el-input type="textarea" v-model="releaseList.bookDesc"></el-input>
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
        file:[],
      },
      rules:{
        bookName:[
          { required: true, message: 'Please input a book name', trigger: 'blur'},
        ],
        bookPrice:[
          { required: true, message: 'Please input a book price', trigger: 'blur'},
          {type: 'number', message: 'Please input a number',trigger: 'blur',}
        ],
        bookStock:[
          { required: true, message: 'Please input a book stock', trigger: 'blur'},
          {type: 'number', message: 'Please input a number',trigger: 'blur',}
        ],
        bookTag:[
          { required: true, message: 'Please input a book price', trigger: 'blur'},
        ],
        newOldDegree:[
          {required: true, message: 'Please input new old degree', trigger: 'blur'},
          {type: 'number', message: 'Please input a number between 0-100',trigger: 'blur',}
        ],
        bookDesc:[
          { required: true, message: 'Please input a book description', trigger: 'blur'},
        ],
      },
      imgUrl:''
    }
  },
  methods:{
    bookOnShelve(){
      bookOnShelve(this.releaseList).then(res =>{
        console.log(res)
        this.$message.success("successfully released")
      })
    },
    uploadImg(file) {
      let img = new FormData()
      console.log(file)
      img.append('file', file.raw)
      this.releaseList.file.push(img)
    }
  }
}
</script>

<style scoped lang="less">
#release-book{
  //width: 600px;
  margin: auto;
  text-align: center;
  h2{
    margin-bottom: 20px;
  }
  .el-select{
    width: 100%;
  }
}
</style>
