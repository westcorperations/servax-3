<template>
   <header>
    <!-- mobile header -->
    <div class="d-block d-lg-none">
      <div class="navigation-bar p-4">
        <div class=""><img src="../assets/img/logo.svg" alt="" /></div>
        <div class="">
          <span class="">
            <div class="" :class="{ change: normal }" @click.prevent="toggle(x)">
              <div class="bar1"></div>
              <div class="bar2"></div>
              <div class="bar3"></div>
            </div>
          </span>
        </div>
      </div>

      <div id="myNav" class="overlay" :style="{ width: width + '%' }">
        <!-- Overlay content -->
        <div class="overlay-content">
          <router-link :to="{ name: 'Home' }" class="
                   
              ">Home</router-link>
          <router-link :to="{ name: 'Team' }" class="
                
              ">Team</router-link>
          <router-link :to="{ name: 'Roadmap' }" class="
                
              ">Roadmap</router-link>
          <router-link :to="{ name: 'Tokenomics' }" class="
                
              ">Tokenomics</router-link>
          <router-link :to="{ name: 'Whitepaper' }" class="
                
              ">whitepaper</router-link>
        </div>
      </div>
      <div class="text text-center pb-2">
        <h3>Tokenomics</h3>
       
      </div>

    </div>





    <div class="d-none d-lg-block">

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
                <router-link :to="{ name: 'Tokenomics' }" class="
                
              ">Tokenomics</router-link>
                <router-link :to="{ name: 'Whitepaper' }" class="
                
              ">whitepaper</router-link>
               
              </div>
            </div>
          </div>


          <!-- planet icon/logo image -->
          <div class="planet">
            <img src="../assets/img/planet.svg" alt="" class="d-none" />
          </div>
          <!-- header text  -->
          <div class="text">
            <h3>Tokenomics</h3>
            <p class=" d-none ">But while you’re here, signup for our newsletter, so you’ll get notified when
              our roadmap is made public.</p>
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
               
              ">Team</router-link>
              </li>
              <li>
                <span class="mx-3">03</span>
                <router-link :to="{ name: 'Roadmap' }" class="
               
              ">Roadmap</router-link>
              </li>
              <li>
                <span class="mx-3">04</span>
                <router-link :to="{ name: 'Tokenomics' }" class="
               
              ">Tokenomics</router-link>
              </li>
              <li>
                <span class="mx-3">05</span>
                <router-link :to="{ name: 'Whitepaper' }" class="
               
              ">Whitepaper</router-link>
              </li>
            
            </ol>
          </div>
        </div>
      </div>


    </div>
  </header>
  
    <div class="roadmap-topbox">
    <img src="../assets/img/barchat.svg">
    
</div>



 <section class="newsletter">
            <div class="text-center content p-5">
                <h4>Signup for Our Newsletter</h4>
                <p>Get updated about ServaX and the next wave in social media evolution!</p>

                <input type="email" class="form-control" name="" id="" aria-describedby="helpId" placeholder="">
                <button type="submit" class="btn btn-success mt-3">Subscribe</button>


            </div>
        </section>

 

         <footer>
      <div class="  footer">
         
        <div class=" d-none d-lg-block  "><img src="../assets/img/logo.svg" alt="" /></div>
        <!-- <div class="col-md-12 col-lg-2 mt-col-"><h6>ServaX</h6></div> -->
        <div class=" d-none d-lg-block">
           <router-link :to="{ name: 'Home' }" class="a
                
              ">Team</router-link>
                <router-link :to="{ name: 'Team' }" class="a
                
              ">Roadmap</router-link>
                <router-link :to="{ name: 'Roadmap' }" class="a
                
              ">Roadmap</router-link>
                <router-link :to="{ name: 'Tokenomics' }" class="a 
                
              ">Tokenomics</router-link>
                <a href="mailto:customercare@servax.io" class="a">Contact</a>
        </div>
        <div class=" text-center">
         <a href="https://t.me/ServaX_Officalgroup" target="_blank"> <img src="../assets/img/telegram-black.svg" alt="px-2" class="px-3 " style="width:50px; height:50px;"></a>
          <a href="https://twitter.com/ServaX_live" target="_blank" > <img src="../assets/img/twitter-icon.svg" alt="px-2" class="px-3 w-15"></a>
         <a href="https://" target="_blank"> <img src="../assets/img/instagram-icon.svg" alt="px-2" class="px-2 w-15"></a>
        </div>

      </div>



    </footer>

</template>






<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import Barchat from '@/components/Barchat.vue'
export default {
  name: 'Roadmap',
  components: {
    Header,
    Footer,
    Barchat,
  },
  data() {
    return {
      show: false,

      width: 0,
      normal: '',
      show: true,
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
  /* background: #0E0E0E; */
  position: relative;
  width: fit-content;
  height: fit-content;
  /* border-radius: 20px; */

  margin: -300px auto 50px auto;



}

.roadmap-topbox .wrapper {

  /* align-items:center; */
display:flex; 
 justify-content:center;
  width: 600px;
  /* height: 600px; */
  /* padding: 30px; */
}

.roadmap-topbox img {
 

  
margin-bottom:20px;
  width: 900px;
  height: 600px;

  /* border-radius: 20px; */

  /* padding: 20px; */
 



}



.roadmap-topbox h3 {
  /* color:white;  */
  /* ffont-family: 'Monument Extended'; */
  font-style: normal;
  font-weight: 800;
  font-size: xx-large;
  line-height: 64px;
  height: 64px;
  color: #FCFCFC;
  padding-left: 37px;
  font-family: "Monument Extended";


}

.roadmap-topbox ul {
  /* list-style-type: none; */

  margin: 0px 40px;
  height: 100px;
  color: white;
  font-family: "DM Sans";


} 
@media screen and (max-width:800px){

  .roadmap-topbox {

  /* align-items:center; */
  position: inherit;
    width: 300px;
    height: 250px;
    /* border-radius: 10px; */

    /* padding: 20px; */
    /* margin: 10px auto 0px auto; */
    margin: -112% auto 30px auto;

border-radius: 5.89636px;
  /* width: 600px; */
  /* height: 600px; */
  /* padding: 30px; */
}

.roadmap-topbox img {
 

  
margin-bottom:20px;
  width: 265px;
  height: 266px; 
   object-fit:cenetr;
  /* border-radius: 5.89636px; */
  /* border-radius: 20px; */

  /* padding: 20px; */
 



}
}

</style>