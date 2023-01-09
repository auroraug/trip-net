<template>
    <el-card shadow="hover">
        <el-table
            ref="multipleTable"
            :data="articalD"
            tooltip-effect="dark"
            style="width: 100%"
            @selection-change="handleSelectionChange">
            <el-table-column
            type="selection"
            width="55">
            </el-table-column>
            <el-table-column
                prop="creatDate"
                label="日期"
                width="200">
            </el-table-column>
            <el-table-column
                prop="title"
                label="标题"
                show-overflow-tooltip >
            </el-table-column>
        </el-table>
        <div style="margin-top: 20px">
            <el-button @click="toggleSelection()">取消选择</el-button>
            <el-button type="danger" @click="del()">删除</el-button>
            <el-button type="info" @click="goPublish()">去发布</el-button>
        </div>
    </el-card>
</template>
<script>
import { getArticleList } from '../api'
export default {
    data() {
        return {
            articalD: [
                {
                    title: '新加坡旅游局联合小米互联网业务部签署品牌联合营销三年合作备忘录',
                    date: '2022-12-12 14:28:12',
                },
                {
                    title: '在阿拉伯发现自己的新面貌： 沙特和莱昂内尔·梅西发起全球宣传活动',
                    date: '2022-12-09 16:16:18',
                },
                {
                    title: ' 原创越剧大戏《抓阄尽孝》在伶工学社上演 ',
                    date: '2022-12-02 00:00:00',
                },
                {
                    title: ' “绿水青山 旅居安吉”安吉文旅联合去哪儿发百万消费券，提振文旅产业复苏 ',
                    date: '2022-12-01 00:00:00',
                },
                {
                    title: ' 博观约取——南通书法国画研究院书画系列展王汇涛、张凯作品展在南通博物苑举办 ',
                    date: '2022-12-01 00:00:00',
                },
            ],
        }
    },
    methods: {
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
      },
      goPublish() {
        this.$router.push('upload')
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