// [IMPORT] //
import Vue from 'vue'
import Vuex from 'vuex'


// [USE] //
Vue.use(Vuex)


export default new Vuex.Store({
	state: {
		node_env: localStorage.node_env == 'development' ? 'development' : 'production',

		showIntro: true,
		loading: false,
		
		showMenu: false,

		userLogged: false,
		user_decoded: {},

		adminLogged: false,
		admin_decoded: {},
	},

	// Syncrous //
	mutations: {
		isLoading(state) { state.loading = true },

		isNotLoading(state) { state.loading = false },
	},

	// Asyncronous //
	actions: {},

	getters: {},
	
	modules: {},
});
