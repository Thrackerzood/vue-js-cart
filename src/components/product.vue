<template>
    <section class="product">
      <img :src="this.product.img" class="img-product">
      <h1>{{this.product.title}}</h1>
      <div>
      <p class="product-price">{{`количество на складе: ${this.product.stock}`}}</p>
      <button class="button-product" @click="increment">Добавить в корзину: {{this.product.price}}</button>
      </div>
   </section>
</template>

<script>
export default {
  props:['product'],
  data(){
    return{
      counter: 0,
    }
  },
  methods:{
    increment(){
      this.counter++
      sessionStorage.setItem(`id: ${this.product.id}`, this.counter)
    }
  },
  created(){
    this.counter = sessionStorage.getItem(`id: ${this.product.id}`)
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap');
.product>div{display: flex;justify-content: center;  flex-direction: column;align-items: center;margin: 10px;}
.product{max-width: 100%;margin: 50px 0px;font-family: 'Roboto', sans-serif;display: grid;grid-template: repeat(1 , 1fr)/repeat(2 , auto);align-items: flex-start; justify-items: center;background: rgb(255, 255, 255);padding: 20px;border-radius: 15px;}
.product>div>button{padding: 10px 15px;margin: 25px;border: none;background: black;color: white;border-radius: 10px;font-family: 'Roboto', sans-serif;}
.product>div>button:hover{background: rgb(48, 48, 48);}
.product>img{max-width: 150px;margin: 15px;}
.product>p{color: black;font-family: 'Roboto', sans-serif;}
</style>