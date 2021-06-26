import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
export default new Vuex.Store({
    state: {
        tokenUser: 'test',
    },
    getters: {
        getTokenUser: state => {
            return state.tokenUser;
        },


    },
    mutations: {
        fillTokenUser: (state, payload) => {
            state.tokenUser = payload;
        },
        emptyTokenUser: (state) => {
            state.token = null;
        },


    },
    actions: {
        FILL_TOKEN_USER: (context, payload) => {
            context.commit('fillTokenUser', payload);
        },
        EMPTY_TOKEN_USER: (context) => {
            context.commit('emptyTokenUser');
        },

    }

})
