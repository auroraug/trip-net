<template>
    <div class="zixun_div">
        <el-table
            :data="articalD"
            stripe
            style="width: 100%" 
            @row-click="handleChoice">
            <el-table-column
            prop="creatDate"
            label="日期"
            width="180">
            </el-table-column>
            <el-table-column
            prop=""
            label=""
            width="180">
            </el-table-column>
            <el-table-column
            prop="title"
            label="标题">
            </el-table-column>
        </el-table>
    </div>
</template>
<script>
import { getArticleList } from '../../api'

export default {
    data() {
        return {
            articalD: [
            {
                creatDate: '2016-05-02',
                title: '上海市普陀区金沙江路 1518 弄'
            }, 
            {
                creatDate: '2016-05-02',
                title: '上海市普陀区金沙江路 1518 弄'
            }, 
            {
                creatDate: '2016-05-02',
                title: '上海市普陀区金沙江路 1518 弄'
            }, 
            
        ]
        }
    },
    
    methods: {
        handleChoice(row) {
            // this.title = row
            // console.log(row.title)
            this.$router.push({path: '/read',query: {id :row.title}})

        },
    },
    mounted() {
        getArticleList().then((data) => {
            const articalD = data.data
            this.articalD = articalD
            console.log(articalD)
        })
    }
}
</script>
<style lang="less" scoped>
.zixun_div {
    margin-top: 20px;
    margin-left: 40px;
    min-height: 500px;
}
</style>