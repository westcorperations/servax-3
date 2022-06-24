<template>
      <header>
    <div class="d-none d-lg-block p-3"><img src="../assets/img/logo.svg" alt="" /></div>
    <div class="wrapper">
      <div class="text-container">
        <!-- navigation bar setion -->
        <div class="navigation-bar p-2 d-lg-none">
          <!-- Logo -->
          <div class=""><img src="../assets/img/logo.svg" alt="" /></div>
          <!-- navbar icon  -->
          <div class="">
            <span class="">
              <div class="" :class="{ change: normal }" @click.prevent="toggle(x)">
                <div class="bar1"></div>
                <div class="bar2"></div>
                <div class="bar3"></div>
              </div>
            </span>
          </div>

          <!-- nav bar links mobile -->
          <div id="myNav" class="overlay" :style="{ width: width + '%' }">
            <!-- Overlay content -->
            <div class="overlay-content">
              <router-link :to="{ name: 'Home' }" class="
                
              ">Team</router-link>
             <router-link :to="{ name: 'Team' }" class="
                
              ">Roadmap</router-link>
              <router-link :to="{ name: 'Roadmap' }" class="
                
              ">Roadmap</router-link>
              <a href="tokenomics.html">Tokenomics</a>
              <a href="whitepaper.html">White Paper</a>
            </div>
          </div>
         </div>


        <!-- planet icon/logo image -->
        <div class="planet">
          <img src="../assets/img/planet.svg" alt="" class="d-none" />
        </div>
        <!-- header text  -->
        <div class="text">
          <h3>Tokenomics </h3>
           <p class=" d-none ">But while you’re here, signup for our newsletter, so you’ll get notified when our roadmap is made public.</p>
          <div>
            
          </div>
        </div>
      </div>
      <div class="list-container d-none d-lg-block">
        <div class="list d-none d-lg-block">
            <ol>
                         <li>
              <span class="mx-3">01</span>
              <router-link :to="{ name: 'Home' }" class="
               
              ">Home</router-link>
            </li>
            <li><span class="mx-3">02</span>
            <router-link :to="{ name: 'Team' }" class="
               
              ">Team</router-link></li>
            <li>
              <span class="mx-3">03</span> <router-link
              :to="{ name: 'Roadmap' }"
              class="
               
              "
              >Roadmap</router-link
            >
            </li>
            <li>
              <span class="mx-3">04</span><router-link
              :to="{ name: 'Tokenomics' }"
              class="
               
              "
              >Tokenomics</router-link
            >
            </li>
           <li>
                            <span class="mx-3">05</span><a href="whitepaper.html"> white paper</a>
                        </li>
                    </ol>
        </div>
      </div>
    </div>
  </header>

  <div class="roadmap-topbox "> 
    <div class=" wrapper">
  <h3>Phase 1</h3>   
 <ul>
<li>Presales</li>
<li>CEX Listing</li>
<li>Genesis NTF Collection</li>
<li>ServaX Commerce Testnet</li>
<li>ServaX Social</li>
<li>Wallet</li>
<li>ServaX App (Android and iOS)</li>
<li>ServaX Commerce Mainnet</li>
</ul>




 
</div>
</div>


</template>






<script>
 import Header from '@/components/Header.vue'
 import Footer from '@/components/Footer.vue'
export default {
  name: 'Roadmap',
  components: {
    Header,
     Footer,
  },
  data() {
   return {
      show:false,
       
      width: 0,
      normal: '',
       show:true, 
   }
  },

  
    
    
  methods: {
    toggle() {
      if (this.normal == '') {
        this.normal = 'change';
      } else {
        this.normal = '';
      }
      if (this.width === 0) {
        this.width = 50;
      } else {
        this.width = 0;
      }
    },
  },
}
</script>

<style scoped>

.roadmap-topbox {

    z-index: 9;
    background: #0E0E0E;
    position:relative;
    width: 900px;
    height: 400px;
    /* border-radius: 20px; */
    
    /* padding: 20px; */
    margin: -180px auto 0px auto;

    

}
 .roadmap-topbox .wrapper{
   
    /* align-items:center; */
   
    padding:50px;
 }
 .roadmap-topbox h3{ 
/* color:white;  */
/* ffont-family: 'Monument Extended'; */
font-style: normal;
font-weight: 800;
font-size: xx-large;
line-height: 64px;
height:64px;
color: #FCFCFC;
 padding-left: 37px;
    font-family: "Monument Extended";


 }
 .roadmap-topbox  ul{
    /* list-style-type: none; */
   
   margin:0px 40px;
    height:100px;
    color: white;
    font-family: "DM Sans";


 }


</style>