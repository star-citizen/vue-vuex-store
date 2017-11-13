<template>
	<product-form @save-product="addProduct" :model="model" :manufacturers="manufacturers">
	</product-form>
</template>

<script>
import ProductForm from '@/components/product/ProductForm.vue'
export default {
  data () {
    return {
    	model: {},
    	//temp manufacturers
    	manufacturers: [
    	  {
    	  	_id: 'creep',
    	  	name: 'Creep',
    	  },
    	  {
    	  	_id: 'blah',
    	  	name: 'Blah'
    	  }
    	],
    }
  },
  methods: {
  	addProduct (model) {
  		console.log('model', model)
  	}
  },
  components: {
  	'product-form': ProductForm
  }
}
</script>