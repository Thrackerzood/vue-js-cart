<template>
      <li>
         <router-link :to="list.href" >{{list.title}}</router-link>
      </li>
</template>

<script>


export default {
   props:['list'],
}
</script>