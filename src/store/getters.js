export const productGetters = {
	//all products
	allProducts: (state, getters) => {
		return state.products
	},
	//get product by id
	productById: (state, getters) => id => {
		if (getters.allProducts.length > 0) {
			return getters.allProducts.filter(p => p._id === id)[0]
		} else {
			return state.product
		}
	},
}

export const manufacturerGetters = {
	//all manufacturers
	allManufacturers: state => state.manufacturers
}
