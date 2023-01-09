<template>
    <div class="gonglue_div">
        <div>
            <el-button type="info" @click="writeTips" style="margin-bottom: 15px">写攻略</el-button>
        </div>
        <div>
            <el-row>
                <el-col :span="6" v-for="item in tipsD" :key="item.userName" :offset="index > 1000 ? 2 : 0">
                    <el-card :body-style="{ padding: '5px' }"  shadow="hover">
                    <img :src="`${item.url}`" class="image">
                    <div style="padding: 20px;">
                        <span class="title">{{ item.title }}</span>
                        <div class="bottom clearfix">
                        <span class="date" >{{ item.creatDate }}</span>
                        <!-- <span class="price">￥{{ item.price }}</span> -->
                        <el-button type="text" @click="handleCardClick(item)" class="button">点击查看</el-button>
                        </div>
                    </div>
                    </el-card>
                </el-col>
            </el-row>
        </div>
    </div>
</template>
<script>
import { getTips } from '@/api'
export default {
    data() {
        return {
            tipsD: [
                {
                    userName: '',
                    title: '西岭雪山',
                    creatDate: '12.25',
                    content: '',
                    url: 'https://imgs.qunarzz.com/sight/p75/201211/03/c5e69645fb3de0e193835fbb.jpg_280x200_a2e27ac0.jpg'
                },
                {
                    userName: '',
                    title: '成都大熊猫繁育研究基地',
                    creatDate: '四川·成都·成华区',
                    content: '',
                    url: 'https://imgs.qunarzz.com/wugc/p224/201207/13/f40f8a9e4327658c93835fbb.jpg_280x200_46906341.jpg'
                },
                {
                    userName: '',
                    title: '西岭雪山',
                    creatDate: '12.25',
                    content: '',
                    url: 'https://imgs.qunarzz.com/sight/p75/201211/03/c5e69645fb3de0e193835fbb.jpg_280x200_a2e27ac0.jpg'
                },
                {
                    userName: '',
                    title: '西岭雪山',
                    creatDate: '12.25',
                    content: '',
                    url: 'https://imgs.qunarzz.com/sight/p75/201211/03/c5e69645fb3de0e193835fbb.jpg_280x200_a2e27ac0.jpg'
                },
            ],
        }
    },
    methods: {
        handleCardClick(item) {
        console.log(item.title)
        this.$router.push({path: '/watchTip',query: {title: item.title}})
        },
        writeTips() {
            const user = this.$store.state.userinfo.user
            // console.log(user)
            if (user != null)
                this.$router.push({path: '/writeTips'})
            else this.$message('游客请先登录')
        }
    },
    mounted() {
        getTips().then((data) => {
            const tipsD = data.data
            this.tipsD = tipsD
        })
    }
}
</script>
<style lang="less" scoped>
.gonglue_div {
    min-height: 1000px;
    margin-top: 20px;
    margin-left: 55px;
}
.title {
    font-size: 20px;
}
.date {
    font-size: 10px;
    color: #999;
}

  
  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    font-size: 15px;
    padding: 0;
    float: right;
  }

  .image {
    height: 240px;
    width: 100%;
    display: block;
  }

  .clearfix:before,
  .clearfix:after {
      display: table;
      content: "";
  }
  
  .clearfix:after {
      clear: both
  }
  .el-card {
    width: 250px;
    margin-bottom: 30px;
  }
</style>