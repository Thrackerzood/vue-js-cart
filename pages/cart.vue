<template>
  <div class="allProduct" >
    <section v-show="hidden" class="send">
      
    </section>
    <CartList   v-for="(product, i) in storage" :key="i" :product="product"/>
    <div class="send-shop_view"><a class="shop-send" @click="hidden=!hidden">Зарегестрировать заказ</a></div>
    
  </div>
</template>

<script>
import CartList from '../src/components/cartList'
export default {
  data(){
    return{
      hidden: false
    }
  },
  components: { 
    CartList 
  },
  props:['storage'],
  methods:{
  sendOrder(){
      
    }
  }
}
</script>


<style scoped>
.send-shop_view{max-width: 100%;height:60px;}
.send{width: 100%;height: 100%;top: 95px;background: white;width: 1000px;margin: 0 auto;z-index: 10;position: absolute;}
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap');
.shop-send{max-width: 200px;padding: 10px 20px;margin: 20px 0px;float: right;border: none;background: black;color: white;border-radius: 5px;font-family: 'Roboto', sans-serif;}
.shop-send:hover{background: rgb(41, 41, 41);}
.allProduct{max-width: 1000px;margin: 0 auto;padding: 5px;min-height: 1000px;}
</style>