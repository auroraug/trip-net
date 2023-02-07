<template>
  <div class="luxian_div">
    <div>
        <el-carousel height="300px" style="width: 600px;" direction="vertical" :autoplay="true">
            <el-carousel-item v-for="item in topD" :key="item.url">
                <img :src="`${item.url}`" style="width: 600px;height: 300px;" alt="">
            </el-carousel-item>
        </el-carousel>
        <div>
            <el-input size="mini" type="text" id="suggestId" v-model="input" placeholder="请输入地址" clearable style="width: 300px;margin-left: 10px;"></el-input>
            <div id="l-map" class="map" style="width: 538px;height: 275px;margin-left: 20px;">
            <div id="searchResultPanel" style="border:1px solid #C0C0C0;width:150px;height:auto; display:none;"></div>
            </div>
        </div>
    </div>
    <div style="margin-top: 20px;">
        <el-row>
            <el-col :span="6" v-for="item in lineD" :key="item.title" :offset="index > 1000 ? 2 : 0">
                <el-card :body-style="{ padding: '5px' }" shadow="hover">
                <img :src="`${item.url}`" class="image">
                <div style="padding: 5px;">
                    <div style="height: 45px;overflow: hidden;text-overflow: ellipsis;"><span class="name" style="">{{item.describ}}</span></div>
                    
                    <div class="bottom clearfix" style="margin-top: 25px">
                    <!-- <div class="address" style="margin-bottom: 20px;">{{ item.address }}</div> -->
                    <span class="price">￥{{ item.price }}</span>
                    <el-button type="text" class="button"  @click="toDetail(item)">查看评论</el-button>
                    <el-button type="text" class="comments" style="float: right;" @click="addToCart(item)">报名&nbsp;&nbsp;</el-button>

                    </div>
                </div>
                </el-card>
            </el-col>
        </el-row>
    </div>
  </div>
</template>
<script>
import { getLine } from '../../api'
export default {
    data() {
        return {
            input: '',
            topD: [
                
                {
                    title: '北京',
                    url: 'https://youimg1.c-ctrip.com/target/100a0g00000087qb8E7CE_C_1180_462.jpg'
                },
                {
                    title: '三亚',
                    url: 'https://youimg1.c-ctrip.com/target/100o1f000001gp6di1DB0_C_1180_462.jpg'
                },
                {
                    title: '杭州',
                    url: 'https://youimg1.c-ctrip.com/target/100h180000013qm0m8FCA_C_1180_462.jpg'
                },
                {
                    title: '天津',
                    url: 'https://youimg1.c-ctrip.com/target/100n1c000001d5zaf9BCE_C_1180_462.jpg'
                },
                {
                    title: '重庆',
                    url: 'https://youimg1.c-ctrip.com/target/100w10000000q9cpfC75C_C_1180_462.jpg'
                },
                {
                    title: '澳门',
                    url: 'https://youimg1.c-ctrip.com/target/100k0h0000008rpf254E4_C_1180_462.jpg'
                },
                {
                    title: '香港',
                    url: 'https://youimg1.c-ctrip.com/target/100b0i0000009clncDDD0_C_1180_462.jpg'
                },
                {
                    title: '广州',
                    url: 'https://youimg1.c-ctrip.com/target/100c180000014rkpq4C68_C_1180_462.jpg'
                },
                {
                    title: '深圳',
                    url: 'https://youimg1.c-ctrip.com/target/10051f000001gsu9xBA0E_C_1180_462.jpg'
                },
            ],
            lineD: [
                {
                    company: 'companyxxx',
                    title: '银川+中卫5日4晚私家团·【特别推荐】【儿童免费赠送早餐 】宁蒙两省连游 五湖穿越 腾格里-无人之境内的“地球之心”乌兰湖   享 水洞沟+西部影城+西夏陵+66号公路+沙坡头+岩画 全程住银川酒店',
                    url: 'https://dimg04.c-ctrip.com/images/0303n120009kndp1bA27B_C_210_118_Q100.jpg',
                    content: 'xxx',
                    price: '5130'
                },
                {
                    company: 'companyxxx',
                    title: '本溪水洞+关门山国家森林公园+本溪老边沟风景区+关山湖+大石湖风景区+小市一庄5日4晚私家团·【美景美食篇·1单1团·】辽宁境内赏枫路线-全程特色酒店【专车·私人管家】',
                    url: 'https://dimg04.c-ctrip.com/images/0304b12000927vmpf57EA_C_210_118_Q100.jpg',
                    content: 'xxx',
                    price: '4896'
                },
                {
                    company: 'companyxxx',
                    title: '山西大同+五台山5日4晚自由行·【宗教古建精华游】飞机往返  复刻梁思成林徽因夫妇古建考察之路，一揽山西境内古建精华',
                    url: 'https://dimg03.c-ctrip.com/images/100p0s000000i849h3242_C_210_118_Q100.jpg',
                    content: '',
                    price: '1917'
                },
                {
                    company: 'companyxxx',
                    title: '三亚+亚特兰蒂斯5日自由行·万人游爆品「2晚+亚特海景房2晚」春节晚订无房 后2晚无限次畅玩水世界&水族馆 | 前2晚优选5钻:红树林·艾迪逊·天域·喜来登·康年等『新年特价购』上天入海&玩转经典5A包车·租车等 一次搞定～',
                    url: 'https://dimg03.c-ctrip.com/images/0203b120009z02okj86F7_C_210_118_Q100.jpg',
                    content: '',
                    price: '3784'
                },
                {
                    company: 'companyxxx',
                    title: '三亚+亚特兰蒂斯5日私家团·赠取消险！『住』亚特兰蒂斯·高人气向导带您玩『含』1日热门线路5选1·蜈支洲|呀诺达|天堂森林|南山|百福湾潜水·配10小时舒适型专车『精选携程榜单酒店』赠接送机+行程管家+儿童亲子礼包',
                    url: 'https://dimg03.c-ctrip.com/images/200h1800000154fww0E45_C_210_118_Q100.jpg',
                    content: '',
                    price: '4010'
                },
                {
                    company: 'companyxxx',
                    title: '迪拜3日私家团·阿联酋迪拜3日2晚私家团·地标深度游【棕榈岛+越野沙漠冲沙+迪拜塔124层+Dubai Mall】+【中文专车专导+1人即成团】',
                    url: 'https://dimg04.c-ctrip.com/images/0302812000a6fswr5043B_C_210_118_Q100.jpg',
                    content: '',
                    price: '4685'
                },
                {
                    company: 'companyxxx',
                    title: '德国慕尼黑+新天鹅堡+国王湖4日3晚私家团·【巴伐利亚深度之旅】新天鹅堡+经典齿轨列车登·【楚格峰】慕尼黑市内经典地标巡游【慕尼黑5钻酒店自选+专属中文司兼导】',
                    url: 'https://dimg03.c-ctrip.com/images/100i0u000000izstbEF79_C_210_118_Q100.jpg',
                    content: '',
                    price: '14110'
                },
                {
                    company: 'companyxxx',
                    title: '新加坡7日6晚自由行·2晚圣淘沙酒店+升级1晚金沙酒店+3晚市区酒店|买在乌节路·吃在牛车水·玩在圣淘沙·乐在滨海湾|燃爆朋友圈',
                    url: 'https://dimg03.c-ctrip.com/images/fd/tg/g5/M09/65/84/CggYr1cVyqSASdomAA4OYUC1CT0295_C_210_118_Q100.jpg',
                    content: '',
                    price: '5214'
                },
            ]
        }
    },
    methods: {
        toDetail(item) {
            console.log(item.title)
            this.$router.push({path: '/luxiandetail',query: {id: item.id}})
        },
        addToCart (item) {
            const user = this.$store.state.userinfo.user
            // console.log(user)
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
        searchLuxian() {
            var protoBlur = this.$store.state.search.blur
            console.log(protoBlur)
            if (protoBlur != null && protoBlur != '' && protoBlur != undefined) {
                this.axios.post('http://localhost:8085/gm/queryLine',protoBlur).then((resp) => {
                let data = resp.data
                const lineD = data
                this.lineD = lineD
            })
            }
            else {
                getLine().then((data) => {
                const lineD = data.data
                this.lineD = lineD
            })
            }
        }
    },
    mounted() {
        getLine().then((data) => {
            const lineD = data.data
            this.lineD = lineD
        });
        var map = new BMap.Map("l-map");
	    map.centerAndZoom("北京",12);                   // 初始化地图,设置城市和地图级别。
        map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放
        //添加地图类型控件
    
        map.addControl(
        new BMap.MapTypeControl({
            mapTypes: [BMAP_NORMAL_MAP, BMAP_HYBRID_MAP],
        })
        );
    
        var ac = new BMap.Autocomplete(    //建立一个自动完成的对象
        {"input" : "suggestId"
        ,"location" : map
        });

        ac.addEventListener("onhighlight", function(e) {  //鼠标放在下拉列表上的事件
        });

        // var myValue;
        ac.addEventListener("onconfirm", function(e) {    //鼠标点击下拉列表后的事件
        var _value = e.item.value;
        var myValue = _value.province +  _value.city +  _value.district +  _value.street +  _value.business;
        setPlace(myValue)
        });
        function setPlace(value) {
        //this.map.clearOverlays(); //清除地图上所有覆盖物
        // 创建一个检索对象
        var local = new BMap.LocalSearch(map, {
            //智能搜索
            onSearchComplete: function () {
            var getpo = local.getResults().getPoi(0).point; //获取第一个智能搜索的结果
            map.centerAndZoom(getpo, 18);
            map.addOverlay(new BMap.Marker(getpo)); //添加标注
            },
        });
        local.search(value);
        }
    },
    computed: {
        data() {
            return this.$store.state.search.blur
        }
    },
    watch: {
        data() {
            this.searchLuxian()
        }
    }
}
</script>
<style lang="less" scoped>
.luxian_div {
    min-height: 800px;
}
.el-carousel__item:nth-child(2n) {
background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
background-color: #d3dce6;
}
.el-carousel {
    float: left;
}
.el-card {
    margin-top: 20px;
    width: 225px;
}
.price {
    font-size: 20px;
    color: #ff7400;
  }
  .button {
    float: right;
  }
//   省略超字数的标题
//   element.style {
//     overflow: hidden;
//     overflow-wrap: break-word;
// }
.name {
    height: 50px;
    overflow: hidden;
    text-overflow: ellipsis;
}
</style>