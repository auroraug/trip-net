<template>
    <el-card class="box-card">
        <h3 style="text-align: center; margin-bottom: 10px;">待审核</h3>
      <el-table ref="multipleTable" :data="tableData" tooltip-effect="dark" style="width: 100%"
        @selection-change="handleSelectionChange">
        <el-table-column type="selection" width="55">
        </el-table-column>
        <el-table-column 
              prop="userName"
              label="用户名"
              width="150">
        </el-table-column>
        <el-table-column 
              prop="pass"
              label="密码"
              width="120" type="hidden">
        </el-table-column>
        <el-table-column 
              prop="identity"
              label="身份"
              width="120" type="hidden">
        </el-table-column>
        <el-table-column
            label="申请时间"
            prop="date"
            show-overflow-tooltip>
            <!-- 宽度overflow: show-overflow-tooltip -->
            <!-- <template slot-scope="scope">{{ scope.row.date }}</template> -->
        </el-table-column>
    </el-table>
  <div style="margin-top: 40px">
    <el-button @click="toggleSelection()">取消选择</el-button>
    <el-button type="success" @click="pass">通过</el-button>
    <el-button type="danger" @click="reject">驳回</el-button>
  </div>
    </el-card>
    
</template>
<script>
import { getData } from '../api'
  export default {
    data() {
      return {
        tableLabel: 
        {
            userName: 'userName',
            date: 'date'
        },
        tableData: [
        {
          userName: '王小虎',
          date: '2016-05-04',
        }, 
        {
          userName: '王小虎',
          date: '2016-05-03',
        },
        {
          userName: '王小虎',
          date: '2016-05-02',
        },
        {
          userName: '王小虎',
          date: '2016-05-01',
        },
        ],
        multipleSelection: []
      }
    },

    methods: {
      pass() {
        console.log(this.multipleSelection)
        
        this.axios.post(' http://localhost:8085/gm/pass ',this.multipleSelection).then((resp) => {
                let data = resp.data;
                // console.log(data)
                if (data.code === '1') {

                  this.$notify({
                  title: '审核成功',
                  message: '您已通过该申请',
                  position: 'top-left',
                  type: 'success'
                
                });
                getData().then((data) => {
                const tableData = data.data
                this.tableData = tableData
                console.log(tableData)
            })

                }
                if (data.code === '-1'){

                  this.$notify.error({
                  title: '失败',
                  message: '该用户名已存在',
                  position: 'top-left',
                });

                }
            })
      },
      reject() {
        this.axios.post(' http://localhost:8085/gm/reject ',this.multipleSelection).then((resp) => {
                let data = resp.data;
                // console.log(data)
                if (data.code === '1') {

                  this.$notify({
                  title: '驳回成功',
                  message: '您已拒绝该申请',
                  position: 'top-left',
                  type: 'success'
                
                });
                getData().then((data) => {
                const tableData = data.data
                this.tableData = tableData
                console.log(tableData)
                })
                }
            })
      },
      toggleSelection(rows) {
        if (rows) {
          rows.forEach(row => {
            this.$refs.multipleTable.toggleRowSelection(row);
          });
        } else {
          this.$refs.multipleTable.clearSelection();
        }
      },
      handleSelectionChange(val) {
        this.multipleSelection = val;
      }
    },
    mounted() {
        getData().then((data) => {
            const tableData = data.data
            this.tableData = tableData
            console.log(tableData)
        })
    }
  }
</script>
<style lang="less" scoped>
.box-card {
    min-height: 700px;
}

</style>