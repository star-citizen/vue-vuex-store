<template>
    <div>
        <product-details :product="product" :isAdding="true" ></product-details>
    </div>
</template>

<script>
  import ProductDetails from '../components/product/ProductDetails'
  export default {
    created () {
      // check to see if product exists
      if (!this.product.name) {
        this.$store.dispatch('productById', this.$route.params['id'])
      }
    },
    computed: {
      product () {
        return this.$store.getters.productById(this.$route.params['id'])
      }
    },
    components: {
      'product-details': ProductDetails
    }
  }
</script>