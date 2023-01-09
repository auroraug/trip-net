<template>
    <div>
    <el-button type="info" style="float: left;" @click="backGonglue">返回</el-button>    
    <h2 style="margin-top: 60px;text-align: center;">攻略</h2>
        <div class="top"></div>
        <div class="gonglue_body">
            <div >
                <p class="detail-title">{{ tableD.title }}</p>
                <p class="detail-date">{{ tableD.creatDate }}</p>
                <p class="content">{{ tableD.content }}
                </p>
            </div>
        </div>
    </div>
</template>
<script>
// import { getArticleByTitle } from '../../api'


export default {
    data() {
        return {
            tableD: [
                {
                    userName: '',
                    title: '',
                    content: '',
                    creatDate: '',
                    url: '',
                },
            ],
            username: ''
        }
    },
    methods: {
        backGonglue() {
            this.$router.push({path: '/gonglue'})
        }
    },
    mounted() {
        
        var t= this.$route.query.id
        this.axios.post(' http://localhost:8085/gm/getArticle ',t).then((resp) => {
            let data = resp.data;
            this.tableD = data.data
            // console.log(data.data)
            console.log(this.tableD.title)
        })

    },
    // computed() {

    // }
}
</script>
<style lang="less" scoped>
.body {
    width: 1200px;
    margin: 0 auto;
    padding: 0;
}
.top {
    width: 100%;
    height: 50px;
    background: linear-gradient(90deg,#0076f5 19%,#00a7fa 58%,#5eccee 100%);
}
.detail-tag {
    background: url(https://picbed.qunarzz.com/94f80fe….png) no-repeat;
    background-size: 100% 100%;
    width: 2.293333rem;
    height: 0.666667rem;
    padding-left: 0.266667rem;
    margin-bottom: 0.266667rem
rem
;
    line-height: .666667rem;
    color: #fff;
    font-size: .32rem;
}
.gonglue_body {
    width: 1000px;
    min-height: 800px;
    margin-top: 10px;
    margin-left: 470px;
    margin-right: 0.266667rem;
    margin-bottom: 0.266667rem;
    // border: 0.026667rem solid #303133;
    padding: 0.533333rem;
}
.detail-title {
    text-align: center;
    margin-top: 8px;
    font-size: 25px;
    margin-bottom: 0.213333rem;
    padding-left: 10px;
}
.detail-date {
    text-align: center;
    margin-top: 10px;
    font-size: 15px;
    color: #999;
    margin-bottom: 0.426667rem;
    padding-left: 10px;
}
.content {
    padding: 50px;
    font-size: 20px;
    line-height: 35px;
}
</style>