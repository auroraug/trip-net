import Vue from "vue";
import Vuex from 'vuex'
import tab from '../store/tab'
import userinfo from "../store/userinfo";
import order from "../store/order";
import companyinfo from "../store/companyinfo";
import admininfo from "../store/admininfo";
import search from "../store/search";

Vue.use(Vuex)

//创建vuex的实例
export default new Vuex.Store({
      modules: {
            tab,
            userinfo,
            order,
            companyinfo,
            admininfo,
            search
      }
})