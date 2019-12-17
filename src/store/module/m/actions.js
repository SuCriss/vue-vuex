import * as types from './mutation-types'
export const incrementIfOddOnRootSum = ({ state, commit, rootState }) => { 
    if ((state.count + rootState.count) % 2 === 1) { 
        commit([types.SET_INCREMENT])
    }
}