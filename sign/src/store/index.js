import Vue from 'vue';
import Vuex from 'vuex';
import createLogger from 'vuex/dist/logger';

// 挂载modules
import index from './modules/index'
import interview from './modules/interview'
import sign from './modules/sign'

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        index,
        interview,
        sign
    },

    //成为全剧用的时候不需要使用那个东西
    state: {
        info: {} //用户信息
    },
    mutations: {
        //更新全局state
        updateState(state, payload) {
            state.info = payload
        }
    },
    plugins: [createLogger()]
})