import Vue from 'vue'
import Vuex from 'vuex'
import { productGetters, manufacturerGetters } from './getters'
import { productMutations, cartMutations, manufacturerMutations } from './mutations'
import { productActions, manufacturerActions } from './actions'

Vue.use(Vuex)

export default new Vuex.Store({
	strict: true,
	state: {
		cart: [],
		showLoader: false,
		product: {},
		products: [],
		manufacturers: []
	},
	getters: Object.assign({}, productGetters, manufacturerGetters),
	mutations: Object.assign({}, productMutations, cartMutations, manufacturerMutations),
	actions: Object.assign({}, productActions, manufacturerActions)
})