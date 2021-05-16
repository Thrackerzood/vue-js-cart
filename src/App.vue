<template>
  <div id="app">
    <Header :list="headerList"/>
    <router-view :storage="storage"/>
    <Footer/>
  </div>
</template>

<script>
import Header from './components/header'
import Footer from './components/footer'
export default {
  name: 'App',
  components: {
    Footer,
    Header,
  },
  data(){
    return {
      storage: [
        {id: 1, title: 'CPU',img: 'https://pngimg.com/uploads/cpu/cpu_PNG43.png', price: 300, stock: 35},
        {id: 2, title: 'GPU',img: 'https://image.flaticon.com/icons/png/512/1495/1495635.png',price: 450, stock: 15},
        {id: 3, title: 'RAM',img: 'https://freepngimg.com/thumb/technology/52247-9-ram-hq-image-free-png.png',price: 50, stock: 25},
      ],
      headerList: [
        {id: 1,title: 'Главная',href: '/'},
        {id: 2,title: 'Магазин',href: '/shop'},
        {id: 3,title: 'Корзина', href: '/cart'},
        {id: 4,title: 'Вход', href: '/regisration'},
        
      ]
    }
  }
}
</script>

<style>
body{background: rgb(233, 233, 233);}
</style>
