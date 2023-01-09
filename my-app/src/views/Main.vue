<template>
    <div>
        <el-container>
            <el-aside width="auto">
                <!-- 以组件命名 -->
                <Aside></Aside>
            </el-aside>    
            <el-container>
                    <el-header>
                        <Header></Header>
                    </el-header>
                    <el-main>
                        <!-- 路由出口 -->
                        <!-- 路由匹配到的组件将渲染在这里 -->
                        <router-view></router-view>
                    </el-main>
            </el-container>
        </el-container>
    </div>
</template>
<script>
// import router from '@/router';
import Aside from '../components/Aside.vue'
import Header from '../components/Header.vue'

export default {
    data() {
        return {};
    },
    components: { 
        Aside,
        Header,
    }
}
</script>
<style scoped>
.el-header {
    padding: 0;
}
</style>