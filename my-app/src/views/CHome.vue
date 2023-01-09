<template>
    <el-descriptions title="旅游公司信息"  direction="vertical" :column="4" border>
        <el-descriptions-item label="用户名">{{ companyInfo.userName }}</el-descriptions-item>
        <el-descriptions-item label="联系电话">{{ companyInfo.phone }}</el-descriptions-item>
        <el-descriptions-item label="居住地" :span="2">{{ companyInfo.lp }}</el-descriptions-item>
        <el-descriptions-item label="备注">
            <el-tag size="small">公司</el-tag>
        </el-descriptions-item>
        <el-descriptions-item label="联系地址">{{ companyInfo.address }}</el-descriptions-item>
    </el-descriptions>
</template>
<script>
export default {
    data() {
        return {
            companyInfo: {
                userName: 'kooriookami',
                phone: '18100000000',
                lp: '苏州市',
                address: '江苏省苏州市吴中区吴中大道 1188 号'
            }
        }
    },
    mounted() {
        const company = this.$store.state.companyinfo.company.userName
        console.log(company)
        this.axios.post('http://localhost:8085/gm/getCompanyInfo',company).then((resp) => {
            let data = resp.data
            this.companyInfo = data.data
            console.log(data)
        })
    }
}
</script>