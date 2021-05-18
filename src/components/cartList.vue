<template>
  <div class="cart" >
      <a class="a-cart" v-for="technics in cart" :key="technics.title">{{technics.title}}</a>
      <img class="img-cart"  v-for="technics in cart" :key="technics.img" :src="technics.img">
      <div class="counter">
      <a v-for="technics in cart" :key="technics.name">За все: {{price}} $</a>
      <a v-for="technics in cart" :key="technics.name">Цена товара: {{technics.price}} $</a>
      <button class="button-product-cart" @click="remove" v-for="technics in cart" :key="technics.name">Удалить товар</button>
      <button class="button-product-cart" @click="decrementV" v-for="technics in cart" :key="technics.price"> - </button>
      <a>{{counter}}</a>
      <button class="button-product-cart" @click="incrementV" v-for="technics in cart" :key="technics.id"> + </button>
      </div>
  </div>
</template>


<script>
export default {
  props:['product'],
  data(){
    return{
      counter: 0,
      cart: [],
      price: 0,
      i: 0
    }
  },
  methods:{
    remove(){
    this.counter = sessionStorage.getItem(`id: ${this.product.id}`)
      sessionStorage.removeItem(`id: ${this.product.id}`)
      this.$el.remove()
      if(this.counter > 0){
        this.$emit('req',{
        id: this.cart[0].id,
        counter: this.counter,
        price: this.price
      })
      }else{
      return
      }
    },
    incrementV(){
      this.counter ++
      this.price += this.product.price
      sessionStorage.setItem(`id: ${this.product.id}`, this.counter)
      if(this.counter > 0){
        this.$emit('req',{
        id: this.cart[0].id,
        counter: this.counter,
        price: this.price
      })
      }else{
      return
      }
    },
    decrementV(){
      if(sessionStorage.getItem(`id: ${this.product.id}`) > 1){
        this.counter--
        this.price -= this.product.price
        sessionStorage.setItem(`id: ${this.product.id}`, this.counter)
      }else{
        this.price = this.product.price
        this.counter = 1
        sessionStorage.setItem(`id: ${this.product.id}`, this.counter)
      }
      if(this.counter > 0){
        this.$emit('req',{
        id: this.cart[0].id,
        counter: this.counter,
        price: this.price
      })
      }else{
      return
      }
    },
    resetV(){
      this.counter = 0
      sessionStorage.setItem(`id: ${this.product.id}`, this.counter)
    },
  },
    created(){
    this.counter = sessionStorage.getItem(`id: ${this.product.id}`)
    if(sessionStorage.getItem(`id: ${this.product.id}`)){
      this.cart.push(this.product)
    }
    for(let i = 0;i < sessionStorage.getItem(`id: ${this.product.id}`); i++){
      this.price += this.product.price
    }
    if(this.counter > 0){ 
        this.$emit('req',{
        id: this.cart[0].id,
        counter: this.counter,
        price: this.price
      })
    }else{
      return
    }
  },
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap');
.a-cart{color: black;padding: 20px 0px 20px 0px;font-family: 'Roboto', sans-serif;}
.cart{max-width: 1000px;display: flex;flex-direction: column;text-align: center;background: white;padding: 0px;}
.counter{max-width: 100%;display: flex;justify-content: flex-end;align-items: center;font-family: 'Roboto', sans-serif;}
.counter>a{margin: 0px 20px;}
.img-cart{max-width: 200px; padding: 0 40px;}
.button-product-cart{max-width: 100px;border: none;background: rgb(255, 255, 255);color: rgb(0, 0, 0);padding: 10px 20px;font-family: 'Roboto', sans-serif;}
</style>