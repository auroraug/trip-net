<template>
    <div class="header">
        <div class="l-content">
            <el-button v-on:click="handleMenu" icon="el-icon-menu" size="mini"></el-button>
            <!-- 面包屑 -->
            <span class="text">首页</span>
        </div>
        <div class="r-content">
            <el-dropdown trigger="click">
                <span class="el-dropdown-link">
                    <img class="user" src="../../image/shiba.jpg" alt="">
                </span>
                <el-dropdown-menu slot="dropdown">
                    <!-- <el-dropdown-item>个人中心</el-dropdown-item> -->
                    <el-dropdown-item>
                        <el-button class="quit" :underline="false" v-on:click="Loginout" >退出</el-button>
                        <!-- href="http://localhost:8080/#/" -->
                    </el-dropdown-item>
                    <!-- <el-dropdown-item @click="Loginout">退出</el-dropdown-item> -->
                </el-dropdown-menu>
            </el-dropdown>
        </div>
    </div>
</template>
<script>

export default {
    data() {
        return {}
    },
    methods: {
        handleMenu() {
            // 由于main.js上挂载了store实例 所以可以使用
            this.$store.commit('collapseMenu')
        },
        Loginout() {
            this.$store.commit('resetCompany')
            this.$message({
            message: '登出成功',
            type: 'success'
            });
            this.$router.push({path: '/login'})
        },

    },
    computed: {
        loadUser() {
            return this.$store.state.userinfo.user
        }
    }
    // mounted() {
    //     var userinfo = this.$route.query.id
    //     console.log(userinfo)
    // }
}
</script>
<style lang="less" scoped>
.header {
    padding: 0 20px;
    background-color: black;
    height: 60px;
    display: flex;
    justify-content: space-between; // 两端显示
    align-items: center; // 垂直居中
    .text {
        color: aliceblue;
        font-size: 14px;
        margin-left: 10px;
    }
    .r-content {
        .user {
            width: 40px;
            height: 40px;
            border-radius: 50%;
        }
        .quit {
            text-align: center;
            width: 100%;
            border: 0;
            padding: 0;
        }
    }
}
</style>
