<template>
    <div class="header">
        <div class="s_header">
            <div class="head_logo" style="position: absolute;top: 36px;">
                <a href="http://localhost:8080/">
                    <img src="../../image/travel.png" alt="首页">
                </a>
            </div>
            <div class="head_nav">
                <ul>
                    <li class="order" style="margin-left: 10px;font-size: 15px;"><el-link @click="drawer = true,order" :underline="false">订单</el-link></li>
                    <li class="message" style="margin-left: 30px;font-size: 15px;"><el-link :underline="false" @click="dialogTableVisible = true">消息</el-link></li>
                    <li class="register" v-bind:style="{display: username == ''?'block':'none'}"><el-link :underline="false" href="http://localhost:8080/#/register" style="font-size: 15px;">或&nbsp;免费注册</el-link></li>
                    <li class="userName" v-bind:style="{display: username == ''?'block':'none'}"><el-link :underline="false" icon="el-icon-user" href="http://localhost:8080/#/login" style="font-size: 15px;">请登录&nbsp;</el-link></li>
                    <!-- <li  v-bind:style="{display: username == ''?'none':'block'}"><el-link :underline="false" v-on:click="loginout" style="font-size: 15px;">&nbsp;,&nbsp;退出&nbsp;</el-link></li> -->
                    <!-- <li class="welcome" v-bind:style="{display: username == ''?'none':'block'}">欢迎您&nbsp;{{ username }}</li> -->
                    <el-dropdown trigger="click" style="left: 420px;">
                        <li class="welcome" v-bind:style="{display: username == ''?'none':'block'}"><el-link :underline="false">欢迎您&nbsp;&nbsp;{{ username }}</el-link></li>
                        <el-dropdown-menu slot="dropdown">
                            <li  v-bind:style="{display: username == ''?'none':'block'}"><el-link :underline="false" v-on:click="loginout" style="font-size: 15px;">&nbsp;&nbsp;&nbsp;退出&nbsp;</el-link></li>
                        </el-dropdown-menu>
                    </el-dropdown>
                    <li></li>
                </ul>
            </div>
            <div class="top_input">
                <div class="left_input_div" >
                    <input id="input" class="left_input" placeholder="搜索路线" onfocus="this.placeholder=''" onblur="this.placeholder='搜索路线'">
                </div>
                <el-button type="primary" class="icon-search" icon="el-icon-search" @click="searchLuxian">搜索</el-button>
                <!-- <i class="icon-search">搜索</i> -->
            </div>
            <div class="custom_div">
                <ul class="custom">
                    <li class="item_custom">
                        <span class="item_custom_words">国内客服</span>
                        <span class="item_custom_num">95117</span>
                    </li>
                    <li class="item_custom">
                        <span class="item_custom_words">国际客服</span>
                        <span class="item_custom_num" >(+8610)59606999</span>
                    </li>
                </ul>
            </div>
        
            <el-dialog title="Message" :visible.sync="dialogTableVisible" style="max-height: 700px;">
                <el-table :data="gridData">
                    <el-table-column property="date" label="日期" width="150"></el-table-column>
                    <el-table-column property="name" label="姓名" width="200"></el-table-column>
                    <el-table-column property="address" label="地址"></el-table-column>
                </el-table>
            </el-dialog>
            <el-drawer
                title="订单管理"
                :visible.sync="drawer"
                :direction="direction"
                :before-close="handleClose"
                style="font-size: 20px;text-align: center;">
                <div class="cart">
                    <!-- <h3>购物车</h3> -->
                    <table>
                    <tr>
                        <th style="margin-left: 50px;"></th>
                        <th style="margin-left: 50px;"></th>
                        <th style="margin-left: 50px;"></th>
                    </tr>
                    <tr class="value" v-for="item in cart" :key="item.url">
                        <td >
                        <img :src="`${item.url}`" alt="" style="width: 150px;height: 120px;"></td>
                        <td >{{ item.name }}</td>
                        <td style="height: 120px;overflow: hidden;">{{ item.describ }}</td>
                        <!-- <td>
                        <input type="number" v-model="item.quantity" @input="calculateTotalPrice(item)">
                        <el-input-number v-model="item.quantity" @change="calculateTotalPrice(item)" :min="1" :max="1" label="描述文字"></el-input-number>
                        </td> -->
                        <td style="color: #ff7400;">{{ item.price }} 元</td>
                        <!-- <td ><button @click="removeFromCart(item)">移除</button></td> -->
                        <td>
                        <el-button type="danger" icon="el-icon-delete" circle @click="removeFromCart(item)"></el-button>
                        </td>
                    </tr>
                    </table>
                    <p style="margin-top: 680px;position: relative;color: #ff7400;">总价：{{ totalPrice }} 元</p>
                    <el-button type="danger" round style="margin-top: 20px;width: 300px;margin-bottom: 50px;" @click="checkout" :disabled="totalPrice === 0? true:false">结算</el-button>
                </div>
            </el-drawer>
        </div>
        <div class="menu">
            <el-menu
                default-active="1"
                class="el-menu-vertical-demo"
                mode="horizontal" 
                text-color="#fff" 
                active-text-color="#ffd04b" 
                @close="handleClose">
                <el-menu-item v-on:click="clickMenu(item)" v-for="item in noChildren" :key="item.name" v-bind:index="item.name">{{item.label}}</el-menu-item>
            </el-menu>
        </div>
    </div>      
</template>
<script>

  export default {
    data() {
      return {
        username: '',
        menuData: [
        {
            path: "/shouye",
            name: "shouye",
            label: "首页",
            url: "shouye"
        },
        {
            path: "/zixun",
            name: "zixun",
            label: "新闻资讯",
            url: "zixun"
        },
        {
            path: "/jingdian",
            name: "jingdian",
            label: "推荐景点",
            url: "jingdian"
        },
        {
            path: "/luxian",
            name: "luxian",
            label: "路线",
            url: "luxian"
        },
        {
            path: "/gonglue",
            name: "gonglue",
            label: "旅游攻略",
            url: "gonglue"
        },
        {
            path: "/mes",
            name: "mes",
            label: "留言板",
            url: "mes"
        },
        ],

        drawer: false,
        direction: 'rtl',

        gridData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        ],
        dialogTableVisible: false,
        dialogFormVisible: false,
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        formLabelWidth: '120px',
        cart: [],
        totalPrice: 0,
      };
    },
    methods: {
      searchLuxian() {
        if (this.$route.path === '/luxian') {
            var value = document.getElementById("input").value
            // console.log(value)
            this.$nextTick(() => {// 使用这个包裹之后保证数据改变之后dom刷新
                if (value != '' && value != null && value != undefined)
                    this.$store.commit('blurSearch',value)
                if (value == '' || value == null || value == undefined)
                    this.$store.commit('resetSearch')
                    // 执行修改值的操作
            })
        }else this.$router.push('/luxian')
        
        // this.$router.push({path: '/luxian',query: {blur: value}})
      }, 
      handleClose(done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {});
      },
      clickMenu(item) {
            //当页面路由与跳转的路由不一致才允许跳转
            if (this.$route.path !== item.path && !(this.$route.path === '/shouye' && (item.path === '/'))){
            this.$router.push(item.path)
          }
      },
      loginout() {
            this.$store.commit('resetUser')
            this.$store.commit('resetCart')
            this.$router.push('login')
      },
      removeFromCart (item) {
            this.cart = this.$store.state.order.cart
            let index = this.cart.findIndex(p => p.url === item.url)
            // console.log(index)
            if (index !== -1) {
            // this.cart.splice(index, 1)
            this.$store.commit('removeFromCart',index)
            }
            // console.log(this.$store.state.order.cart)

            this.calculateTotalPrice()
            this.isCheckOut
        },
        calculateTotalPrice () {
            this.cart = this.$store.state.order.cart
            this.totalPrice = this.cart.reduce((total, item) => total + item.totalPrice, 0)
            console.log(this.totalPrice)
        },
        checkout() {
            var sum = parseInt(prompt('请输入总金额'))
            if (!isNaN(sum) && sum === this.totalPrice) {
                this.$confirm('请再次确认').then(() => {
                    this.$notify({
                    title: '成功',
                    message: '结算成功',
                    type: 'success'
                    });
                    this.$store.commit('resetCart')
                    this.order
                    this.isDisabled = false
                })
            }
            else 
                this.$notify.error({
                title: '错误',
                message: '结算有误'
            });
        }
    },
    
    mounted() {
        if (this.$store.state.userinfo.user != '' || this.$store.state.userinfo.user != undefined || this.$store.state.userinfo.user != null){
            var user = this.$store.state.userinfo.user
            this.username = user.userName
        }
        else this.username = ''
        console.log(this.username)
    },
    computed: {
        //没有子菜单
        noChildren() {
          return this.menuData.filter(item => !item.children)
        },
        
        //有子菜单
        // hasChildren() {}
        loadUser() {
            var user = this.$store.state.userinfo.user
            this.username = user.userName
            return user.userName
        },
        order() {
            this.cart = this.$store.state.order.cart
            this.calculateTotalPrice()
            this.isCheckOut

        },
    },
    watch: {
        data() {

        }
    }
  };
</script>
<style lang="less" scoped>
.header {
    background: 0;
    margin: 0 auto -427px;
    width: 100%;
    min-width: 980px;
    height: 200px;
    font: normal 12px/1.5 tahoma,arial,sans-serif;
    .s_header {
    position: relative;
    margin: 0 auto;
    height: 120px;
    width: 1200px;
    background: #fff;
    .head_logo {
        display: block;
        width: 136px;
        height: 70px;
        overflow: hidden;
        outline: 0;
        img {
            height: 80px;
            border: 0;
            vertical-align: middle;
        }
    }
    .head_nav {
        float: right;
        display: inline;
        // padding: 6px 0 0 0;
        width: 688px;
        height: 36px;

        li {
            float: right;
            display: inline;
            line-height: 14px;
            font-family: tahoma,arial,sans-serif;
        }
    }
    .top_input {
        width: 500px;
        height: 42px;
        position: absolute;
        top: 55px;
        left: 265px;
        
        .left_input_div {
            width: 450px;
            height: 42px;
            border: 2px solid #3fa4df;
            border-radius: 5px 0 0 5px;
            display: inline-block;
            position: absolute;
            padding-left: 16px;

        }
        .left_input {
            display: inline-block;
            width: 100%;
            height: 20px;
            border: 0;
            margin-top: 11px;
            font-size: 14px;
            color: #9e9e9e;
            outline: 0 none;
        }

        .icon-search {
            // font-family: homenode!important;
            // display: inline-block;
            width: 80px;
            height: 46px;
            // background: linear-gradient(116deg,#4fb2f3 5%,#3c93f7 51%,#0e69f1 100%);
            // background: #00bcd4\0;
            // font-size: 15px;
            text-align: center;
            // line-height: 42px;
            // color: #fff;
            // border-radius: 0 5px 5px 0;
            position: absolute;
            left: 454px;
            // margin-left: 0;
            // cursor: pointer;
        }
    }
    .custom_div {
        width: 250px;
        height: 50px;
        position: absolute;
        top: 42px;
        left: 900px;

        .custom {
            display: inline-block;
            width: 160px;
            height: 44px;
            .item_custom {
                margin-left: 8px;
                height: 22px;
                line-height: 22px;
            }
            .item_custom_words {
                font-size: 12px;
                color: #757575;
                line-height: 22px;
            }
            .item_custom_num {
                font-size: 12px;
                float: right;
                color: #239be0;
                line-height: 22px;
            }
        }
    }
    
}

}
// .inside_mnav {
//     display: block;
//     width: 1200px;
//     height: 44px;
//     padding: 0;
//     float: none;
//     margin-right: 0;
//     margin: 0 auto;
// }
.menu {
    width: 100%;
    height: 50px;
    background: linear-gradient(90deg,#0076f5 19%,#00a7fa 58%,#5eccee 100%);
}
.el-menu-vertical-demo {
    height: 46px;
    margin-left: 380px;
    background: transparent;
    font-size: 16px;
    border-bottom: transparent;


}
.el-menu--horizontal .el-menu-item:not(.is-disabled):focus, .el-menu--horizontal .el-menu-item:not(.is-disabled):hover {
    background-color: #66b1ff;
    height: 46px;
    font-size: 16px;
    line-height: 50px;
    border-bottom: transparent;

}
.el-menu--horizontal>.el-menu-item {
    height: 46px;
    border-bottom: transparent;
    font-size: 16px;
    
}
.el-menu--horizontal>.el-menu-item.is-active {
    height: 46px;
    margin: 0;
    border-bottom: transparent;
    font-size: 16px;

}
.welcome {
    color: #00a7fa;
    font-size: 15px;
    margin-top: 2px;
    text-decoration: none;
}
.el-dropdown-link {
    font-size: 15px;
    margin-top: 2px;
}
.el-drawer {
    td {
        font-size: 20px;

    }
}
.cart {
    table {
        tr {
            display: flex;
        justify-content: space-between;
        }
        
    }
    
}
.value {
    td {
        margin-top: 15px;
        margin-left: 50px;
        height: 120px;
        line-height: 30px;
        align-items: center;
    }
}
</style>