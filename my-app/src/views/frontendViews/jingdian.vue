<template>
    <div class="jingdian_div">
        <el-row>
            <el-col :span="8" v-for="item in jingdianD" :key="item.name" :offset="index > 1000 ? 2 : 0">
                <el-card :body-style="{ padding: '5px' }" shadow="hover">
                <img :src="`${item.url}`" class="image">
                <div style="padding: 20px;">
                    <span class="name">{{item.name}}</span>
                    <div class="bottom clearfix">
                    <div class="address" style="margin-bottom: 20px;">{{ item.address }}</div>
                    <span class="price">￥{{ item.price }}</span>
                    <el-button type="text" class="button" @click="addToCart(item)">预订</el-button>
                    </div>
                </div>
                </el-card>
            </el-col>
        </el-row>
    </div>
</template>
<script>
import { getRecommend } from '../../api'

export default {
    data() {
        return {
            jingdianD: [
                {
                    name: '西岭雪山',
                    address: '四川·成都·大邑县',
                    url: 'https://imgs.qunarzz.com/sight/p75/201211/03/c5e69645fb3de0e193835fbb.jpg_280x200_a2e27ac0.jpg',
                    price: '240',
                },
                {
                    name: '成都大熊猫繁育研究基地',
                    address: '四川·成都·成华区',
                    url: 'https://imgs.qunarzz.com/wugc/p224/201207/13/f40f8a9e4327658c93835fbb.jpg_280x200_46906341.jpg',
                    price: '55',
                },
                {
                    name: '广州塔',
                    address: '广东·广州·海珠区',
                    url: 'https://imgs.qunarzz.com/sight/p0/201309/06/a03726324b885c8bc8d65eac.jpg_280x200_39ead41f.jpg',
                    price: '148',
                },
                {
                    name: '广州长隆旅游度假区',
                    address: '广东·广州·番禺区',
                    url: 'https://qimgs.qunarzz.com/piao_qsight_provider_piao_qsight_web/100c0h0000008pb194AB1.jpg_280x200_e925f7f7.jpg',
                    price: '68',
                },
                {
                    name: '长隆野生动物世界',
                    address: '广东·广州·广州长隆旅游度假区',
                    url: 'https://imgs.qunarzz.com/sight/p0/2212/3f/3f114707b74a34c4a3.water.jpg_280x200_612b394d.jpg',
                    price: '295',
                },
                {
                    name: '鼓浪屿中国唱片博物馆（黄荣远堂）',
                    address: '福建·厦门·鼓浪屿',
                    url: 'https://imgs.qunarzz.com/sight/p0/1803/1d/1d0d8f2b987a4e34a3.img.jpg_280x200_48b2472a.jpg',
                    price: '44.8',
                },
                {
                    name: '厦门日月谷温泉渡假村',
                    address: '福建·厦门·海沧区',
                    url: 'https://imgs.qunarzz.com/sight/p0/1912/36/36403a427c245524a3.img.jpg_280x200_4b92d997.jpg',
                    price: '187',
                },
                {
                    name: '秦始皇帝陵博物院（兵马俑）',
                    address: '陕西·西安·临潼区',
                    url: 'https://imgs.qunarzz.com/sight/p0/1411/61/d92ba6a30aa12eb0a9a4a9c82214cb8e.water.jpg_280x200_13b0a5ba.jpg',
                    price: '120',
                },
                {
                    name: '大唐芙蓉园',
                    address: '陕西·西安·曲江旅游度假区',
                    url: 'https://imgs.qunarzz.com/sight/p0/1902/d4/d4abab5d2b8b3238a3.img.jpg_280x200_73505c7f.jpg',
                    price: '198',
                },
        ],
        cart: [],
        }
    },
    methods: {
        addToCart (item) {
            const user = this.$store.state.userinfo.user
            if (user != null) {
                this.cart = this.$store.state.order.cart
                // let cartProduct = this.cart.find(p => p.name === item.name)
                let cartProduct = this.cart.find(p => p.url === item.url)
                if (!cartProduct) {
                    // const item = {...product,quantity: 1,totalPrice: item.price}
                    this.$store.commit('addToCart',{...item,quantity: 1,totalPrice: item.price})
                
                }
                console.log(this.$store.state.order.cart)
                // this.calculateTotalPrice()
                this.$message({
                showClose: true,
                message: '已加入订单'
                });
            }
            else this.$message('游客请先登录')
        },
    },
    mounted() {
        getRecommend().then((data) => {
              const jingdianD = data.data
              this.jingdianD = jingdianD
          })
    }
}
</script>
<style lang="less" scoped>
.jingdian_div {
    min-height: 1000px;
    margin-top: 20px;
    margin-left: 55px;
}
.name {
    font-size: 20px;
}
.address {
    font-size: 10px;
    color: #999;
}
 .price {
    font-size: 20px;
    color: #ff7400;
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
    width: 300px;
    margin-bottom: 30px;
    float: initial;
  }
</style>