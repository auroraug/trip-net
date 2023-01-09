import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/login.vue'
import Register from '../views/register.vue'
import Home from '../views/Home.vue'
import User from '../views/User.vue'
import Main from '../views/Main.vue'
import Mall from '../views/Mall.vue'
import PageOne from '../views/PageOne.vue'
import PageTwo from '../views/PageTwo.vue'
import Shouye from '../views/frontendViews/shouye.vue'
import main from '../views/frontendViews/main.vue'
import Zixun from '../views/frontendViews/zixun.vue'
import Jingdian from '../views/frontendViews/jingdian.vue'
import Luxian from '../views/frontendViews/luxian.vue'
import Gonglue from '../views/frontendViews/gonglue.vue'
import Liuyanban from '../views/frontendViews/mes.vue'
import Issue from '../views/publish.vue'
import Mes from '../views/messageM.vue'
import AgencyM from '../views/AgencyM.vue'
import Line from '../views/LineM.vue'
import setRecommend from '../views/Recommend'
import Check from '../views/Check.vue'
import upload from '../views/upload.vue'
import Read from '../views/frontendViews/read.vue'
import GonglueView from '../views/frontendViews/gonglue-view.vue'
import WriteTips from '../views/frontendViews/writeTips.vue'
import WatchTip from '../views/frontendViews/watchTip.vue'
import Test from '../views/test.vue'
import LuxianDetail from '../views/frontendViews/luxianDetail.vue'
import CHome from '../views/CHome.vue'
import LineM from '../views/LineM.vue'
import SignDetail from '../views/SignDetail.vue'

Vue.use(VueRouter)

//1.创建路由组件
//2.将路由与组件映射
//3.创建router实例
//4.创建和挂载根实例

const routes = [
    //后台管理
    { //admin主路由
      path: '/home', 
      component: Main,
      redirect: '/home', // 重定向
      //子路由
      children: [
        { path: '/home', component: Home }, //首页
        { path: '/publish', component: Issue }, //发布资讯
        { path: '/message', component: Mes }, //留言板
        { path: '/agency', component: AgencyM }, //旅游公司管理
        { path: '/lineC', component: Line }, //旅游路线审核
        { path: '/recommend', component: setRecommend }, //查看设置推荐景点
        { path: '/check', component: Check}, //审查举报
      ]
    },
    { //company 主路由
      path: '/chome',
      component: Main,
      redirect: '/chome',
      children: [
        { path: '/chome', component: CHome },
        { path: '/linemanager', component: LineM },
        { path: '/signdetail', component: SignDetail },
      ]
    },
    {
      //登录页面
      path: '/login',
      component: Login,
    },
    {
      //注册页面
      path: '/register',
      component: Register
    },
      //发布资讯
    {
      path: '/upload',
      component: upload,
    },
    //查看资讯
    {
      path: '/read',
      component: Read,
    },
    //查看攻略
    {
      path: '/viewTips',
      component: GonglueView
    },
    //写攻略
    {
      path: '/writeTips',
      component: WriteTips,
    },
    //查看攻略
    {
      path: '/watchTip',
      component: WatchTip,
    },
    //路线细节
    {
      path: '/luxiandetail',
      component: LuxianDetail
    },
    // 测试
    {
      path: '/test',
      component: Test
    },
    {
      //旅游网站主路由
      path: '/',
      component: main,
      redirect: '/shouye',
      //子路由
      children: [
        { path: '/shouye', component: Shouye },
        { path: '/zixun', component: Zixun },
        { path: '/jingdian', component: Jingdian },
        { path: '/luxian', component: Luxian },
        { path: '/gonglue', component: Gonglue },
        { path: '/mes', component: Liuyanban },
      ]
    },
  ]

const router = new VueRouter({
    routes // (缩写) 相当于 routes: routes
})

//获取原型对象上的push函数
const originalPush = VueRouter.prototype.push
//修改原型对象中的push方法
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

export default router