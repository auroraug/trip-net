<template>
  <div>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>卡片名称</span>
        <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
      </div>
      <div v-for="o in 4" :key="o" class="text item">
        {{'列表内容 ' + o }}
      </div>
  </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      Form: {
          value: null
        },
      comments: [],
      newComment: '',
      tableData: [
        {
          userName: 'user01',
          evaluate: 5,
        },
        {
          userName: 'user02',
          evaluate: 4,
        },
        {
          userName: 'user03',
          evaluate: 3,
        },
        {
          userName: 'user04',
          evaluate: 2,
        },
        {
          userName: 'user05',
          evaluate: 1,
        },
      ],
      colors: ['#99A9BF', '#F7BA2A', '#FF9900']  // 等同于 { 2: '#99A9BF', 4: { value: '#F7BA2A', excluded: true }, 5: '#FF9900' }
    };
  },
  methods: {
    submitForm() {
      console.log(this.Form) 
    },
    resetForm() {
      this.Form = ''
    },
    addComment() {
      this.comments.push(this.newComment);
      this.newComment = '';
    },
    deleteComment(index) {
      this.comments.splice(index, 1);
    },
  },
};
</script>
<style lang="less" scoped>
.el-table {
  width: 500px;
}
.table {
  margin: 0 auto;
  width: 500px;
}
</style>