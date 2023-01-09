<template>
    <div>
        <el-button type="info" style="float: left;" @click="backLineM">返回</el-button>
        <h1 style="text-align: center;">报名详情</h1>
        <div>
            <el-row>
        <el-col :span="8" style="padding-right: 10px">
            <el-card class="box-card" style="margin-top:20px">
                <el-table
                    :data="tableData"
                    style="width: 100%">
                        <el-table-column v-for="(val, key) in tableLabel" :prop="key" :label="val" width="180"/>
                        <!-- <el-table-column
                            prop="name"
                            label="姓名"
                            width="180">
                        </el-table-column>
                        <el-table-column
                            prop="address"
                            label="地址">
                        </el-table-column> -->
                </el-table>
            </el-card>
        </el-col>
        <el-col :span="16" style="padding-left: 10px">
            <div class="num">
                <el-card v-for="item in countData" :key="item.name" :body-style="{ display: 'flex', padding: 0}">
                    <i class="icon" :class="`el-icon-${item.icon}`" :style="{background: item.color}"></i>
                    <div class="detail">
                        <p class="price">￥{{ item.value }}</p>
                        <p class="desc">{{ item.name }}</p>
                    </div>
                </el-card>
            </div>
            <el-card style="height :280px">
                    
            </el-card>
            <div class="graph">
                <el-card style="height :260px"></el-card>
                <el-card style="height :260px"></el-card>
            </div>
        </el-col>
    </el-row>
        </div>
    </div>
    
</template>
<script>
export default {
    data() {
        return {
            tableData: [
            {
                date: '2016-05-02',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
            }, 
            {
                date: '2016-05-04',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1517 弄'
            }, 
            {
                date: '2016-05-01',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1519 弄'
            }, 
            {
                date: '2016-05-03',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1516 弄'
            },
            {
                date: '2016-05-02',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
            }, 
            {
                date: '2016-05-04',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1517 弄'
            }, 
            {
                date: '2016-05-01',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1519 弄'
            }, 
        ],
            tableLabel: 
                {
                    date: 'date',
                    name: 'name',
                    address: 'address'
            },
            countData: [
                {
                    name: "今日支付订单",
                    value: 1234,
                    icon: "success",
                    color: "#2ec7c9",
                },
                {
                    name: "今日收藏订单",
                    value: 210,
                    icon: "star-on",
                    color: "#ffb980",
                },
                {
                    name: "今日未支付订单",
                    value: 1234,
                    icon: "s-goods",
                    color: "#5ab1ef",
                },
                {
                    name: "本月支付订单",
                    value: 1234,
                    icon: "success",
                    color: "#2ec7c9",
                },
                {
                    name: "本月收藏订单",
                    value: 210,
                    icon: "star-on",
                    color: "#ffb980",
                },
                {
                    name: "本月未支付订单",
                    value: 1234,
                    icon: "s-goods",
                    color: "#5ab1ef",
                },
            ]
        }
    },
    methods: {
        backLineM() {
            this.$router.push('/linemanager')
        }
    }
}
</script>
<style lang="less" scoped>
.login-info {
    p {
        line-height: 28px;
        font-size: 14px;
        color: #999999;
        span {
            color: #666666;
            margin-left: 60px;
        }
    }
}
.num {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    .icon {
        width: 80px;
        height: 80px;
        font-size: 30px;
        text-align: center;
        line-height: 80px;
        color: #fff;
    }
    .el-card {
        width: 32%;
        margin-bottom: 20px;
    }

    .detail {
        margin-left: 15px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        .price {
            font-size: 30px;
            margin-bottom: 10px;
            line-height: 30px;
            height: 30px;
            
        }
        .desc {
            font-size: 14px;
            color: #999;
            text-align: center;
        }
    }
}
.graph {
    display: flex;
    justify-content: space-between;
    .el-card {
        margin-top: 20px;
        width: 48%;
    }
}
</style>