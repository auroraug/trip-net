<template>
    <div>
        <el-card v-for="item in mesData" :key="item.from" class="box-card" style="width: 800px;margin-left: 50px;margin-top: 5px;">
        <div slot="header" class="clearfix">
            <span style="color: deepskyblue;">来自：&nbsp;{{ item.fromUser }}</span>
            <el-button style="float: right; padding: 3px 0" type="text" @click="reply(item)">回复</el-button>
        </div>
        <div class="text item">
            {{ item.content1 }}
        </div>
        <div class="reply" style="color: deepskyblue;font-size: 15px;">{{ item.reply }}</div>
        <p style="font-size: 15px;">{{ item.content2 }}</p>
        </el-card>
    </div>
    
</template>
<script>
import { getMes } from '../api'
export default {
    data() {
        return {
            mesData: [
                {
                    fromUser: 'user01',
                    reply: '',
                    content1: '体验666',
                    content2: ''
                },
                {
                    fromUser: 'user02',
                    reply: 'admin',
                    content1: '求管理员回复',
                    content2: 'nice'
                },
                {
                    fromUser: 'user03',
                    reply: '',
                    content1: '好好嘎嘎嘎嘎嘎嘎嘎嘎嘎嘎嘎嘎嘎嘎好好嘎嘎嘎嘎嘎嘎嘎嘎嘎嘎嘎嘎嘎嘎',
                    content2: ''
                },
            ],
            Form: {
                fromUser: '',
                reply: '',
                content2: ''
            }
        }
    },
    methods: {
        reply(item) {
            this.$prompt('请输入内容', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            // inputPattern: /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/,
            // inputErrorMessage: '邮箱格式不正确',
            }).then(({value}) => {
                this.Form.fromUser = item.fromUser
                this.Form.reply = 'admin'
                this.Form.content2 = value
                console.log(this.Form)
                this.axios.post('http://localhost:8085/gm/reply',this.Form).then((resp) => {
                    let data = resp.data
                    if (data.code === '0') {
                        this.$message({
                        type: 'success',
                        message: '回复成功'
                    });
                    }
                    getMes().then((data) => {
                    const mesData = data.data
                    this.mesData = mesData
                })
                })
                
            }).catch(() => {
            this.$message({
                type: 'info',
                message: '取消输入'
            });       
            });
        }
    },
    mounted() {
        getMes().then((data) => {
            const mesData = data.data
            this.mesData = mesData
        })
    }
}
</script>
<style lang="less" scoped>
.reply {
    border-top: 1px solid #EBEEF5;
    margin-top: 20px;
}
</style>