<template>
    <body>
        <h3 style="text-align: center;margin-top: 50px;">写攻略</h3>
        <el-form ref="form" :model="form" label-width="80px">
            <el-form-item label="主题图片">
                <el-input v-model="form.url" placeholder="https://xxxx.jpg/png"></el-input>
            </el-form-item>
            <el-form-item label="主题">
                <el-input v-model="form.title"></el-input>
            </el-form-item>
            <el-form-item class="content" label="内容">
                <el-input type="textarea" v-model="form.content" :autosize="{ minRows: 10}"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit">发布</el-button>
                <el-button @click="backGonglue">取消</el-button>
            </el-form-item>
        </el-form>
    </body>
    
  </template>
  
  <script>
  export default {
    data() {
      return {
        form: {
          userName: '',  
          title: '',
          url: '',
          content: '',
          creatDate: ''
        }
      }
    },
    methods: {
      submitArticle() {
        // 在这里调用 API 来发布文章
        console.log(this.article)
      },
      onSubmit() {
        if (this.form.title != '' && this.form.content != ''){
            let time = new Date()
            this.form.creatDate = time.toLocaleString()
            this.form.userName = this.$store.state.userinfo.user.userName
            console.log(this.form)
            this.axios.post(' http://localhost:8085/gm/writeTips ',this.form).then((resp) => {
                let data = resp.data;
                if(data.code === '0'){
                    this.$message.success('发布成功');

                    this.$router.push({path: '/gonglue'})
                }
            })
        }else this.$message.error('主题或内容不能为空！')
      },
      backGonglue() {
        this.$router.push('gonglue')
      },
    }
  }
  </script>
<style lang="less" scoped>
body {
    margin: 0 auto;
    width: 1200px;
}
.el-form {
    margin: 0 auto;
    padding: 50px;
}
</style>