<template>
  <div id="user-selling">
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
<!--            <h4>{{userInfo.userNo}}</h4>-->
          </template>
      </el-table-column>
      <el-table-column
        v-for="item in tableList"
        :key="item.label"
        :label="item.label"
        :width="item.width"
        :prop="item.prop">
      </el-table-column>
      <el-table-column label="Operation" width="100px">
        <template>
          <el-button
            type="danger"
            icon="el-icon-delete"
            size="mini"
          ></el-button>
        </template>
      </el-table-column>

    </el-table>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import {queryCommodities} from "@/api/trade";
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
        sellerNo:'639f5cfc9b174235822e0ad87997a0f2'
      },
      SellingData: [],
    }
  },
  methods:{
    queryMyCommodity(){
      queryCommodities(this.queryInfo).then(res =>{
        console.log(res)
        this.SellingData=res.body.records
      })
    }
  },computed: {
    ...mapGetters(['userInfo'])
  }
}
</script>

<style scoped lang="less">
#user-selling {

}
</style>
