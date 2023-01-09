<template>
    <div class="recommend_div">
        <el-card shadow="always" >
          <div class="left" v-bind:style="{display: this.isCompany == true?'block':'none'}">
            <h3 style="text-align: center;margin-bottom: 20px;">已发布路线</h3>
            <el-row>
              <el-col :span="8" v-for="item in lineD" :key="item.id" :offset="index > 1000 ? 2 : 0">
                <el-card class="small" :body-style="{ padding: '5px' }" shadow="hover">
                <img :src="`${item.url}`" class="image">
                <div style="padding: 20px;">
                    <span class="name">{{item.describ}}</span>
                    <div class="bottom clearfix">
                    <div class="address" style="margin-bottom: 20px;">id：{{ item.id }}</div>
                    <span class="price">价格：{{ item.price }}</span>
                    <el-button type="text" class="button" style="float: right;" @click="toSignDetail">报名详情</el-button>
                    </div>
                </div>
                </el-card>
              </el-col>
            </el-row>
          </div>
          <div class="left1" v-bind:style="{display: this.isCompany == true?'none':'block'}">
            <h3 style="text-align: center;margin-bottom: 20px;">未审核路线</h3>
            <el-row>
              <el-col :span="6" v-for="item in Unverified" :key="item.id" :offset="index > 1000 ? 2 : 0">
                <el-card class="small" :body-style="{ padding: '5px' }" shadow="hover">
                <img :src="`${item.url}`" class="image">
                <div style="padding: 20px;">
                    <span class="name">describe:&nbsp;<br>{{item.describ}}</span>
                    <div class="bottom clearfix">
                    <div class="address" style="margin-bottom: 20px;float: left;">id:&nbsp;{{ item.id }}&nbsp;&nbsp;</div>
                    <div class="address" style="margin-bottom: 20px;">&nbsp;&nbsp;&nbsp;申请公司:&nbsp;{{ item.company }}</div>
                    <p class="price" style="margin-bottom: 20px;">价格:&nbsp;{{ item.price }}</p>
                    <el-button type="success" @click="pass(item)">通过</el-button>
                    <el-button type="danger" style="float: right" @click="reject(item)">不通过</el-button>
                    </div>
                </div>
                </el-card>
              </el-col>
            </el-row>
          </div>
          <div class="right" v-bind:style="{display: this.isCompany == true?'block':'none'}">
            <h3 style="text-align: center;margin-bottom: 20px;">路线发布</h3>
            <el-form label-position="top" label-width="80px" :model="formLabelAlign">
              <el-form-item label="id">
                <el-input v-model="formLabelAlign.id" placeholder="10001"></el-input>
              </el-form-item>
              <el-form-item label="图片url">
                <el-input v-model="formLabelAlign.url" placeholder="https://"></el-input>
              </el-form-item>
              <el-form-item label="描述">
                <el-input v-model="formLabelAlign.describ" placeholder="广州-广州塔、深圳-世界之窗3日游"></el-input>
              </el-form-item>
              <el-form-item label="价格">
                <el-input v-model="formLabelAlign.price" placeholder="1458"></el-input>
              </el-form-item>
              <el-button type="primary" @click="submitForm('formLabelAlign')">提交</el-button>
          </el-form>
          </div>
        </el-card>
    </div>
</template>
<script>
import { getUnverified } from '../api'
export default {
    data() {
        return {
        imageSrc: '',
        lineD: [
                {
                    id: '10001',
                    describ: '银川+中卫5日4晚私家团·【特别推荐】【儿童免费赠送早餐 】宁蒙两省连游 五湖穿越 腾格里-无人之境内的“地球之心”乌兰湖   享 水洞沟+西部影城+西夏陵+66号公路+沙坡头+岩画 全程住银川酒店',
                    url: 'https://dimg04.c-ctrip.com/images/0303n120009kndp1bA27B_C_210_118_Q100.jpg',
                    price: '5130',
                    company: 'company01'
                },
                {
                    id: '10002',
                    describ: '本溪水洞+关门山国家森林公园+本溪老边沟风景区+关山湖+大石湖风景区+小市一庄5日4晚私家团·【美景美食篇·1单1团·】辽宁境内赏枫路线-全程特色酒店【专车·私人管家】',
                    url: 'https://dimg04.c-ctrip.com/images/0304b12000927vmpf57EA_C_210_118_Q100.jpg',
                    price: '4896',
                },
                {
                    id: '10002',
                    describ: '本溪水洞+关门山国家森林公园+本溪老边沟风景区+关山湖+大石湖风景区+小市一庄5日4晚私家团·【美景美食篇·1单1团·】辽宁境内赏枫路线-全程特色酒店【专车·私人管家】',
                    url: 'https://dimg04.c-ctrip.com/images/0304b12000927vmpf57EA_C_210_118_Q100.jpg',
                    price: '4896',
                    company: 'company01'
                },
                {
                    id: '10002',
                    describ: '本溪水洞+关门山国家森林公园+本溪老边沟风景区+关山湖+大石湖风景区+小市一庄5日4晚私家团·【美景美食篇·1单1团·】辽宁境内赏枫路线-全程特色酒店【专车·私人管家】',
                    url: 'https://dimg04.c-ctrip.com/images/0304b12000927vmpf57EA_C_210_118_Q100.jpg',
                    price: '4896',
                    company: 'company01'
                },
                {
                    id: '10002',
                    describ: '本溪水洞+关门山国家森林公园+本溪老边沟风景区+关山湖+大石湖风景区+小市一庄5日4晚私家团·【美景美食篇·1单1团·】辽宁境内赏枫路线-全程特色酒店【专车·私人管家】',
                    url: 'https://dimg04.c-ctrip.com/images/0304b12000927vmpf57EA_C_210_118_Q100.jpg',
                    price: '4896',
                    company: 'company01'
                },
                {
                    id: '10002',
                    describ: '本溪水洞+关门山国家森林公园+本溪老边沟风景区+关山湖+大石湖风景区+小市一庄5日4晚私家团·【美景美食篇·1单1团·】辽宁境内赏枫路线-全程特色酒店【专车·私人管家】',
                    url: 'https://dimg04.c-ctrip.com/images/0304b12000927vmpf57EA_C_210_118_Q100.jpg',
                    price: '4896',
                    company: 'company01'
                },
        ],
        Unverified: [],
        formLabelAlign: {
          company: '',  
          url: '',
          describ: '',
          id: '',
          price: ''
        },
        isCompany: false
      }
    },
    methods: {
      toSignDetail() {
        this.$router.push('/signdetail')
      },
        handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePreview(file) {
        console.log(file);
      },
      submitForm() {
        this.formLabelAlign.company = this.$store.state.companyinfo.company.userName
        console.log(this.formLabelAlign)
        this.axios.post('http://localhost:8085/gm/submitLine',this.formLabelAlign).then((resp) => {
          let data = resp.data;
          if (data.code === '0') {

            this.$notify({
            title: '成功',
            message: '提交成功',
            type: 'success'
          });
          this.formLabelAlign = {}
          this.axios.post('http://localhost:8085/gm/getVerifiedLine',company).then((resp) => {
            let data = resp.data
            this.lineD = data
            console.log(data)
        })
          }
          else {
            this.$notify.error({
            title: '错误',
            message: '该推荐景点已设置'
          });
          this.formLabelAlign = {}
          }
        })
      },
      pass(item) {
        // console.log(item)
        this.axios.post('http://localhost:8085/gm/passLine',item).then((resp) => {
            let data = resp.data
            if (data.code === '0') {
                this.$message({
                message: '操作成功',
                type: 'success'
                });
                getUnverified().then((data) => {
                const Unverified = data.data
                this.Unverified = Unverified
            })
            }
        })
      },
      reject(item) {
        // console.log(item)
        this.axios.post('http://localhost:8085/gm/rejectLine',item).then((resp) => {
            let data = resp.data
            if (data.code === '0') {
                this.$message({
                message: '操作成功',
                type: 'success'
                });
                getUnverified().then((data) => {
                const Unverified = data.data
                this.Unverified = Unverified
            })
            }
        })
      }
    },
    mounted() {
        getUnverified().then((data) => {
              const Unverified = data.data
              this.Unverified = Unverified
          })
        const company = this.$store.state.companyinfo.company.userName
        if (company != '' || company != undefined || company != null){
            this.isCompany = true
            this.axios.post('http://localhost:8085/gm/getVerifiedLine',company).then((resp) => {
            let data = resp.data
            this.lineD = data
            console.log(data)
        })
        }
        
    },
    computed() {
        getUnverified().then((data) => {
              const Unverified = data.data
              this.Unverified = Unverified
          })
    }
}
</script>
<style lang="less" scoped>
.name {
    font-size: 10px;
}
.address {
    font-size: 10px;
    color: #999;
}
 .price {
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
  .small {
    width: 300px;
    margin-bottom: 30px;
  }
  .left {
    width: 1000px;
    float: left;
    border-right: 1px solid #999;
    display: flex;
  }
  .recommend_div {
    height: 830px;
  }
  .right {
    width: 550px;
    margin-top: 20px;
    float: right;
    height: 830px;
    position: relative;
  }
</style>