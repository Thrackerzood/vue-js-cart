<template>
   <header>
      <ul>
         <HeaderList v-for="list in list" :list="list" :key="list.title"/>
      </ul>
   </header>
</template>

<script>
import HeaderList from './headerList'
export default {
   props:['list'],
   components:{
      HeaderList
   }
}
</script>


<style>
   @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
   header{max-width: 100%;background: black;color: white;font-family: 'Roboto', sans-serif;}
   header>ul{display: flex;}
   header>ul>li{padding: 20px;list-style: none;}
   header>ul>li>a{text-decoration: none;color: white;}
</style>