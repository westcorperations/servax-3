<template>
  <header>
    <div class="d-none d-lg-block p-3"><img src="../assets/img/logo.svg" alt="" /></div>
    <div class="wrapper">
      <div class="text-container">
        <!-- navigation bar setion -->
        <div class="navigation-bar p-4 d-lg-none">
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
                
              ">Home</router-link>
             <router-link :to="{ name: 'Team' }" class="
                
              ">Team</router-link>
              <router-link :to="{ name: 'Roadmap' }" class="
                
              ">Roadmap</router-link>
              <router-link :to="{ name: 'Tokenomics' }" class="
                
              ">Tokenomics</router-link>
              <router-link :to="{ name: 'Whitepaper' }" class="
                
              ">Whitepaper</router-link>
            </div>
          </div>
        </div>


        <!-- planet icon/logo image -->
        <div class="planet">
          <img src="../assets/img/planet.svg" alt="" class="d-lg-none" v-if="show" />
        </div>
        <!-- header text  -->
        <div class="text">
          <h3 class="h3">{{ heading }}</h3>
          <div data-aos="fade-right">
            <p>
              {{ subheading }}
            </p>
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
              <span class="mx-3">04</span><router-link
              :to="{ name: 'Whitepaper' }"
              class="
               
              "
              >Whitepaper</router-link
            >
            </li>
           
          </ol>
        </div>
      </div>
    </div>
  </header>

  

</template>


<script>
// import Upbox from '@/components/Upbox.vue'
export default {
  name: "Header",
  components: {
    // Upbox,
  },
  props: {
    heading: {
      type: String,
    },
    subheading: {
      type: String,
    },
  },

  data() {
    return {
      width: 0,
      normal: '',
       show:true,
    };
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
};
</script>
 <style scoped>
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
   margin-top: 2.5%;
   margin-left:20%;
   /* height:40px; */
   justify-content: center;
 
   flex-direction: column;
 }
 
 header .wrapper .text-container h3 {
   /* width: fit-content; */
   /* text-shadow: 3px 3px 6px rgba(0, 0, 0, 0.5); */
   margin: 7px 6.5%;
 
   /* width: 650px; */
   /* height: fit-content; */
   font-family: "Monument Extended";
   font-style: normal;
   font-weight: 800;
   font-size: 32.6896px;
   line-height: 2.5rem;
 width:400px;
 
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
   height: 100vh;
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
   top: 25%;
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
 
 @media screen and (max-width: 800px) {
   header .wrapper .text-container {
     width:100% ;
     font-size:20px;
     margin-left:3px ;
     margin-right:3px;

   };

 
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
     padding: 10px 35px 35px 40px;
     width: 300px;
     font-size: large;
    margin:12px 0px;
     line-height: normal;
   }
 
   header .wrapper .text-container p {
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
 </style>


