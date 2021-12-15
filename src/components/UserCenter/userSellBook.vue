<template>
  <div id="user-selling">
    <el-dialog
      title="Edit book Info"
      :visible.sync="dialogVisible"
      width="60%">
      <el-form :rules="rules">
        <el-form-item label="bookName"  prop="bookName">
          <el-input v-model="editBook.bookName"></el-input>
        </el-form-item>
        <el-form-item label="bookPrice" prop="bookPrice">
          <el-input v-model.number="editBook.bookPrice"></el-input>
        </el-form-item>
        <el-form-item  label="bookStock" prop="bookStock">
          <el-input v-model.number="editBook.bookStock"></el-input>
        </el-form-item>
        <el-form-item label="bookTag" prop="bookTag">
          <el-select v-model="editBook.bookTag" placeholder=" ">
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
          <el-input v-model.number="editBook.newOldDegree"></el-input>
        </el-form-item>
        <el-form-item label="bookDesc" prop="bookDesc">
          <el-input type="textarea" v-model="editBook.bookDesc"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">Cancel</el-button>
        <el-button type="primary" @click="editBookOnShelve()">Apply</el-button>
      </span>
    </el-dialog>


    <el-table
      style="margin-top: 10px"
      load="loading"
      :data="SellingData">

      <el-table-column label="Picture" width="100px">
          <template slot-scope="scope">
            <el-image
              style="width: 80px; height: 100px"
              :src="scope.row.picUrlBackList[0]"
              :fit="fit"></el-image>
          </template>
      </el-table-column>
      <el-table-column
        v-for="item in tableList"
        :key="item.label"
        :label="item.label"
        :width="item.width"
        :prop="item.prop">
      </el-table-column>
      <el-table-column label="Operation" width="120px">
        <template slot-scope="scope">
          <!-- 编辑按钮 -->
          <el-button
            type="warning"
            icon="el-icon-setting"
            size="mini"
            @click="change(scope.row)"
          ></el-button>
          <!-- 删除按钮 -->
          <el-button
            type="danger"
            icon="el-icon-delete"
            size="mini"
            @click="de(scope.row.bookNo)"
          ></el-button>
        </template>
      </el-table-column>

    </el-table>
  </div>
</template>

<script>
import {mapGetters,mapState} from 'vuex'
import {queryCommodities,bookOffShelve,editBookOnShelve} from "@/api/trade";
export default {
  name: "userSellBook",
  mounted() {
    this.queryMyCommodity()
  },
  data() {
    return {
      tableList: [
        // {
        //   label: 'Picture',
        //   prop: '',
        //   width: ''
        // },
        {
          label: 'Name',
          prop: 'bookName',
          width: ''
        }, {
          label: 'Tag',
          prop: 'bookTag',
          width: ''
        }, {
          label: 'Price',
          prop: 'truePrice',
          width: ''
        }, {
          label: 'Remain',
          prop: 'bookStock',
          width: ''
        },{
          label: 'NewOldDegree',
          prop: 'newOldDegree',
          width: ''
        },
      ],
      queryInfo:{
        sellerNo:'',
        onShelvedStatus:0
      },
      deleteBookInfo:{
        bookNo:'',
        userRole:0,
      },
      SellingData: [],
      dialogVisible: false,
      editBook:{
        bookDesc:'',
        bookName:'',
        bookNo:'',
        bookPrice:'',
        bookStock:'',
        bookTag:'',
        newOldDegree:'',
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
    }
  },
  methods:{
    queryMyCommodity(){
      this.queryInfo.sellerNo=this.userInfo.userNo
      queryCommodities(this.queryInfo).then(res =>{
        console.log(res)
        this.SellingData=res.body.records
      })
    },
    de(bookNo){
      this.deleteBookInfo.bookNo=bookNo
      bookOffShelve(this.deleteBookInfo).then(res =>{
        console.log(res)
        this.queryMyCommodity();
      })
    },
    change(res){
      this.dialogVisible=true
      this.editBook=res
    },
    editBookOnShelve(){
      editBookOnShelve(this.editBook).then(res =>{
        this.dialogVisible=false
        console.log(res)
      })
    }
  },computed: {
    ...mapGetters(['userInfo']),
    ...mapState(['userInfo']),
  }
}
</script>

<style scoped lang="less">
#user-selling {

}
</style>
