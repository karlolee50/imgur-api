import api from '../../api/imgur';
import qs from 'qs';

const state = {
    token: ''
};

const getters = {
    isLoggedIn: state => !!state.token
};

const actions = {
    login: () => {
        api.login();
    },

    finalizeLogin: ({ commit }, hash) => {
        const query = qs.parse(hash.replace('#', ''));

        commit('setToken', query.access_token);
    },

    logout: ({commit}) => {
        commit('setToken', null);
    },

    test: () => {
        console.log('test test');
    }
};

const mutations = {
    setToken: (state, token) => {
        state.token = token;
    }
};

export default{
    state,
    getters,
    actions,
    mutations
}
