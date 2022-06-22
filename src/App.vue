<template>
 
 <router-view></router-view>
  
   

   
  

  </template>  


<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'App',
 components: {
   Header, 
   Footer,
 },
}
</script>
 






<style>
@font-face {
    font-family: Monument Extended;
    src: url("/assets/fonts/MonumentExtended-Regular.woff") format("woff");
}
html{
    scroll-behavior: smooth;
}
a {
    color: #FCFCFC !important;  
    text-decoration:none !important;
}
 a.active{
     color: #54FF8E !important;
 }











 
</style>
