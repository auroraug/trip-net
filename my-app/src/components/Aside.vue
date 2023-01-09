<template>
    
    <el-menu default-active="1-4-1" 
    class="el-menu-vertical-demo" 
    @open="handleOpen" 
    @close="handleClose" 
    :collapse="isCollapse" 
    background-color="#545c64" 
    text-color="#fff" 
    active-text-color="#ffd04b"
    >
    <h3>{{ isCollapse ? '后台' : '通用后台管理系统'}}</h3>
          <el-menu-item v-on:click="clickMenu(item)" v-for="item in noChildren" :key="item.name" v-bind:index="item.name">
            <i :class="`el-icon-${item.icon}`"></i>
            <span slot="title">{{item.label}}</span>
          </el-menu-item>
          <el-submenu v-for="item in hasChildren" :key="item.label" v-bind:index="item.label">
            <template slot="title">
                <i :class="`el-icon-${item.icon}`"></i>
                <span slot="title">{{item.label}}</span>
            </template>
            <el-menu-item-group v-for="subItem in item.children" :key="subItem.name">
                <el-menu-item v-on:click="clickMenu(subItem)" :index="subItem.name">{{subItem.label}}</el-menu-item>
                <!-- <el-menu-item index="1-2">选项2</el-menu-item> -->
            </el-menu-item-group>
            
        </el-submenu>
        
    </el-menu>
</template>

  
  <style lang="less" scoped>
    .el-menu-vertical-demo:not(.el-menu--collapse) {
      width: 200px;
      min-height: 400px;
    }
    .el-menu {
      height: 100vh;
      h3 {
        color: #fff;
        text-align: center;
        line-height: 48px;
        font-size: 16px;
        font-weight: 400;
      }
    }
  </style>
  
  <script>
    export default {
      data() {
        return {
          menuD: [
            {
              path: "/home",
              name: "home",
              label: "首页",
              icon: "s-home",
              url: "home",
            },
            {
              path: "/publish",
              name: "publish",
              label: "资讯",
              icon: "s-promotion",
              url: "publish",
            },
            {
              path: "/message",
              name: "message",
              label: "留言板",
              icon: "chat-round",
              url: "message",
            },
            {
              path: "/agency",
              name: "agency",
              label: "旅游公司审核",
              icon: "s-custom",
              url: "agency",
            },
            {
              path: "/lineC",
              name: "lineC",
              label: "旅游路线审核",
              icon: "location-information",
              url: "lineC",
            },
            {
              path: "/recommend",
              name: "recommend",
              label: "推荐景点",
              icon: "s-operation",
              url: "recommend",
            },
            {
              path: "/check",
              name: "check",
              label: "审查举报",
              icon: "search",
              url: "check",
            },
          ],
          companyMenuD: [
            {
              path: "/chome",
              name: "chome",
              label: "首页",
              icon: "s-home",
              url: "chome"
            },
            {
              path: "/linemanager",
              name: "linemanager",
              label: "路线管理",
              icon: "s-promotion",
              url: "linemanager"
            },
          ]
        };
      },
      methods: {
        handleOpen(key, keyPath) {
          console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
          console.log(key, keyPath);
        },
        //点击菜单
        clickMenu(item) {
            console.log(item)
            //当页面路由与跳转的路由不一致才允许跳转
            if (this.$route.path !== item.path && !(this.$route.path === '/home' && (item.path === '/'))){
            this.$router.push(item.path)
          }
        }
      },
      computed: {
        //没有子菜单
        noChildren() {
          if (this.$store.state.companyinfo.company === '' || this.$store.state.companyinfo.company === undefined || this.$store.state.companyinfo.company === null) {
            return this.menuD.filter(item => !item.children)
          }else{
            return this.companyMenuD.filter(item => !item.children)
          }
        },
        //有子菜单
        hasChildren() {
          return this.menuD.filter(item => item.children)
        },
        isCollapse() {
          // 动态加载isCollapse 的值
          return this.$store.state.tab.isCollapse
        }
      }
    }
  </script>
  <style lang="less" scoped>
.el-menu {
border-right: none;
}

</style>