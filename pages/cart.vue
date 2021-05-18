<template>
  <div class="allProduct" >
    <div v-show="hidden" class="send">
        <div class="sub_section-send">
          <div class="sub_sub_section-send" >
            <span>Ваше имя: <input name="name" class="name" v-model="name" type="text"></span>
            <span>Ваше фамилия: <input name="sub_name" class="sub_name" v-model="sub_name" type="text"></span>
            <span>Адрес: <input name="address" class="address" v-model="address" type="text"></span>
            <button type="submite" @click="send_req">Отправить заказ</button>
          </div>
        </div>
    </div>
    <CartList   v-for="(product, i) in storage" :key="i" :product="product" @req="send"/>
    <div class="send-shop_view"><a class="shop-send" @click="hidden=!hidden">Зарегестрировать заказ</a>
    </div>
  </div>
</template>

<script>
import CartList from '../src/components/cartList'
export default {
  data(){
    return{
      hidden: false,
        name: '',
        sub_name: '',
        address: '',
        allCartProduct: [],
        arrCart: [],
    }
  },
  components: { 
    CartList 
  },
  props:['storage'],
  methods:{
  send_req(){
      alert(JSON.stringify({name: this.name,sub_name: this.sub_name,address: this.address,cart: this.allCartProduct}))
    },
  send(data){
      for(let i = 0; this.allCartProduct.length; i++){
        if(this.allCartProduct[i] == data){
          this.allCartProduct[i] = data
        }else{
          this.allCartProduct.push(data)
        } 
      }
    }
  }
}
</script>


<style scoped>
.sub_section-send{display: flex;justify-content: center;align-items: center;}
.sub_sub_section-send{display: flex;justify-content: flex-end;align-items: flex-end;flex-direction: column;margin: 20px;padding: 20px;}
.sub_sub_section-send>span{margin: 30px;font-family: 'Roboto', sans-serif;}
.sub_sub_section-send>span>input{outline: none;border: none;border-bottom: 1px solid;}
.sub_sub_section-send>button{margin: 30px;border: none;padding: 10px 20px;color: white;background: black;border-radius: 5px;}
.send-shop_view{max-width: 100%;height:60px;}
.send{width: 100%;height: 100%;top: 95px;background: white;width: 1000px;margin: 0 auto;z-index: 10;position: absolute;}
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap');
.shop-send{max-width: 200px;padding: 10px 20px;margin: 20px 0px;float: right;border: none;background: black;color: white;border-radius: 5px;font-family: 'Roboto', sans-serif;}
.shop-send:hover{background: rgb(41, 41, 41);}
.allProduct{max-width: 1000px;margin: 0 auto;padding: 5px;min-height: 1000px;}
</style>