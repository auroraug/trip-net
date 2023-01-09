<template>
    <body id="poster">
        <el-form class="login-container" :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-position="left" label-width="0px">
            <h3 style="text-align: center; margin-bottom: 30px;">
                注册页面
                <el-button plain v-on:click="tologin">去登录</el-button>
            </h3>
            <el-form-item prop="userName">
                <el-input type="text" v-model="ruleForm.userName" placeholder="请输入用户名" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item prop="pass">
                <el-input type="password" v-model="ruleForm.pass" placeholder="请输入密码" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item prop="checkPass">
                <el-input type="password" v-model="ruleForm.checkPass" placeholder="请再次输入密码" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item prop="identity">
                <el-radio v-model="ruleForm.identity" label="2" style="margin-bottom: 10px;">旅游公司</el-radio>
                <el-radio v-model="ruleForm.identity" label="3" style="margin-bottom: 10px;">用户</el-radio>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" style="width: 100%;background: #505458;border: none" @click="submitForm('ruleForm')">申请注册</el-button>
            </el-form-item>
        </el-form>
    </body>
</template>
<script>
export default {
    data() {
        var checkUserName = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('用户名不能为空'));
        }
        setTimeout(() => {
          var arr = Array.from(value)
          var sum = 0
          for (var i = 0;i < arr.length;i++){
            // console.log(arr)
            if (arr[i] === ' ') {
                sum+=1;
            } 
          }
          if(sum != 0){
            callback(new Error('用户名不能包含空格'));
          }  else {
              callback();
          }
        }, 500);
      };
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.ruleForm.checkPass !== '') {
            this.$refs.ruleForm.validateField('checkPass');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.ruleForm.pass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      var checkIdentity = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请选择类型'));
        } else {
          callback();
        }
      };
      return {
        ruleForm: {
          userName: '',  
          pass: '',
          checkPass: '',
          identity: '',
          date: ''
          
        },
        rules: {
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ],
          checkPass: [
            { validator: validatePass2, trigger: 'blur' }
          ],
          userName: [
            { validator: checkUserName, trigger: 'blur' }
          ],
          identity: [
            { validator: checkIdentity, trigger: 'blur' }
          ],

        }
      };
    },
    methods: {
        tologin() {
            this.$router.push({path: '/login'})
        },
        submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            let time = new Date()
            this.ruleForm.date = time.toLocaleString()
            // console.log(this.ruleForm)
            this.axios.post(' http://localhost:8085/gm/register ',this.ruleForm).then((resp) => {
                let data = resp.data;
                if(data.code === '2'){
                    this.$message.success('申请成功,待管理员审核');
                }
                if(data.code === '3'){
                    this.$message.success('用户注册成功');
                }
                else if (data.code === '-1') {
                    this.$message.error('用户名已被占用');
                    
                }
            })
            // alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      register() {
            // console.log('submit',this.form)
            this.axios.post(' http://localhost:8085/gm/register ',this.ruleForm).then((resp) => {
                let data = resp.data;
                if (data.code === '2'){
                    this.$message.success('申请成功');
                }
                if (data.code === '3'){
                    this.$message.success('用户注册成功');
                }
                else if (data.code === '-1') {
                    this.$message.error('用户名已被占用');
                    
                }
            })
        },
    //   resetForm(formName) {
    //     this.$refs[formName].resetFields();
    //   }
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