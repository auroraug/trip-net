<template>
    <body id="poster">
        <el-form class="login-container" label-position="left" label-width="0px">
            <h3 style="text-align: center; margin-bottom: 30px;">登录页面
                <el-button plain v-on:click="toregister">去注册</el-button>
            </h3>
            <el-form-item>
                <el-input type="text" v-model="form.userName" placeholder="账号" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item>
                <el-input type="password" v-model="form.passWord" placeholder="密码" autocomplete="off"></el-input>
            </el-form-item>
            <el-radio v-model="form.identity" label="1" style="margin-bottom: 20px;">管理员</el-radio>
            <el-radio v-model="form.identity" label="2" style="margin-bottom: 20px;">旅游公司</el-radio>
            <el-radio v-model="form.identity" label="3" style="margin-bottom: 20px;">用户</el-radio>
            <el-form-item>
                <el-button type="primary" style="width: 100%;background: #505458;border: none" v-on:click="Login">登录</el-button>
            </el-form-item>
            <el-button type="text" v-on:click="visit">游客登陆</el-button>
        </el-form>
    </body>
</template>
<script>

export default {
    data() {
        return {
        form: {
            userName: '',
            passWord: '',
            identity: '',
        }
      }
    },
    methods: {
        visit() {
            this.$router.push('/shouye')
        },
        Login() {
            
            console.log('submit',this.form)
            this.axios.post(' http://localhost:8085/gm/login ',this.form).then((resp) => {
                let data = resp.data;
                if(data.code === '1' || data.code === '2' || data.code === '3'){
                    switch(data.code){
                        case '1':
                            // this.form = {};
                            // this.$store.commit('updateAdmin',{
                            //     userName : this.form.userName
                            // })
                            this.$message({
                            message: '管理员登录成功',
                            type: 'success'
                            });
                            this.$router.push({path: '/home'})
                            break;
                        case '2':    
                            // this.form = {};
                            this.$store.commit('updateCompany',{
                                userName : this.form.userName
                            })
                            this.$message({
                            message: '公司登录成功',
                            type: 'success'
                            });
                            this.$router.push({path: '/chome'})
                            break;
                        case '3':
                            this.$store.commit('updateUser',{
                                userName : this.form.userName
                            })
                            this.$message({message: '用户登录成功',type: 'success'});
                            // this.$router.push({path: '/',query: {id :username}})
                            this.$router.push('/')
                            break;    
                    }
                }
                else {
                    this.$message.error('账号或密码错误，请重新输入');
                }
                
            })
        },
        toregister() {
            this.$router.push({path: '/register'})
        }
    }
}
</script>
<style lang="less" scoped>
    #poster {
        background-position: center;
        height: 100%;
        width: 100%;
        background-size: cover;
        position: fixed;
    }
    body {
        margin: 0px;
        padding: 0px;
    }
    .login-container {
        border-radius: 15px;
        background-clip: padding-box;
        margin: 150px auto;
        width: 350px;
        padding: 35px;
        background: #fff;
        border: 1px solid #eaeaea; 
        box-shadow: 0 0 25px #cac6c6;
    }
</style>