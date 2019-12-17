import * as actions from './actions'
import * as getters from './getters'
import state from './state'
import mutations from './mutations'

export default {
    //是否对应模块名响应数据
    namespaced: true,
    actions,
    getters,
    state,
    mutations
}