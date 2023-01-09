<template>
    <div>
        <el-button type="info" style="float: left;" @click="backLuxian">返回</el-button>
        <div><h2 style="margin-top: 60px;text-align: center;">评价</h2></div>    
            <div class="top"></div>
            <div style="width: 550px;height:650px; margin-top: 20px;margin-left: 400px;position: absolute;border: 1px solid #999;">
            <img :src="`${LineInfo.url}`" style="width: 520px;padding: 15px;color:#999" alt="">
            <p style="padding: 10px;">{{ LineInfo.describ }}</p>
            <el-form :model="Form" ref="numberValidateForm" label-width="100px" class="demo-ruleForm" style="">
            <el-form-item
                label="评价"
                prop="evaluate"
                style="margin-left: 40px;">
                <el-rate
                v-model="Form.value"
                :colors="colors"
                show-text
                style="margin-top: 10px;">
            </el-rate>
            </el-form-item>
            <el-form-item>
                <el-input
                    type="textarea"
                    :autosize="{ minRows: 2, maxRows: 4}"
                    placeholder="请输入内容"
                    v-model="Form.content"
                    style="width: 300px">
                </el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submitForm">提交</el-button>
                <el-button @click="resetForm">重置</el-button>
                <el-button type="danger" @click="resetForm">举报</el-button>
            </el-form-item>
            </el-form>
        </div>
            <div class="zixun_body" :style="{display: tableData===undefined?'block':'none'}">
                <el-empty :image-size="100" ></el-empty>
            </div>
            <div class="main" :style="{display: tableData===undefined?'none':'block'}">
                <div class="table" >
                    <span class="span1" >用户名</span>
                    <span class="span2" >评价</span>
                    <ul v-for="item in tableData" :key="item.userName">
                    <li style="float: left;margin-right: 50px;list-style: none;">{{ item.userName }}</li>
                    <li style="list-style: none">
                        <el-rate
                            v-model="item.value"
                            disabled
                            :colors="colors"
                            show-text
                            style="margin-bottom: 10px;">
                        </el-rate>
                    </li>
                    <p style="margin-bottom: 50px;font-size: 12px;">{{ item.content }}</p>
                    </ul>
                </div>
            </div>
    </div>
</template>
<script>
// import { getArticleByTitle } from '../../api'


export default {
    data() {
        return {
            tableData: [
            ],
            Form: {
                id: null,
                userName: '',
                content: '',
                value: null
            },
            LineInfo: {
                url: 'https://dimg04.c-ctrip.com/images/0303n120009kndp1bA27B_C_210_118_Q100.jpg',
                describ: '银川+中卫5日4晚私家团·【特别推荐】【儿童免费赠送早餐 】宁蒙两省连游 五湖穿越 腾格里-无人之境内的“地球之心”乌兰湖   享 水洞沟+西部影城+西夏陵+66号公路+沙坡头+岩画 全程住银川酒店'
            },
            username: '',
            colors: ['#99A9BF', '#F7BA2A', '#FF9900']  // 等同于 { 2: '#99A9BF', 4: { value: '#F7BA2A', excluded: true }, 5: '#FF9900' }

        }
    },
    methods: {
        backLuxian() {
            this.$router.push({path: '/luxian'})
        },
        submitForm() {
            const user = this.$store.state.userinfo.user
            // console.log(user.userName)
            if (user != null) {
                if (this.Form.value != '') {
                    this.Form.id = this.$route.query.id
                    this.Form.userName = user.userName
                    // console.log(this.Form) 
                    this.axios.post('http://localhost:8085/gm/submitEvaluate',this.Form).then((resp) => {
                        let data = resp.data
                        if (data.code === '0') {
                            this.$message({
                            message: '评价成功',
                            type: 'success'
                            });
                            this.axios.post(' http://localhost:8085/gm/getEvaluate ',this.$route.query.id).then((resp) => {
                            let data = resp.data;
                            this.tableData = data
                            // console.log(data.data)
                            // console.log(this.tableData)
                        })
                        }
                    })
                }    
            }
            else this.$message('游客请先登录')
        },
        resetForm() {
            this.Form = {}
        },
    },
    mounted() {
        this.axios.post(' http://localhost:8085/gm/getLineInfo ',this.$route.query.id).then((resp) => {
            let info = resp.data
            this.LineInfo = info.data
            // console.log(info)
        })
        this.axios.post(' http://localhost:8085/gm/getEvaluate ',this.$route.query.id).then((resp) => {
            let data = resp.data;
            this.tableData = data
            // console.log(this.tableData)
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
.zixun_body {
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
.main {
    width: 1000px;
    min-height: 800px;
    margin-top: 10px;
    margin-left: 1000px;
    margin-right: 0.266667rem;
    margin-bottom: 0.266667rem;
    // border: 0.026667rem solid #303133;
    padding: 0.533333rem;
}
.span1 {
    margin-left: 40px;font-size: 10px;color: #999;
}
.span2 {
    margin-left: 100px;font-size: 10px;color: #999
}
</style>