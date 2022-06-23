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
          <h3>ServaX Roadmap</h3>
           <p class=" d-none d-lg-block">But while you’re here, signup for our newsletter, so you’ll get notified when our roadmap is made public.</p>
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
              <span class="mx-3">04</span><a href="tokenomics.html"> Tokenomics</a>
            </li>
            <li>
              <span class="mx-3">05</span><a href="whitepaper.html"> white paper</a>
            </li>
          </ol>
        </div>
      </div>
    </div>
  </header>

 <div class="body">
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
<div class="roadmap-box"> 
    <div class=" wrapper">
         <h3>Phase 2</h3> 
         <ul>
<li>Media and Influencer Marketing</li>
<li>ServaX DEX Mainent</li>
<li>ServaX Academy Mainnet</li>
<li>Second NFT Collection</li>
<li>Tier 1 Exchange Listing</li>
<li>NFT Marketplace Launch (ServaX Market)</li>
<li>Ecosytem Scaling</li>
<li>ServaX Fiat (USDX)</li>
</ul>
</div>
</div>  
<div class="roadmap-box-sm"> 
    <div class=" wrapper">
         <h3>Phase 3</h3> 
         <ul>
<li>Global Tour and Connect</li>
<li>XVerse Development and Launch</li>
</ul>
</div>
</div>  
<div class="roadmap-box-sm"> 
    <div class=" wrapper">
         <h3>Phase4</h3> 
         <ul>
<li>Roadmap 2.0</li>
</ul>
</div>
</div>  
<section class="newsletter">  
        <div class="text-center content p-5" >
<h4>Signup for Our Newsletter</h4> 
<p>Get updated about ServaX and the next wave in social media evolution!</p>
 
   <input type="email"
     class="form-control" name="" id="" aria-describedby="helpId" placeholder=""> 
<button type="submit" class="btn btn-success mt-3">Subscribe</button>
      

</div>
    </section>
     


      



<footer> 
<div class="row  container footer"> 
   <!-- <div class="col-md-12 col-lg-2 mt-col-"><h6>ServaX</h6></div> -->
    <div class="col-md-12 col-lg-5  text-center d-none d-lg-block">
        <a href="index.html" class="px-2">Home</a>
        <a href="team.html" class="px-2">Team</a>
        <a href="roadmap.html" class="px-2">Roadmap</a>
        <a href="tokenomics.html" class="px-2">Tekenomics</a>
     </div>
      <div class="col-lg-5 col-md-12 text-center"> 
       <img src="../assets/img/twitter-icon.svg" alt="" class="px-3">
       <img src="../assets/img/linkin-icon.svg" alt="" class="px-3">
       <img src="../assets/img/instagram-icon.svg" alt="" class="px-3">
    </div>
     
</div>
     
     
     
</footer>
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


<style  scoped>




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
.roadmap-box{
 background: #0E0E0E;
    position:relative;
    width: 900px;
    height: 400px;
margin: 20px auto 20px auto;

}
.roadmap-box-sm{
 background: #0E0E0E;
    position:relative;
    width: 900px;
    height: 200px;
margin: 20px auto 20px auto;

}



 .roadmap-box .wrapper{
   
    /* align-items:center; */
   
    padding:50px;
 }
 .roadmap-box h3{ 
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
 .roadmap-box  ul{
    /* list-style-type: none; */
   
   margin:0px 40px;
    height:100px;
    color: white;
    font-family: "DM Sans";


 }

 .roadmap-box-sm .wrapper{
   
    /* align-items:center; */
   
    padding:50px;
 }
 .roadmap-box-sm h3{ 
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
 .roadmap-box-sm  ul{
    /* list-style-type: none; */
   
   margin:0px 40px;
    height:100px;
    color: white;
    font-family: "DM Sans";


 }

@media only screen and  (max-width: 991px){

.body{
   
background:radial-gradient(100% 239.5% at 0% 0%, #4789BE 0%, #000854 100%);
}
 
.roadmap-topbox {

   
   
    
    width:300px;
    height: 250px;
    border-radius: 10px;
    
    /* padding: 20px; */
    /* margin: 10px auto 0px auto; */
    margin: -110% auto 0px auto;

    

}
 .roadmap-topbox .wrapper{
   
    /* align-items:center; */
   height:250px;
    padding:20px 10px;
 }
 .roadmap-topbox h3{ 
/* color:white;  */
/* ffont-family: 'Monument Extended'; */
font-style: normal;
font-weight: 800;
font-size: large;
line-height: 24px;
height:24px; 
width:105px;
color: #FCFCFC;
 /* padding-left: 0px; */
    font-family: "Monument Extended";


 }
 .roadmap-topbox  ul {
    /* list-style-type: none; */
   width:225px;
   margin:10px 10px;
    height:130px; 
     font-weight:500;
    color: white;
    font-family: "DM Sans"; 
    font-size:9px;
    line-height:11px;
/* padding:5px 0px; */

 } 
 li{
padding:5px;
width:230px;
 }
 
.roadmap-box{
  width:300px;
    height: 250px;
    border-radius: 10px;

}
.roadmap-box-sm{
 background: #0E0E0E;
    position:relative;
    width: 300px;
    height: 140px;
margin: 10px auto 10px auto;

}



 .roadmap-box .wrapper{
   
    /* align-items:center; */
    height:250px;
    padding:20px 5px;
   
 }
 .roadmap-box h3{ 
/* color:white;  */
/* ffont-family: 'Monument Extended'; */
font-style: normal;
font-weight: 800;
font-size: 20px;
line-height: 24px;
height:24px; 
width:108px;
color: #FCFCFC;
 /* padding-left: 0px; */
    font-family: "Monument Extended";

 }
 .roadmap-box  ul{
    /* list-style-type: none; */
   
   width:225px;
   margin:10px 10px;
    height:130px; 
     font-weight:500;
    color: white;
    font-family: "DM Sans"; 
    font-size:9px;
    line-height:11px;


 }

 .roadmap-box-sm .wrapper{
   
    /* align-items:center; */
   
    height:140px;
    padding:20px 5px;
 }
 .roadmap-box-sm h3{ 
/* color:white;  */
/* ffont-family: 'Monument Extended'; */
font-style: normal;
font-weight: 800;
font-size: 20px;
line-height: 24px;
width: 108px;
height: 24px;
color: #FCFCFC;
 
    font-family: "Monument Extended";


 }
 .roadmap-box-sm  ul{
    /* list-style-type: none; */
   
   width:225px;
    height:56px;
    font-family: 'DM Sans';
font-style: normal;
font-weight: 500;
font-size: 9px;
line-height: 11px;
margin:10px;
color: #FCFCFC;


 }




}

 header {
   max-width: 100vw !important;
   height: 100vh;
   /* background: radial-gradient(100% 218.5% at 0% 0%, #000854 0%, #000854 100%); */
   /* background:radial-gradient(circle at 0% 2%, rgba(168, 238, 130, 1) 0%, rgba(5, 3, 183, 1) 24%); */
 
   /* ff 3.6+ */
 
   /* ff 3.6+ */
 
   /* ff 3.6+ */
   background: -moz-linear-gradient(205deg,
       rgba(0, 8, 84, 1) 63%,
       rgba(52, 255, 142, 1) 100%);
 
   /* safari 5.1+,chrome 10+ */
   background: -webkit-linear-gradient(205deg,
       rgba(0, 8, 84, 1) 63%,
       rgba(52, 255, 142, 1) 100%);
 
   /* opera 11.10+ */
   background: -o-linear-gradient(205deg,
       rgba(0, 8, 84, 1) 63%,
       rgba(52, 255, 142, 1) 100%);
 
   /* ie 6-9 */
   filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#34FF8E', endColorstr='#000854', GradientType=1);
 
   /* ie 10+ */
   background: -ms-linear-gradient(205deg,
       rgba(0, 8, 84, 1) 63%,
       rgba(52, 255, 142, 1) 100%);
 
   /* global 94%+ browsers support */
   background: linear-gradient(205deg,
       rgba(0, 8, 84, 1) 63%,
       rgba(52, 255, 142, 1) 100%);
 }
 
 header .wrapper {
   height: 100%;
   display: flex;
   flex-direction: row;
 }
 
 header .wrapper .text-container {
   /* position:absolute; */
   margin-top: 40px;
   padding-top: 3%;
   max-width: 100%;
   flex-grow: 8;
   background: linear-gradient(111.08deg,
       rgba(255, 255, 255, 0.35) 4.12%,
       rgba(255, 255, 255, 0.1) 99.32%);
   border: 1px solid rgba(255, 255, 255, 0.3);
   backdrop-filter: blur(15px);
 }
 
 header .wrapper .text-container .text {
   display: flex;
   /* background: red;  */
   margin: 10px;
   /* height:40px; */
   justify-content: center;
 
   flex-direction: column;
 }
 
 header .wrapper .text-container h3 {
   /* width: fit-content; */
   /* text-shadow: 3px 3px 6px rgba(0, 0, 0, 0.5); */
   margin: 12px auto;
 
   width: 650px;
   /* height: fit-content; */
   font-family: "Monument Extended";
   font-style: normal;
   font-weight: 800;
   font-size: 32.6896px;
   line-height: 3.5rem;
 
   color: #fcfcfc;
 }
 
 header .wrapper .text-container p {
   /* background-color: red;  */
   width: 650px;
   /* text-shadow: 2px 3px 2px rgba(0, 0, 0, 0.5); */
   /* 'background-color:red ; */
   margin: 12px auto;
 
   padding: 4px;
   font-family: "DM Sans";
   font-style: normal;
   font-weight: 500;
   font-size: 20px;
   line-height: 31px;
 
   color: #fcfcfc;
 }
 
 header .wrapper .list-container {
   /* height: 100%; */
   margin-top: 40px;
   flex-grow: 8;
 }
 
 header .wrapper .list-container .list {
   display: flex;
   flex-direction: row;
   align-items: flex-start;
   padding: 0px;
   /* background-color: green; */
   gap: 21px;
 }
 
 header .wrapper .list-container .list li {
   list-style-type: none;
   /* width: 124px;
      height: 21px; */
   color: #fcfcfc;
   font-family: "DM Sans";
   font-style: normal;
   font-weight: 500;
   font-size: 16px;
   padding-bottom: 10px;
   line-height: 21px;
 }
 
 .navbar-toggler {
   border: 5px solid white !important;
 }
 
 .overlay {
   /* Height & width depends on how you want to reveal the overlay (see JS below) */
   height: 30%;
   width: 0;
   position: fixed;
   /* Stay in place */
   z-index: 1;
   /* Sit on top */
   left: 0;
   top: 0;
   background-color: rgb(0, 0, 0);
   /* Black fallback color */
   background-color: rgba(0, 0, 0, 0.9);
   /* Black w/opacity */
   overflow-x: hidden;
   /* Disable horizontal scroll */
   transition: 0.5s;
   /* 0.5 second transition effect to slide in or slide down the overlay (height or width, depending on reveal) */
 }
 
 /* Position the content inside the overlay */
 .overlay-content {
   position: relative;
   /* top: 25%; */
   /* 25% from the top */
   width: 100%;
   /* 100% width */
   text-align: left;
   /* Centered text/links */
   margin-top: 30px;
   /* 30px top margin to avoid conflict with the close button on smaller screens */
 }
 
 /* The navigation links inside the overlay */
 .overlay a {
   padding: 8px;
   text-decoration: none;
   font-size: 16px;
   color: #ffffff;
   display: block;
   /* Display block instead of inline */
   transition: 0.3s;
   /* Transition effects on hover (color) */
 }
 
 /* When you mouse over the navigation links, change their color */
 .overlay a:hover,
 .overlay a:focus {
   color: #0e0e0e;
 }
 
 /* Position the close button (top right corner) */
 .overlay .closebtn {
   position: absolute;
   top: 20px;
   right: 45px;
   font-size: 60px;
 }
 
 /* When the height of the screen is less than 450 pixels, change the font-size of the links and position the close button again, so they don't overlap */
 @media screen and (max-height: 450px) {
   .overlay a {
     font-size: 20px;
   }
 
   .overlay .closebtn {
     font-size: 40px;
     top: 15px;
     right: 35px;
   }
 }
 
 @media only screen and (max-width: 800px) {
   header {
background:radial-gradient(100% 239.5% at 0% 0%, #4789BE 0%, #000854 100%);
border:none;
   }
   
 
   header .wrapper .text-container p {
     padding: 0px 35px 35px 40px;
     width: 100%;
     font-size: 13px;
     line-height: normal;
   }
 
   header .wrapper {
     display: flex;
     flex-direction: column-reverse;
   }
 
   header .wrapper .list-container {
     height: fit-content;
 
     margin-top: 0;
     flex-grow: 1;
   }
 
   header .wrapper .text-container {
     margin-top: 0;
     flex-grow: 99;
     display: flex;
     flex-direction: column;
     /* justify-content: center; */
      background: radial-gradient(100% 239.5% at 0% 0%, #4789BE 0%, #000854 100%);
      border:transparent;
   }
 
   header .wrapper .text-container .planet {
     flex-direction: row;
     justify-content: center;
     margin: 45px auto 0px auto;
   }
 
   header .wrapper .text-container .planet img {
     width: 150px;
     height: 150px;
   }
 
   header .wrapper .text-container img {
     height: 100%;
   }
 
   header .wrapper .text-container h3 {
     padding: 40px 35px 2px 40px;
     width: 100%;
     font-size: 24px;
 
     line-height: normal;
   }
 
   f header .wrapper .text-container p {
     padding: 0px 35px 35px 40px;
     width: 100%;
     font-size: small;
 
     line-height: normal;
   }
 
   header .wrapper .list-container {
     /* background: #; */
   }
 
   header .wrapper .list-container .list li {
     list-style-type: none;
     /* width: 124px;
         height: 21px; */
     color: #fcfcfc;
 
     font-family: "DM Sans";
     font-style: normal;
     font-weight: 500;
     display: inline-flex;
     font-size: 16px;
     line-height: 21px;
   }
 
   header .wrapper .list-container img {
     border: 3px solid #000854;
     margin: 7px 15px;
     border-radius: 5px;
     padding: 4px;
     cursor: pointer;
   }
 
   .navigation-bar {
     display: flex;
     flex-direction: row;
     justify-content: space-between;
   }
 
   .navigation-bar img {
     height: 21px !important;
   }
 
   .container {
     /* display: inline-block; */
     cursor: pointer;
   }
 
   .bar1,
   .bar2,
   .bar3 {
     width: 35px;
     height: 3px;
     background-color: #ffffff;
     margin: 6px 0;
     transition: 0.4s;
   }
 
   /* Rotate first bar */
   .change .bar1 {
     -webkit-transform: rotate(-45deg) translate(-9px, 6px);
     transform: rotate(-45deg) translate(-9px, 6px);
   }
 
   /* Fade out the second bar */
   .change .bar2 {
     opacity: 0;
   }
 
   /* Rotate last bar */
   .change .bar3 {
     -webkit-transform: rotate(45deg) translate(-8px, -8px);
     transform: rotate(45deg) translate(-8px, -8px);
   }
 }
 
    
     








.newsletter {

    color: #E5E5E5;
    /* z-index: 9; */
    background: #0E0E0E;
    position: absolute;
    width: 900px;
    height: 300px;
    /* border-radius: 20px; */
    left: -50%;
    right: -50%;
    /* padding: 20px; */
    margin: 0px auto -250px auto;
    border-radius: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.newsletter .content {
    width:500px ;
    padding:10px;
}

.newsletter h4 {
    font-family: DM Sans;
}

.newsletter p {
    font-family: DM Sans;
    /* width:400px; */
}

footer {
    display: flex;
    align-items: flex-end;
    /* flex-direction: row !important; */
    justify-content: center;

    /* ff 3.6+ */
    background: -moz-radial-gradient(ellipse at 72% 51%, rgba(255, 255, 255, 1) 48%, rgba(84, 255, 142, 1) 100%);

    /* safari 5.1+,chrome 10+ */
    background: -webkit-radial-gradient(ellipse at 72% 51%, rgba(255, 255, 255, 1) 48%, rgba(84, 255, 142, 1) 100%);

    /* opera 11.10+ */
    background: -o-radial-gradient(ellipse at 72% 51%, rgba(255, 255, 255, 1) 48%, rgba(84, 255, 142, 1) 100%);

    /* ie 10+ */
    background: -ms-radial-gradient(ellipse at 72% 51%, rgba(255, 255, 255, 1) 48%, rgba(84, 255, 142, 1) 100%);

    /* global 92%+ browsers support */
    background: radial-gradient(ellipse at 72% 51%, rgba(255, 255, 255, 1) 48%, rgba(84, 255, 142, 1) 100%);

    min-height: 300px;
    margin-top: 100px;
    max-width: 100%;
}

.footer {
    /* padding: 10px;    */
}

.footer h6 {
    font-family: 'DM Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 22px;
    line-height: 32px;
    /* padding-left: 10px;  */

}

.footer a {
    font-family: 'DM Sans';
     font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 21px;
    text-decoration: none;
    color: #0E0E0E !important;
    /* padding-left: 10px;  */
}

.footer img {
    /* margin: 10px; */
}

 
 





  






@media only screen and (max-width:800px) {
  
.newsletter {
        /* position:relative; */
        max-width: 300px;
        height: 400;
        border-radius: 10px;
        /* margin: -100px auto 0px auto;  */
        /* box-shadow: #54FF8E 0px 20px 200px -10px; */
        padding: 10px
    }

    .newsletter .content input {
        width: 90%
    }

    footer {
background:radial-gradient(100% 239.5% at 0% 0%, #4789BE 0%, #000854 100%);

    }

}

   






 </style>




