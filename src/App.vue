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


.listtopnav{

  font-family:DM Sans;
    margin: 0 auto;

}
.listtopnav a{
   color: #FCFCFC;
    text-decoration: none;
    font: 20px DM Sans;
    margin: 0px 10px;
    padding: 10px 10px;
    position: relative;
    z-index: 0;
    cursor: pointer; 
}
div.borderXwidth a:before, div.borderXwidth a:after
{
    position: absolute;
    opacity: 0;
    width: 0%;
    height: 2px;
    content: '';
    background: #FFF;
    transition: all 0.3s;
}

div.borderXwidth a:before
{
    left: 0px;
    top: 0px;
}

div.borderXwidth a:after
{
    right: 0px;
    bottom: 0px;
}

div.borderXwidth a:hover:before, div.borderXwidth a:hover:after
{
    opacity: 1;
    width: 100%;
}












 
</style>
