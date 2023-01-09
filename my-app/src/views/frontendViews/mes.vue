<template>
    <div>
        <el-form :label-position="labelPosition" label-width="50px" :model="formLabelAlign">
            <el-form-item>
                <el-input
                    type="textarea"
                    :autosize="{ minRows: 4}"
                    placeholder="请输入内容"
                    v-model="Form.content1"
                    style="width: 800px;">
                </el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="saveMes">留言</el-button>
            </el-form-item>
        </el-form>
        <el-card v-for="item in mesData" :key="item.from" class="box-card" style="width: 800px;margin-left: 50px;margin-top: 5px;">
        <div slot="header" class="clearfix">
            <span style="color: deepskyblue;">来自：&nbsp;{{ item.fromUser }}</span>
            <!-- <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button> -->
        </div>
        <div class="text item">
            {{ item.content1 }}
        </div>
        <div class="reply" style="color: deepskyblue;font-size: 15px;margin-top: 5px;">{{ item.reply }}</div>
        <p style="font-size: 15px;">{{ item.content2 }}</p>
        </el-card>
    </div>
    
</template>
<script>
import {getMes} from '../../api'

export default {
    data() {
        return {
            Form: {
                fromUser: '',
                content1: '',
            },
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
            ]
        }
    },
    methods: {
        saveMes() {
            const user = this.$store.state.userinfo.user
            // console.log(user)
            if (user != null) {
                this.Form.fromUser = user.userName
                // console.log(this.Form)
                this.axios.post('http://localhost:8085/gm/saveMes',this.Form).then((resp) => {
                    let data = resp.data
                    if (data.code === '0') {
                        this.$message({
                            message: '留言成功',
                            type: 'success'
                            });
                    }
                    getMes().then((data) => {
                    const mesData = data.data
                    this.mesData = mesData
                })
                })
            }
            else this.$message('游客请先登录')
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