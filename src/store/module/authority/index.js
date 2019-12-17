export default {
    //是否对应模块名响应数据
    namespaced: true,
    state: {
        count:1
    },
    mutations: {
        increment(state) { 
            //这的state是模块的局部状态
            state.count++
        }
    },
    getters: {
        doubleCount(state) { 
            return state.count*5
        },
        // 对于模块内部的getter,根节点状态会作为第三个参数暴露出来
        sumWithRootCount(state,getters,rootState) { 
            return state.count + rootState.count
        }
    },
    actions: {
        // 同样，对于模块内部的action,局部状态通过context.state暴露出来，根节点状态作为context.rootState
        incrementIfOddOnRootSum({ state, commit, rootState }) { 
            console.log('12334')
            console.log(state)
            console.log(state.count + rootState.count)
            if ((state.count + rootState.count) % 2 === 1) { 
                commit('increment')
            }
        }
    }
}