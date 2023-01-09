<template>
<div>
    <el-container>
        <el-header>
            <Top></Top>
        </el-header>
        <el-main>
            <router-view></router-view>
        </el-main>
        <el-footer>
            <Foot></Foot>
        </el-footer>
    </el-container>
</div>
</template>

<script>
// import router from '@/router';
import Top from '../../components/Top.vue'
import Foot from '../../components/Foot.vue'

export default {
    data() {
        return {};
    },
    components: { 
        Top,
        Foot,
    }
}
</script>
<style scoped>
.el-header {
    padding: 0;
}
.el-main {
    position: relative;
    margin: 105px auto;
    width: 1240px;
}
.el-footer {
    text-align: center;
    padding: 0;
}
</style>