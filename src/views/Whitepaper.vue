<template>
 <Header  heading="White Paper" subheading=" Download and preview the ServerX  whitepaper pdf file  "  />
 
   
            <section class="main-wrapper w-100 "> 
        
            <div class="mini-wrapper top">     
                 <div class="mb-2">
                 <img src="../assets/pdf/servex.svg" alt="" class="img" srcset="">  
                 </div> 
                 <div class="mb-2">
                 <img src="../assets/pdf/whats-servex.svg" alt="" class="img" srcset="">  
                 </div> 
                 </div>
            <div class="mini-wrapper">     
                 <div class="mb-2">
                 <img src="../assets/pdf/intoserver.svg" alt="" class="img" srcset="">  
                 </div> 
                 <div class="mb-2">
                 <img  src="../assets/pdf/academy.svg" alt="" class="img" srcset="">  
                 </div> 
                 </div>
                 
            <div class="mini-wrapper">     
                 <div class="mb-2">
                 <img src="../assets/pdf/academy.svg" alt="" class="img" srcset="">  
                 </div> 
                 <div class="mb-2">
                 <img  src="../assets/pdf/social.svg"  alt="" class="img" srcset="">  
                 </div> 
                 </div>
            <div class="mini-wrapper">     
                 <div class="mb">
                 <img src="../assets/pdf/academy.svg" alt="" class="img" srcset="">  
                 </div> 
                 <div class="mb-2">
                 <img  src="../assets/pdf/social.svg"  alt="" class="img" srcset="">  
                 </div> 
                 </div>
            <div class="mini-wrapper ">     
                 <div class="mb-2">
                 <img src="../assets/pdf/walet.svg" alt="" class="img" srcset="">  
                 </div> 
                 <div class="mb-2">
                 <img  src="../assets/pdf/market.svg"  alt="" class="img" srcset="">  
                 </div> 
                 </div>
            <div class="mini-wrapper ">     
                 <div class="mb-2">
                 <img src="../assets/pdf/change.svg" alt="" class="img" srcset="">  
                 </div> 
                 <div class="mb-2">
                 <img  src="../assets/pdf/commerce.svg" alt="" class="img" srcset="">  
                 </div> 
                 </div>
            <div class="mini-wrapper ">     
                 <div class="mb-2">
                 <img src="../assets/pdf/xverse.svg" alt="" class="img" srcset="">  
                 </div> 
                 <div class="mb-2">
                 <img src="../assets/pdf/box11.svg" alt="" class="img" srcset="">  
                 </div>
                 </div>
            <div class="mini-wrapper ">     
                  
                 <div class="mb-2">
                 <img  src="../assets/pdf/box13.svg" alt="" class="img" srcset="">  
                 </div>
                 <div class="mb2">
                 <img  src="../assets/pdf/box14.svg" alt="" class="img" srcset="">  
                 </div>  
                 </div>
            

          
        
    </section>
    
    
     <section class="section1 container "> 
        <div class="row justify-content-center"> 
            <div class=" row pt-5 mb-5 pb-5 mt-5 "> 
                 <a :href="`${publicPath}ServaXWhitePaper.pdf`" class="btn btn-success w-100 mx-auto align-center"
                  download="servax witepaper" role="button">Download PDF</a>
         </div>  
        </div>
    </section>
    
   
   
    
  
  


    
   
 




   
<Footer />
    


</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import Upbox from '@/components/Upbox.vue'

export default {
    name: 'Whitepaper',
    components: {
        Header,
        Footer,
        Upbox,
    },

data () {
  return {
  publicPath: process.env.BASE_URL
  }
}


    
}
</script>

<style scoped>

.top{
    position:relative;
     z-index:9;
    margin-top:-200px ;
}
.main-wrapper{
    display:flex;
    flex-direction:column;
    /* background:red; */
    width:100%; 
    margin:0;
    padding:0;
    
    
}
.main-wrapper .mini-wrapper{
display:flex;
flex-direction:row;
justify-content:space-evenly;
/* width:100%; */
margin:10px ;
}
 
.img{
  /* flex-grow: ; */
   max-width:600px;
    height:100%;
width:100%;
}
  
 @media screen and ( max-width: 800px){
    .img{
    max-width:100%;
    margin:10px 0; 
    /* height:320px; */
width:100%;
/* align-items:center; */

}
.main-wrapper .mini-wrapper{ 
    flex-direction:column; 
   
}  

 } 
</style>