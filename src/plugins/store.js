import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		token: null,
		commands: {
			last: 0,
			list: []
		},
	},
	getters: {
		isLogged(state) {
			return state.token !== null
		},
		getToken(state) {
			return state.token;
		},
		getCommands(state) {
			return state.list;
		},
	},
	mutations: {
		login(state, payload) {
			state.token = payload;
		},
		logout(state) {
			state.token = null;
		},
	},
	actions: {
		login(context, payload) {
			localStorage.setItem('token', payload);
			context.commit('login', payload);
		},
		logout(context) {
			localStorage.setItem('token', null);
			context.commit('logout', null);
		}
	},
});