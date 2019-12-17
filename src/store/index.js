import Vue from 'vue'
import Vuex from 'vuex'
import m from './module/m'
import authority from './module/authority'

//调试方法
import createLogger from 'vuex/dist/logger'

// 判断环境
const debug = process.env.NODE_ENV !== 'production'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    m: m,
    authority: authority,
    strict: debug,
    plugins: debug ? [createLogger()] : {}
  }
})
