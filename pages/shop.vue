<template>
  <div class="allProduct" >
    <Product   v-for="(product, i) in storage" :key="i" :product="product"/>
  </div>
</template>

<script>
import Product from '../src/components/product'
export default {
  components: { 
    Product 
  },
  props:['storage'],
}
</script>


<style scoped>
.allProduct{max-width: 1000px;margin: 0 auto;padding: 5px;}
</style>